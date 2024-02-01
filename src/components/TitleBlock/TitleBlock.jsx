import css from "./TitleBlock.module.css";

const TitleBlock = ({ title, description }) => {
  return (
    <div className={css.container}>
      {title && <p className={css.title}>{title}</p>}
      <div className={css.line}></div>
      {description && <p className={css.description}>{description}</p>}
    </div>
  );
};

export default TitleBlock;
