import css from "./InfoBlock.module.css";

const InfoBlock = ({
  firstString,
  secondString,
  description,
  color,
  alignRight,
}) => {
  const containerStyle = {
    marginLeft: alignRight ? "auto" : "initial",
  };

  return (
    <div className={css.container} style={containerStyle}>
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
