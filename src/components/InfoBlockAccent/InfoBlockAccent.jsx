import css from "./InfoBlockAccent.module.css";

const InfoBlockAccent = ({ firstString, secondString, description }) => {
  return (
    <div className={css.container}>
      {firstString && <h3 className={css.firstString}>{firstString}</h3>}
      {secondString && <h2 className={css.secondString}>{secondString}</h2>}
      {description && (
        <div className={css.description}>
          {description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default InfoBlockAccent;
