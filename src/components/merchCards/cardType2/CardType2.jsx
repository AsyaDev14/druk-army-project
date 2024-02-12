"use client";
import Icon from "@/components/Icon/Icon";
import styles from "./cardType2.module.css";
import Image from "next/image";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Pen",
    title: "Ручка",
    description:
      'Ця ручка - це не просто інструмент для записів, це орудієм великих посмішок та маленьких добрих справ. "Армія друку" друкує речі для наших військових, а ми робимо кожен ваш запис особливим!',
    price: 350,
    whiteImg: "/img/merch/pen-white.png",
  },
  {
    id: 2,
    name: "Cup",
    title: "кружка",
    description:
      'Ця кружка - це не просто посуд, це келих для справжніх героїв, які знають, як зробити світ яскравішим та смішнішим. "Армія друку" принесла у світ 3D-друк та безкоштовну допомогу військовим, а ми принесли цю кружку для вас!',
    price: 500,
    whiteImg: "/img/merch/cup-white.png",
  },
  {
    id: 3,
    name: "Notebook",
    title: "Записник",
    description:
      'Записничок "Армії друку" - це не просто записник. Це магічний космос для творчості, веселих ідей та безцінних моментів, які залишають відбиток у серцях.',
    price: 750,
    whiteImg: "/img/merch/notebook-white.png",
  },
];

const CardType2 = () => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("white");
  const handleSelectChange = (event) => {
    setSelectedQuantity(parseInt(event.target.value, 10));
  };
  const handleButtonClick = () => {
    // Perform actions when the button is clicked, e.g., add to cart
    console.log(`Adding ${selectedQuantity} item(s) to the cart`);
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };
  return (
    <>
      {products.map((product) => (
        <div className={styles.container} key={product.id}>
          <div className={styles.imgContainer}>
            {selectedColor === "white" && (
              <Image
                src={product.whiteImg}
                className={styles.img}
                alt={products.name}
                width={300}
                height={300}
              />
            )}
            {selectedColor === "black" && (
              <Image
                src={products.whiteImg}
                className={styles.img}
                alt={products.name}
                width={300}
                height={300}
              />
            )}
            <span className={styles.price}>
              {product.price} <Icon name="hryvna" className={styles.icon} />
            </span>
          </div>
          <div className={styles.details}>
            <h2 className={styles.title}>{product.title}</h2>
            <p className={styles.text}>{product.description}</p>
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
            <div className={styles.radioContainer}>
              Колір:
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="color"
                  value="black"
                  checked={selectedColor === "black"}
                  onChange={handleColorChange}
                />
                <span
                  className={`${styles.checkmark} ${styles.checkmarkBlack}`}
                ></span>
              </label>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="color"
                  value="white"
                  checked={selectedColor === "white"}
                  onChange={handleColorChange}
                />
                <span
                  className={`${styles.checkmark} ${styles.checkmarkWhite}`}
                ></span>
              </label>
            </div>
          </div>
          <button className={styles.btn}>Додати до кошика</button>
        </div>
      ))}
    </>
  );
};

export default CardType2;
