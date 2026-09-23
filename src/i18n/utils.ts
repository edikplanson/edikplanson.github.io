import { getContent, type Lang } from "../config";
import { defaultLang, navItems, ui, type UIKey } from "./ui";

const base = import.meta.env.BASE_URL.replace(/\/+$/, "");

/** Strip the deploy base and any trailing slash, keeping a leading "/". */
const normalize = (pathname: string) => {
  const withoutBase = base && pathname.startsWith(base)
    ? pathname.slice(base.length)
    : pathname;
  return ("/" + withoutBase.replace(/^\/+|\/+$/g, "")).replace(/\/$/, "") || "/";
};

/** "fr" for /fr/... , otherwise the default language. */
export function getLangFromUrl(url: URL): Lang {
  const [, first] = normalize(url.pathname).split("/");
  return first === "fr" ? "fr" : defaultLang;
}

/** The current page's path with the language segment removed ("/projects/"). */
export function getRouteFromUrl(url: URL): string {
  const path = normalize(url.pathname);
  const stripped = path === "/fr" ? "/" : path.replace(/^\/fr(?=\/)/, "");
  return stripped === "/" ? "/" : `${stripped}/`;
}

/** Turn a canonical route into a href for `lang`, base URL included. */
export function localizePath(route: string, lang: Lang): string {
  const prefix = lang === defaultLang ? "" : `/${lang}`;
  const path = route === "/" ? `${prefix}/` : `${prefix}${route}`;
  return `${base}${path}`;
}

export function useTranslations(lang: Lang) {
  return (key: UIKey): string => ui[lang][key] ?? ui[defaultLang][key];
}

/**
 * Nav entries for `lang`, minus any whose backing content is empty.
 * An item with `requires: "press"` disappears once `content[lang].press`
 * is emptied — same conditional-rendering rule the sections follow.
 */
export function visibleNavItems(lang: Lang) {
  const c = getContent(lang) as Record<string, unknown>;
  return navItems.filter((item) => {
    const requires = (item as { requires?: string }).requires;
    if (!requires) return true;
    const data = c[requires];
    return Array.isArray(data) && data.length > 0;
  });
}
