"use client";

import css from "./LanguagesList.module.css";
import Icon from "@/components/Icon/Icon";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "../../../../../i18nConfig";
import { useState } from "react";

const LanguagesList = () => {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(currentLocale.toUpperCase());

  const handleClick = () => setIsOpen((prev) => !prev);

 
  const handleChange = (e) => {
    const newLocale = e.target.textContent.toLowerCase();
    setSelectedLanguage(newLocale.toUpperCase());

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  

  return (
    <div className={css.customSelect}>
      <div className={css.selectedText} onClick={handleClick}>
        {selectedLanguage}
        <Icon
          className={isOpen ? css.iconRotate : css.icon}
          name={"icon-arrow-settings"}
        />
      </div>
      <ul className={isOpen ? css.optionsOpen : css.options}>
        {currentLocale !== 'ua' && (<li className={css.item} onClick={handleChange}>
          UA
        </li>)}
        {currentLocale !== 'pl' && (<li className={css.item} onClick={handleChange}>
          PL
        </li>)}
        {currentLocale !== 'de' && (<li className={css.item} onClick={handleChange}>
          DE
        </li>)}
        {currentLocale !== 'en' && ( <li className={css.item} onClick={handleChange}>
          EN
        </li>)}
      </ul>
    </div>
  );
};

export default LanguagesList;
