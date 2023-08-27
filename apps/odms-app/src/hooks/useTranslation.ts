import { initI18next } from "../lib/i18n/i18n.init";

export async function useTranslation(language: string, ns: string, options = {}) {
  const i18nextInstance = await initI18next(language, ns);
  return {
    t: i18nextInstance.getFixedT(language, Array.isArray(ns) ? ns[0] : ns),
    i18n: i18nextInstance,
  };
}
