"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import Icon from "@/components/Icon/Icon";
import ShareButton from "@/components/aboutPage/ShareButton/ShareButton";
import css from "./Button.module.css";

const Buttons = () => {
  const { t } = useTranslation();

  return (
    <div className={css.buttonWrapper}>
      <Link
        className={css.button}
        href="/donations"
        aria-label="Перейти на сторінку донатів"
      >
        <Icon className={css.icon} name="icon-banknote" />
        {t("about:linkText")}
      </Link>

      <ShareButton />
    </div>
  );
};

export default Buttons;
