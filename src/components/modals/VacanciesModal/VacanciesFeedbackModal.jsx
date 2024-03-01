import { VacanciesModal } from "@/components/modals/VacanciesModal/VacanciesModal";
import Image from "next/image";
import VacanciesForm from "./VacanciesForm";
import modalImg from "../../../../public/img/vacancies/apply-modal.png";
import Icon from "@/components/Icon/Icon";
import styles from "./VacanciesModal.module.css";

export const VacanciesFeedbackModal = ({
  isModalOpen,
  handleCloseModal,
  handleFeedbackResultOpenModal,
}) => {
  return (
    <VacanciesModal isOpen={isModalOpen} onClose={handleCloseModal}>
      <>
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
          <VacanciesForm
            handleFeedbackResultOpenModal={handleFeedbackResultOpenModal}
          />
        </div>
      </>
    </VacanciesModal>
  );
};
