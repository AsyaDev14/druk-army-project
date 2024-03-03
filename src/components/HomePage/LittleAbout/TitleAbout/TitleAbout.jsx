import css from "./TitleAbout.module.css";

const TitleAbout = () => {
  return (
    <div className={css.mainTitleContainer}>
      <h2 className={css.mainTitle}>
        <span className={css.titleFirst}>трохи цифр</span>
        <span className={css.titleAccent}>про нас</span>
      </h2>
      <p className={css.mainTitleText}>
        Спільнота українців, які допомагають армії захищати Україну. Ми нічого
        не продаємо, всі витрати покриваються коштом друкарів, донорів та
        волонтерів.
      </p>
    </div>
  );
};

export default TitleAbout;
