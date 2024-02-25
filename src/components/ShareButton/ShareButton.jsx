"use client";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Icon from "../Icon/Icon";
import css from "./ShareButton.module.css";

const ShareButton = () => {
  const [canShare, setCanShare] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    // Перевіряємо, чи доступний Web Share API
    if (navigator.share) {
      setCanShare(true);
    }
  }, []);

  const share = () => {
    if (canShare) {
      navigator
        .share({
          title: "Назва Вашого сайту",
          url: window.location.href,
        })
        .then(() => console.log("Посилання успішно поділено"))
        .catch(console.error);
    }
  };

  return (
    <button className={css.button} onClick={share} disabled={!canShare}>
      <Icon className={`${css.icon} ${css.secondary}`} name="icon-mix-lines" />
      {t("about:shareButtonText")}
    </button>
  );
};

export default ShareButton;
