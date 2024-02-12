"use client";
import Icon from "@/components/Icon/Icon";
import styles from "./cardType1.module.css";
import Image from "next/image";
import { useState } from "react";
const CardType1 = () => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const handleSelectChange = (event) => {
    setSelectedQuantity(parseInt(event.target.value, 10));
  };
  const handleButtonClick = () => {
    // Perform actions when the button is clicked, e.g., add to cart
    console.log(`Adding ${selectedQuantity} item(s) to the cart`);
  };
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/img/merch/flag-white.png"
          className={styles.img}
          alt="Flag"
          width={300}
          height={300}
        />
        <span className={styles.price}>
          250 <Icon name="hryvna" className={styles.icon} />
        </span>
      </div>
      <div className={styles.details}>
        <h2 className={styles.title}>Прапор</h2>
        <p className={styles.text}>
          Цей прапор не просто шматок полотна – це магічний мостик між вашим
          патріотизмом і безмежною креативністю. З &quot;Прапором &quot;Армії
          друку&quot; ви отримаєте веселу дозу гумору, але з справжньою метою.
        </p>
      </div>
      <div className={styles.btns}>
        <select
          className={styles.select}
          value={selectedQuantity}
          onChange={handleSelectChange}
        >
          <option value={1}>Кількість: 1 шт.</option>
          <option value={2}>Кількість: 2 шт.</option>
          <option value={3}>Кількість: 3 шт.</option>
        </select>
        <button className={styles.btn}>до кошика</button>
      </div>
    </div>
  );
};

export default CardType1;
