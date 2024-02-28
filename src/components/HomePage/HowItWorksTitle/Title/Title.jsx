import css from "./Title.module.css";

const Title = () => {
  return (
    <div className={css.mainTitleContainer}>
      <h2 className={css.mainTitle}>
        <span className={css.titleFirst}>три простих кроки до перемоги</span>
        <span className={css.titleAccent}>як це працює?</span>
      </h2>
      <p className={css.mainTitleText}>
        Наша місія — забезпечити військових необхідними ресурсами, які
        виготовляються за допомогою 3D-друку.
      </p>
    </div>
  );
};

export default Title;
