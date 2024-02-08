"use client";

import { useTranslation } from "react-i18next";
import ContactsFooter from "./ContactsFooter/ContactsFooter";
import css from "./Footer.module.css";
import ListCards from "./ListCards/ListCards";
import NavMenuFooter from "./NavMenuFooter/NavMenuFooter";
import SocialMedia from "./SocialMedia/SocialMedia";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={css.footer}>
      <div>
        <h2 className={css.footerTitle}>{t("footer:recomendations")}:</h2>
        <ListCards />
      </div>
      <div>
        <NavMenuFooter />
        <SocialMedia />
        <ContactsFooter />
      </div>
    </footer>
  );
};

export default Footer;
