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

  const handleClick = () => setIsOpen(prev => !prev);


  const handleChange = (e) => {
    const newLocale = e.target.value;

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
      <div className={css.selectedText} onClick={handleClick}>UK<Icon className={isOpen ? css.iconRotate : css.icon} name={'icon-arrow-settings'}/></div>

      <select
        onChange={handleChange}
        value={currentLocale}
        className={css.select}
      >
        <option value="uk" className={css.language}>UK</option>
        <option value="pl" className={css.language}>PL</option>
        <option value="de" className={css.language}>DE</option>
        <option value="en" className={css.language}>EN</option>
      </select>
      <ul className={isOpen ? css.optionsOpen : css.options}>
        <li className={css.item}>UK</li>
        <li className={css.item}>PL</li>
        <li className={css.item}>DE</li>
        <li className={css.item}>EN</li>
      </ul>
    </div>
  );
};

export default LanguagesList;
