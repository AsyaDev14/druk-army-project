import css from "./InfoBlock.module.css";

const InfoBlock = ({ firstString, secondString, description }) => {
  return (
    <div className={css.container}>
      {firstString && <h3 className={css.firstString}>{firstString}</h3>}
      {secondString && <h2 className={css.secondString}>{secondString}</h2>}

      {description && <p className={css.description}>{description}</p>}
    </div>
  );
};

export default InfoBlock;
