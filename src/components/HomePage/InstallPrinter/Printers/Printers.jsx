import Image from "next/image";
import css from "./Printer.module.css";

const printers = [
  {
    image: "/img/home/calculator/printer1.png",
    title: "ENDER-3 V3 SE",
    quality: "1084 шт.",
  },
  {
    image: "/img/home/calculator/printer.png",
    title: "CREALITY ENDER 3 V2",
    quality: "478 шт.",
  },
  {
    image: "/img/home/calculator/printer3.png",
    title: "CREALITY ENDER 3",
    quality: "415 шт.",
  },
];

const Printers = () => {
  return (
    <div className={css.printersContainer}>
      <ul className={css.printersList}>
        {printers.map(({ image, title, quality }) => (
          <li key={title} className={css.printerCard}>
            <div>
              <Image
                src={image}
                alt={`принтер моделі ${title}`}
                width={236}
                height={236}
                className={css.printerImage}
              />
            </div>
            <h3 className={css.model}>{title}</h3>
            <p className={css.quality}>{quality}</p>
          </li>
        ))}
      </ul>
      <div className={css.imageContainer}>
        <Image
          src="/img/home/calculator/working.png"
          alt="як люди працюють"
          width={433}
          height={474}
          className={css.imageWorking}
        />
      </div>
    </div>
  );
};

export default Printers;
