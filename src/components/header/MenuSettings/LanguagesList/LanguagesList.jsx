"use client";

import { useState } from "react";
import css from "./LanguagesList.module.css";
import Icon from "@/components/Icon/Icon";
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from "@/i18Config";

const LanguagesList = () => {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const [showLanguages, setShowLanguages] = useState(false);
  const [language, setLanguage] = useState('uk');

  const handleShowLanguages = () => {
    setShowLanguages((prev) => !prev);
  };

  const handleChange = e => {
    const newLocale = e.target.value;
    setLanguage(newLocale);

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = '; expires=' + date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push('/' + language + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${language}`)
      );
    }

    router.refresh();
  };

  return (
    <div className={css.langs}>
      <div className={css.listLang}>
        <div className={css.selectedLang}>
          <p>UA</p>
          <button
            type="button"
            className={css.showLang}
            onClick={handleShowLanguages}
          >
            <Icon
              className={
                showLanguages ? css.iconArrowUp : css.iconArrowDown
              }
              name={"icon-arrow-settings"}
            />
          </button>
        </div>
        {showLanguages && (<div className={css.otherLangs}>
          <button value={"pl"} type="button" onClick={handleChange}>
            <p>PL</p>
          </button>
          <button value={"de"} type="button" onClick={handleChange}>
            <p>DE</p>
          </button>
          <button value={"en"} type="button" onClick={handleChange}>
            <p>EN</p>
          </button>
        </div>)}
      </div>
    </div>
  );
};

export default LanguagesList;
