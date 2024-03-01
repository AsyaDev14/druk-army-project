import Icon from "@/components/Icon/Icon";
import css from "./PrintAllTitle.module.css";

const PrintAllTitle = () => {
  return (
    <div className={css.mainTitleContainer}>
      <h2 className={css.mainTitle}>
        <span className={css.titleFirst}>друкуватимуть</span>
        <span className={css.titleAccent}>усі!!!!!!!!!</span>
      </h2>
      <p className={css.mainTitleText}>
        3D-принтер коштує $250, будь-хто може встановити його вдома, жодних
        шкідливих випаровувань, декількох днів вистачить, щоб навчитись та
        почати друкувати.
      </p>
      <p className={css.mainTitleText}>
       Що і як робити, який принтер обрати та де його придбати читай після реєстрації в розділі &quot;Школа&quot;.
      </p>
      <button
              type="button"
              aria-label="Долучитися і перейти до форми"
              className={css.btn}
            >
              <span className={css.btnText}>
                <Icon className={css.communityIcon} name={"icon-people"} />
                Долучитися
              </span>
            </button>
    </div>
  );
};

export default PrintAllTitle;
