"use client";
import Icon from "@/components/Icon/Icon";
import styles from "./cardType3.module.css";
import Image from "next/image";
import { useState } from "react";

const products = [
  {
    id: 5,
    name: "T-Shirt",
    title: "футболка",
    description:
      "Ця футболка - це не просто одяг, це вираз вашого патріотизму та готовності сміятися над життям. Коли &quot;Армія друку&quot; друкує речі для військових, ми друкуємо футболки для справжніх героїв - вас!",
    price: 1500,
    size: "",
    whiteImg: "/img/merch/t-shirt-white.png",
  },
];

const CardType3 = () => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("Розмір: M");
  const [selectedColor, setSelectedColor] = useState("white");
  const handleSelectAmountChange = (event) => {
    setSelectedQuantity(parseInt(event.target.value, 10));
  };
  const handleSelectSizeChange = (event) => {
    setSelectedSize(parseInt(event.target.value, 10));
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
              onChange={handleSelectSizeChange}
            >
              <option value={1}>Розмір: M</option>
              <option value={2}>Розмір: L</option>
              <option value={3}>Розмір: S</option>
              <option value={4}>Розмір: XL</option>
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
          <div className={styles.btns}>
            <select
              className={styles.select}
              value={selectedQuantity}
              onChange={handleSelectAmountChange}
            >
              <option value={1}>Кількість: 1 шт.</option>
              <option value={2}>Кількість: 2 шт.</option>
              <option value={3}>Кількість: 3 шт.</option>
            </select>
            <button className={styles.btn}>до кошика</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardType3;
