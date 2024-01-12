"use client";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";
import { useEffect } from "react";
import { Languages } from "@/types/globals";
import Cookies from "@/services/cookies";

const useTranslate = () => {
  const { t, ready } = useTranslation();

  useEffect(() => {
    changeLanguage((Cookies.get("currentLanguage") as Languages) || "en");
  }, []);

  const changeLanguage = (language: Languages) => {
    Cookies.set("currentLanguage", language || "en");
    i18n.changeLanguage(language);
    document.documentElement.dir = language === "fa" ? "rtl" : "ltr";
  };

  const currentLanguage = () => {
    return Cookies.get("currentLanguage");
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
