import TermsImage from "@/components/termsPage/TermsImage";
import css from "./terms.module.css";

const Terms = () => {
  return (
    <div className={css.termsPage}>
      <TermsImage />
      <div className={css.containerTerms}>
        <div className={css.titleBlock}>
          <h2 className={css.title}>
            <span>правила та умови</span>сервісу
          </h2>
          <p className={css.titleBlock_text}>
            Безкоштовний 3D-друк для військових, реєстрація друкарів та
            донорські внески для підтримки проекту, категоризація проектів та
            ефективне використання донатів.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
