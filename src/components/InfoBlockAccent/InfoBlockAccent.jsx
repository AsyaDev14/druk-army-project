import css from "./InfoBlockAccent.module.css";

const InfoBlockAccent = ({ firstTitle, secondTitle, description }) => {
  return (
    <div className={css.container}>
      {firstTitle && <h3 className={css.firstTitle}>{firstTitle}</h3>}
      {secondTitle && <h2 className={css.secondTitle}>{secondTitle}</h2>}
      {description && <p className={css.description}>{description}</p>}
    </div>
  );
};

export default InfoBlockAccent;
