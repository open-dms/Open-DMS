export const fallbackLng = "en";
export const languages = [fallbackLng, "de"];
export const defaultNS = "common";

/** @note read more about i18next: https://github.com/i18next/next-i18next  */

export function i18nConfig(lng = fallbackLng, ns = defaultNS) {
  return {
    debug: process.env.NODE_ENV !== "production" ? true : false,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
    react: {
      useSuspense: true,
      wait: true,
    },
    loadPath: "./locales/{{lng}}/{{ns}}.json",
  };
}
