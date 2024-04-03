import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HEADER_VN from "../languages/VN/header.json";
import HEADER_EN from "../languages/EN/header.json";
import AUTH_VN from "../languages/VN/auth.json";
import AUTH_EN from "../languages/EN/auth.json";

export const locales = {
  en: "ENG",
  vn: "VI",
} as const;

export const resources = {
  vn: {
    header: HEADER_VN
  },
  en: {
    header: HEADER_EN
  },
};
export const defaultNS = "header"
i18n.use(initReactI18next).init({
  resources,
  lng: "vn",
  ns: ["header"],
  defaultNS: defaultNS,
  fallbackLng: "vn",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
