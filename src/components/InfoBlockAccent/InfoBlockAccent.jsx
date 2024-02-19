import css from "./InfoBlockAccent.module.css";

const InfoBlockAccent = ({ firstTitle, secondTitle, description }) => {
  return (
    <div className={css.container}>
      {firstTitle && <h2 className={css.firstTitle}>{firstTitle}</h2>}
      {secondTitle && <h3 className={css.secondTitle}>{secondTitle}</h3>}
      {description && <p className={css.description}>{description}</p>}
    </div>
  );
};

export default InfoBlockAccent;
