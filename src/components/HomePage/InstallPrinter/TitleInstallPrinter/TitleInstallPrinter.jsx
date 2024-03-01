import css from "./TitleInstallPrinter.module.css";

const TitleInstallPrinter = () => {
  return (
      <div className={css.mainTitleContainer}>
        {/*============== Жовто-блакитна лінія ===============*/}
        <div className={css.decorationLine}>
          <span className={css.yellowAccent}></span>
        </div>
        {/* ============================================== */}
        <h2 className={css.mainTitle}>
          <span className={css.titleFirst}>встанови принтер</span>
          <span className={css.titleAccent}>в УкраЇні</span>
        </h2>
        <p className={css.mainTitleText}>
          Розташування 3D-принтера в Україні підвищує логістичну ефективність
          порівняно з друком за кордоном, оскільки зменшуються витрати на
          доставку.   Встановлена вебкамера дозволяє спостерігати за процесом друку в
          реальному часі, забезпечуючи максимальну ефективність принтера для{" "}
          <abbr title="Збройні Сили України">ЗСУ</abbr>.
        </p>
      </div>
  );
};

export default TitleInstallPrinter;
