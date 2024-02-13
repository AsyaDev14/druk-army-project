"use client";

import React from "react";
import Image from "next/image";
import styles from "./VacanciesModal.module.css";
import Icon from "@/components/Icon/Icon";

import modalImg from "../../../../public/img/vacancies/apply-modal.png";
import VacanciesForm from "./VacanciesForm";

export const VacanciesModal = () => {
  return (
    <div className={styles.vacModalContainer}>
      <Image src={modalImg} alt="modal img" className={styles.modalImg} />
      <button type="button" className={styles.vacModalBtn}>
        <Icon name="icon-telegram" className={styles.vacModalBtnSvg} />
        пиши в Telegram
      </button>
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
  );
};
