"use client";

import { useTranslation } from "react-i18next";
import ContactsFooter from "@/components/footer/ContactsFooter/ContactsFooter";
import ListCards from "@/components/footer/ListCards/ListCards";
import NavMenuFooter from "@/components/footer/NavMenuFooter/NavMenuFooter";
import SocialMedia from "@/components/footer/SocialMedia/SocialMedia";
import css from "@/components/footer/Footer.module.css";

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
