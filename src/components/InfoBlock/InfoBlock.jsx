import css from "./InfoBlock.module.css";

const InfoBlock = ({ firstString, secondString, description, color }) => {
  return (
    <div className={css.container}>
      {firstString && <h3 className={css.firstString}>{firstString}</h3>}
      {secondString && (
        <h2 className={css.secondString} style={{ color: color }}>
          {secondString}
        </h2>
      )}

      {description && <p className={css.description}>{description}</p>}
    </div>
  );
};

export default InfoBlock;
