"use client";

import { useTranslation } from "react-i18next";
import Icon from "@/components/Icon/Icon";
import css from "./Button.module.css";

const Button = () => {
  const { t } = useTranslation();

  return (
    <a
      className={css.button}
      href="https://app.drukarmy.org.ua"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className={css.icon} name="icon-people" />
      {t("how-it-works:button")}
    </a>
  );
};

export default Button;
