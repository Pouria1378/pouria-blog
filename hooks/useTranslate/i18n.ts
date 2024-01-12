import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import fa from "./fa/translation.json";
import en from "./en/translation.json";

i18n.use(initReactI18next).init({
  lng: "en",
  debug: true,
  resources: {
    fa: {
      translation: fa,
    },
    en: {
      translation: en,
    },
  },
});

export default i18n;
