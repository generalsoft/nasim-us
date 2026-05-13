import { ui, type Locale, type TranslationKey, defaultLocale, locales } from './ui';

/** Get the current locale from the URL or fall back to the default. */
export function getLocaleFromUrl(url: URL): Locale {
  const [, maybeLocale] = url.pathname.split('/');
  if (maybeLocale && (locales as readonly string[]).includes(maybeLocale)) {
    return maybeLocale as Locale;
  }
  return defaultLocale;
}

/** Translate a UI key into the given locale. */
export function t(locale: Locale, key: TranslationKey): string {
  return ui[locale]?.[key] ?? ui[defaultLocale][key] ?? key;
}

/** Build a locale-aware href. Pass the target locale and the base-relative path
 *  WITHOUT a leading locale prefix.
 *
 *  Example:  localizedHref('ar', '/about/')  →  '/ar/about/'
 *            localizedHref('en', '/about/')  →  '/about/'
 */
export function localizedHref(locale: Locale, path: string): string {
  const cleanPath = path.startsWith('/') ? path : '/' + path;
  if (locale === defaultLocale) {
    return cleanPath;
  }
  return '/' + locale + cleanPath;
}

/** Get the alternative locale (for the language switcher). */
export function otherLocale(locale: Locale): Locale {
  return locale === 'ar' ? 'en' : 'ar';
}
