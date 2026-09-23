/**
 * Reads the media folders under `public/media/` at build time.
 *
 * The folder IS the source of truth: drop a file into
 * `public/media/projects/wall-e-animatronic/` and it shows up on the site —
 * no code to touch. Files are ordered by filename, so a `01-`, `02-` prefix
 * controls the order, and the rest of the name becomes the caption.
 *
 *   public/media/projects/smart-car/02-proteus.webp
 *                         ^folder            ^caption "Proteus"
 */
import fs from "node:fs";
import path from "node:path";

const MEDIA_DIR = path.join(process.cwd(), "public", "media");

const IMAGE_EXT = [".webp", ".jpg", ".jpeg", ".png", ".gif", ".avif", ".svg"];
const VIDEO_EXT = [".mp4", ".webm"];

export type MediaItem = {
  /** Site-root URL, ready for src=. */
  src: string;
  /** Human caption derived from the filename. */
  caption: string;
  kind: "image" | "video";
};

/** "02-cablage-du-bras.webp" -> "Cablage du bras" */
const captionFromFilename = (filename: string): string => {
  const base = path
    .basename(filename, path.extname(filename))
    .replace(/^\d+[-_.\s]*/, "")
    .replace(/[-_]+/g, " ")
    .trim();
  return base ? base.charAt(0).toUpperCase() + base.slice(1) : "";
};

/**
 * Lists a media folder, e.g. getMedia("projects/smart-car").
 * An unknown or empty folder simply returns [] — the caller renders nothing.
 */
export const getMedia = (folder: string): MediaItem[] => {
  if (!folder) return [];

  // Never let a config value escape public/media.
  const dir = path.resolve(MEDIA_DIR, folder);
  if (!dir.startsWith(MEDIA_DIR) || !fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && !entry.name.startsWith("."))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b, "en", { numeric: true }))
    .flatMap((name) => {
      const ext = path.extname(name).toLowerCase();
      const kind = IMAGE_EXT.includes(ext)
        ? ("image" as const)
        : VIDEO_EXT.includes(ext)
          ? ("video" as const)
          : null;
      if (!kind) return [];
      return [
        {
          src: `/media/${folder}/${encodeURIComponent(name)}`,
          caption: captionFromFilename(name),
          kind,
        },
      ];
    });
};

/** First item of a folder — handy for a cover/thumbnail. */
export const getCover = (folder: string): MediaItem | undefined =>
  getMedia(folder)[0];
