"use client";

import { useTranslation } from "react-i18next";
import Link from "next/link";
import Icon from "@/components/Icon/Icon";
import css from "./ContentNotFound.module.css"

const ContentNotFound = () => {
 const { t } = useTranslation();
  return (
    <>
      <h2 className={css.title}>{t("notfound:title")}</h2>
      <p className={css.text}>{t("notfound:text")}</p>
      <div className={css.buttonsContainer}>
        <Link
          href={"/"}
          aria-label={t("notfound:ariaLabeltoHome")}
          className={css.linkHome}
        >
          {t("notfound:toHome")}
        </Link>
        <button type="button" className={css.buttonSupport}>
          <Icon className={css.iconSupportBtn} name={"icon-banknote"} />
          {t("notfound:support")}
        </button>
      </div>
    </>
  );
};

export default ContentNotFound;
