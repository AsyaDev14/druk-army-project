import css from "./InfoBlock.module.css";

const InfoBlock = ({
  firstTitle,
  secondTitle,
  description,
  color,
  alignRight,
  marginLeft,
}) => {
  const containerStyle = {
    marginLeft: alignRight ? "auto" : marginLeft || "initial",
  };

  return (
    <div className={css.container} style={containerStyle}>
      {firstTitle && <h3 className={css.firstTitle}>{firstTitle}</h3>}
      {secondTitle && (
        <h2 className={css.secondTitle} style={{ color: color }}>
          {secondTitle}
        </h2>
      )}
      {description && <p className={css.description}>{description}</p>}
    </div>
  );
};

export default InfoBlock;
