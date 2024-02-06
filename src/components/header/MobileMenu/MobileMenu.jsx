"use client";

import { useTranslation } from "react-i18next";
import css from "./MobileMenu.module.css";
import NavLink from "../HeaderMenu/NavLink/NavLink";
import LoginBtn from "../LoginBtn/LoginBtn";
import HeaderSettings from "../HeaderSettings/HeaderSettings";

const MobileMenu = () => {
  const { t } = useTranslation();
  const links = [
    {
      title: t("header:toMain"),
      path: "/",
    },
    {
      title: t("header:toAbout"),
      path: "/about",
    },
    {
      title:  t("header:toHowItWorks"),
      path: "/how-it-works",
    },
    {
      title: t("header:toDonation"),
      path: "/donations",
    },
    {
      title: t("header:toNews"),
      path: "/news",
    },
  ];

  return (
    <div className={css.backdrop}>
      <nav className={css.menuContainer}>
        <div className={css.navMenuList}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
        <div className={css.buttonsBox}>
          <LoginBtn />
          <HeaderSettings />
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;
