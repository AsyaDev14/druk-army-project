"use client";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import Icon from "@/components/Icon/Icon";
import InfoBlock from "@/components/InfoBlock/InfoBlock";
import css from "./Modal.module.css";
import ShareButton from "../ShareButton/ShareButton";

const Modal = ({ close }) => {
  const { t } = useTranslation();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        close();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "visible";
    };
  }, [close]);

  const handleClickOutside = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      close();
    }
  };

  return (
    <div className={css.wrapper} onClick={handleClickOutside}>
      <div className={css.content}>
        <button className={css.closeButton} onClick={close}>
          <Icon className={css.iconClose} name="icon-close-modal" />
        </button>
        {/* {children} */}

        <img
          src="/img/about/modal-image.jpg"
          alt="One person telling something to another person in a natural setting. The scene is set outdoors in a park"
        />

        <div className={css.info}>
          <InfoBlock
            firstTitle={t("about:modalFirstTitle")}
            secondTitle={t("about:modalSecondTitle")}
            description={t("about:modalText")}
          />

          <div className={css.socials}>
            <span>{t("about:modalShareText")}</span>
            <ShareButton>
              <Icon
                className={`${css.icon} ${css.facebook}`}
                name="icon-facebook"
              />
            </ShareButton>
            <ShareButton>
              <Icon
                className={`${css.icon} ${css.telegram}`}
                name="icon-telegram"
              />
            </ShareButton>
            <ShareButton>
              <Icon className={`${css.icon} ${css.viber}`} name="icon-viber" />
            </ShareButton>
            <ShareButton>
              <Icon
                className={`${css.icon} ${css.watsapp}`}
                name="icon-watsapp"
              />
            </ShareButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
