import { defineRouting } from "next-intl/routing";

export const LOCALES = ["en", "pt"] as const;

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: LOCALES,

  // Used when no locale matches
  defaultLocale: "en",

  // Always show locale prefix in URLs (/en/, /pt/)
  localePrefix: "never",

  // Detect user's locale from browser settings
  localeDetection: true,
});
