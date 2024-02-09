"use client";

import { useTranslation } from "react-i18next";
import css from "./NavMenuFooter.module.css";
import NavLinkFooter from "./NavLinkFooter/NavLinkFooter";

const NavMenuFooter = () => {
  const { t } = useTranslation();

  const linksFooter = [
    {
      title: t("footer:toEnter"),
      path: "/login",
    },
    {
      title: t("footer:toOrder"),
      path: "/reservations",
    },
    {
      title: t("footer:toVacancies"),
      path: "/vacancies",
    },
    {
      title: t("footer:toTerms"),
      path: "/terms",
    },
  ];
  return (
    <div className={css.list}>
      {linksFooter.map((link) => (
        <NavLinkFooter item={link} key={link.title} />
      ))}
    </div>
  );
};

export default NavMenuFooter;
