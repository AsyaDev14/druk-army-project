// "use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Icon from "../../Icon/Icon";
import css from "./Button.module.css";
import Modal from "../Modal/Modal";

const Button = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && <Modal close={handleCloseModal} />}
      <button className={css.button} onClick={() => setIsModalOpen(true)}>
        <Icon
          className={`${css.icon} ${css.secondary}`}
          name="icon-mix-lines"
        />
        {t("about:buttonText")}
      </button>
    </>
  );
};

export default Button;
