import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["tj", "ru", "en"],

  // Used when no locale matches
  defaultLocale: "tj",

  // pathnames: {
  //   "/contact": {
  //     en: "contact-en",
  //     ru: "contact-ru",
  //     tj: "contact-tj",
  //   },
  // },
});
