import React from "react";
import Image from "next/image";
import styles from "./VacanciesModal.module.css";
import Icon from "@/components/Icon/Icon";

import modalImg from "../../../../public/img/vacancies/apply-modal.png";
import btnClose from "../../../../public/img/vacancies/btn-close.jpg";
import VacanciesForm from "./VacanciesForm";

export const VacanciesModal = ({ isOpen, onClose }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return isOpen ? (
    <div className={styles.vacModalBackdrop} onClick={handleBackdropClick}>
      <div className={styles.vacModalContainer}>
        <div className={styles.vacModalSecondContainer}>
          <button
            type="button"
            className={styles.vacModalBtnClose}
            onClick={onClose}
          >
            <Image src={btnClose} className={styles.vacModalBtnCloseImg} />
          </button>
          <div className={styles.vacModalImageBtnContainer}>
            <Image src={modalImg} alt="modal img" className={styles.modalImg} />
            <a
              href="https://t.me/volnov"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.vacModalBtn}
            >
              <Icon name="icon-telegram" className={styles.vacModalBtnSvg} />
              пиши в Telegram
            </a>
          </div>
          <div className={styles.vacModalTitleFormContainer}>
            <div className={styles.vacModalTitleContainer}>
              <h2 className={styles.vacModalTitle}>
                Відгукнутися на <span>Вакансію</span>
              </h2>
              <p className={styles.vacModalDescription}>
                Ми дуже потребуємо допомоги сильних українських спеціалістів.
              </p>
            </div>
            <VacanciesForm />
          </div>
        </div>
      </div>
    </div>
  ) : null;
};
