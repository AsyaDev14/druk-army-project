import { VacanciesModal } from "@/components/modals/VacanciesModal/VacanciesModal";
import Image from "next/image";
import modalImg from "../../../../public/img/vacancies/after-apply-modal.png";
import styles from "./VacanciesModal.module.css";

export const VacanciesFeedbackResultModal = ({
  isModalOpen,
  handleCloseModal,
  handleFeedbackResultOpenModal,
}) => {
  return (
    <VacanciesModal isOpen={isModalOpen} onClose={handleCloseModal}>
      <>
        <div className={styles.vacModalResultImgContainer}>
          <Image
            src={modalImg}
            alt="modal img"
            className={styles.modalImgResult}
          />
        </div>
        <div className={styles.vacModalTitleResultContainer}>
          <div className={styles.vacModalTitleContainer}>
            <h2 className={styles.vacModalTitle}>
              Дякуємо за <span>Відгук</span>
            </h2>
            <p className={styles.vacModalDescription}>
              Найближчим часом ми з вами разом будемо різати русню.
            </p>
          </div>
          <div className={styles.vacModalResultBtnContainer}>
            <button className={styles.vacModalResultBtn} type="button">
              Очікувати
            </button>
            <button className={styles.vacModalResultBtn} type="button">
              Поділитися
            </button>
          </div>
        </div>
      </>
    </VacanciesModal>
  );
};
