import css from "./TitleBlock.module.css";

const TitleBlock = ({ title, description, maxWidth, secondDescription }) => {
  return (
    <div className={css.container} style={{ maxWidth: maxWidth}}>
      {title && <p className={css.title}>{title}</p>}
      <div className={css.line}></div>
      {description && <p className={css.description}>{description}</p>}
      {secondDescription && (
        <p className={css.description}>{secondDescription}</p>
      )}
    </div>
  );
};

export default TitleBlock;
