"use client";

import { useTranslation } from "react-i18next";
import Link from "next/link";
import css from "./ContactsFooter.module.css";

const ContactsFooter = () => {
  const { t } = useTranslation();
  return (
    <div className={css.container}>
      <ul className={css.contactList}>
        <li>
          <p className={css.text}>{t("footer:telephone")}:</p>
          <Link href={"tel:+380739207804"} className={css.contact}>
            +38 0(73) 920 78 04
          </Link>
        </li>
        <li>
          <p className={css.text}>{t("footer:mail")}:</p>
          <Link href={"mailto:3d@drukarmy.org.ua"} className={css.contact}>
            3d@drukarmy.org.ua
          </Link>
        </li>
      </ul>
      <div className={css.copyrightContainer}>
        <p className={css.copyright}>
          &copy; 2023 ДрукАрмія &mdash; {t("footer:printVictory")}!
          <Link href={"/not-found"} className={css.creatorsLink}>
            {t("footer:createdBy")}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ContactsFooter;
