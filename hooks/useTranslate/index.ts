import { useTranslation } from "react-i18next";
import i18n from "./i18n";

const useTranslate = () => {
  const { t, ready } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const currentLanguage = () => {
    // return i18nInstance.language;
  };

  return {
    t,
    i18n,
    ready,
    changeLanguage,
    currentLanguage,
  };
};

export default useTranslate;
