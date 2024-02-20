import css from "./TitleBlock.module.css";

const TitleBlock = ({ title, description, maxWidth }) => {
  return (
    <div className={css.container} style={{ maxWidth: maxWidth || "906px" }}>
      {title && <p className={css.title}>{title}</p>}
      <div className={css.line}></div>
      {description && <p className={css.description}>{description}</p>}
    </div>
  );
};

export default TitleBlock;
