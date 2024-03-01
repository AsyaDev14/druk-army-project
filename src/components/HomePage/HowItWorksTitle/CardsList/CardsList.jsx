import Image from "next/image";
import css from "./CardsList.module.css";

const cards = [
  {
    src: "/img/home/process/solder.png",
    alt: "Український військовий - замовник",
    number: 1,
    descTitle: "Замовлення",
    descText: "Військовий або медик замовляє вироби, які йому наразі потрібні",
  },
  {
    src: "/img/home/process/printer.png",
    alt: "Друкар, що друкує 3D вироби",
    number: 2,
    descTitle: "Друк",
    descText: "Ви реєструєтесь та друкуєте вироби на 3D-принтері",
  },
  {
    src: "/img/home/process/volunteer.png",
    alt: "Волонтер, що відправляє вироби",
    number: 3,
    descTitle: "Відправлення",
    descText: "Відправляєте надруковане — підвищуєте нашу обороноздатність",
  },
];

const CardsList = () => {
  return (
    <div className={css.cardsSection}>
      <ul className={css.listCards}>
        {cards.map((card) => (
          <li key={card.number} className={css.cardItem}>
            <div className={css.imageContainer}>
              <Image
                src={card.src}
                alt={card.alt}
                width={300}
                height={302}
                className={css.imageCard}
              />
            </div>
            <div className={css.descriptionContainer}>
              <div className={css.number}>
                <p>{card.number}</p>
              </div>
              <div className={css.description}>
                <h3>{card.descTitle}</h3>
                <p>{card.descText}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardsList;
