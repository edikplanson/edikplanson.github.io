#!/usr/bin/env node
/**
 * Compresses whatever sits in `public/media/` so the site stays light.
 *
 *   npm run media
 *
 * Drop any file into `public/media/<dossier>/` and run it:
 *   - a heavy .gif  -> .mp4 (same look, ~20x smaller, played looped and muted)
 *   - a heavy photo -> .webp resized to 1600px wide
 * Originals are moved to `media-originals/` (not published, not committed).
 * The script is idempotent: already-optimised files are left alone.
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const MEDIA = path.join(ROOT, "public", "media");
const BACKUP = path.join(ROOT, "media-originals");

/** Anything lighter than this is already fine as-is. */
const GIF_MAX_BYTES = 1_000_000;
const IMAGE_MAX_BYTES = 400_000;
const MAX_WIDTH = 1600;

const walk = (dir) =>
  fs.existsSync(dir)
    ? fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
        const p = path.join(dir, e.name);
        return e.isDirectory() ? walk(p) : [p];
      })
    : [];

const ffmpeg = (args) =>
  execFileSync("ffmpeg", ["-hide_banner", "-loglevel", "error", "-y", ...args]);

const backup = (file) => {
  const dest = path.join(BACKUP, path.relative(MEDIA, file));
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.renameSync(file, dest);
  return dest;
};

const kb = (n) => `${Math.round(n / 1024)} KB`;

let saved = 0;

for (const file of walk(MEDIA)) {
  const ext = path.extname(file).toLowerCase();
  const before = fs.statSync(file).size;

  if (ext === ".gif" && before > GIF_MAX_BYTES) {
    const out = file.replace(/\.gif$/i, ".mp4");
    const src = backup(file);
    // yuv420p + even dimensions: required for Safari/iOS playback.
    ffmpeg([
      "-i", src,
      "-movflags", "faststart",
      "-pix_fmt", "yuv420p",
      "-vf", `scale='min(${MAX_WIDTH},iw)':-2:flags=lanczos`,
      "-crf", "26",
      "-an",
      out,
    ]);
    const after = fs.statSync(out).size;
    saved += before - after;
    console.log(`gif  -> mp4   ${path.relative(ROOT, out)}  ${kb(before)} -> ${kb(after)}`);
    continue;
  }

  if ([".png", ".jpg", ".jpeg"].includes(ext) && before > IMAGE_MAX_BYTES) {
    const out = file.replace(/\.(png|jpe?g)$/i, ".webp");
    const src = backup(file);
    ffmpeg([
      "-i", src,
      "-vf", `scale='min(${MAX_WIDTH},iw)':-1:flags=lanczos`,
      "-c:v", "libwebp",
      "-quality", "82",
      out,
    ]);
    const after = fs.statSync(out).size;
    saved += before - after;
    console.log(`image-> webp  ${path.relative(ROOT, out)}  ${kb(before)} -> ${kb(after)}`);
  }
}

console.log(
  saved > 0
    ? `\nSaved ${(saved / 1048576).toFixed(1)} MB. Originals kept in media-originals/.`
    : "\nNothing to optimise — everything is already light."
);
