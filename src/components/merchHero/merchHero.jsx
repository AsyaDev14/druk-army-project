import Icon from "../Icon/Icon";
import styles from "./merchHero.module.css";
import Image from "next/image";
const MerchHero = () => {
  return (
    <div className={styles.hero_container}>
      <div className={styles.hero_img}>
        <Image
          className={styles.img}
          src="/img/merch/t-shirts.png"
          alt="Two shirts with text 'Друк Армія, Друкую Перемогу'"
          width={300}
          height={440}
        />
      </div>
      <div className={styles.details}>
        <h1 className={styles.title}>
          Ласкаво просимо до
          <span className={styles.subtitle}>&quot;ДрукАрмія&quot;</span>
        </h1>
        <p className={styles.text}>
          – серця та душі спільноти, яка служить нашій країні з найглибшим
          покликанням. Ми – це не просто магазин мерчу, ми – рушійна сила, що
          надає підтримку та ресурси нашим військовим, щоб захистити Україну від
          будь-яких викликів. Разом ми змінюємо реальність та будуємо майбутнє
          нашої країни.
        </p>
        <button className={styles.btn}>
          <Icon name="t-shirt" className={styles.icon} /> Обрати мерч
        </button>
      </div>
    </div>
  );
};

export default MerchHero;
