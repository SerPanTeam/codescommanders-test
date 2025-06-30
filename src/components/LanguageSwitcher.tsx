import { useTranslation } from "react-i18next";
import styles from "./LanguageSwitcher.module.css";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className={styles.langSwitcher}>
      <button
        onClick={() => changeLanguage("en")}
        className={`${styles.langButton} ${i18n.language === "en" ? styles.active : ""}`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage("ru")}
        className={`${styles.langButton} ${i18n.language === "ru" ? styles.active : ""}`}
      >
        RU
      </button>
    </div>
  );
};
