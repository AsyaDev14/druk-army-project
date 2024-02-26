import { useCallback, useEffect } from "react";

import Icon from "@/components/Icon/Icon";
import InfoBlock from "@/components/InfoBlock/InfoBlock";
import css from "./Modal.module.css";

const Modal = ({ close }) => {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        close();
      }
    },
    [close]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "visible";
    };
  }, [close, handleKeyDown]);

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
            firstTitle="Долучайте друзів"
            secondTitle="до наших лав"
            description="Чим більше цивільних та військових знатимуть про ДрукАрмію, тим більше ми будемо наближатися до перемоги, оскільки наша спільнота безпосередньо створює різні вироби для ЗСУ які допомагають виконувати бойові розпорядження (та кошмарити русню)."
          />

          <div className={css.socials}>
            <span>Поділитися</span>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className={css.icon} name="icon-facebook" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className={css.icon} name="icon-telegram" />
            </a>
            <Icon className={css.icon} name="icon-viber" />
            <Icon className={css.icon} name="icon-watsapp" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
