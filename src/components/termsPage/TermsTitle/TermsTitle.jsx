import css from "./TermsTitle.module.css"

const TermsTitle = () => {
  return (
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
  )
}

export default TermsTitle