"use client";

import { useTranslation } from "react-i18next";
import css from "./HeaderMenu.module.css";
import NavLink from "./NavLink/NavLink";

const HeaderMenu = () => {
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
    <div className={css.list}>
      {links.map((link) => (
        <NavLink item={link} key={link.title} />
      ))}
    </div>
  );
};

export default HeaderMenu;
