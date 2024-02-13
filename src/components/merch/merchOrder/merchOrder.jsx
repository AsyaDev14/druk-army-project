"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Icon from "@/components/Icon/Icon";
import styles from "./merchOrder.module.css";

const orderedProducts = [
  {
    id: 1,
    name: "Pen",
    title: "Pen",
    quantity: "Кілкість: 3шт.",
    price: 200,
    color: "balck",
    size: "",
  },
  {
    id: 2,
    name: "T-shirt",
    title: "T-shirt",
    quantity: "Кілкість: 3 шт.",
    price: 1500,
    size: "Розмір: M",
    color: "white",
  },
  {
    id: 3,
    name: "T-shirt",
    title: "T-shirt",
    quantity: "Кілкість: 2 шт.",
    price: 1500,
    size: "Розмір: M",
    color: "white",
  },
];

const MerchOrder = () => {
  const [totalSum, setTotalSum] = useState(0);

  const calculateTotalSum = () => {
    const sum = orderedProducts.reduce((acc, product) => {
      const quantity = parseInt(product.quantity.split(" ")[1]);
      if (!isNaN(quantity)) {
        const productTotal = quantity * product.price;
        console.log(
          `Product: ${product.name}, Quantity: ${quantity}, Total: ${productTotal}`
        );
        return acc + productTotal;
      }
      return acc + productTotal;
    }, 0);
    setTotalSum(sum);
  };

  useEffect(() => {
    calculateTotalSum();
  }, [orderedProducts]);

  const handleCancel = (productId) => {
    // Handle cancellation logic here
  };
  return (
    <>
      <div className={styles.orderContainer}>
        <div className={styles.tableContainer}>
          <h2 className={styles.formTitle}>Ви замовили:</h2>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr className={styles.theadRow}>
                <th className={styles.thList}>Назва</th>
                <th className={styles.thList}>Кількість</th>
                <th className={styles.thList}>Колір</th>
                <th className={`${styles.thList}  ${styles.thTdSize}`}>
                  Розмір
                </th>
              </tr>
            </thead>

            <tbody>
              {orderedProducts.map((product) => (
                <tr
                  key={product.id}
                  product={product}
                  className={styles.trList}
                >
                  <td className={styles.tdList}>{product.title}</td>
                  <td className={styles.tdList}>
                    {parseInt(product.quantity.split(" ")[1])} шт.
                  </td>
                  <td className={styles.tdList}>{product.color}</td>

                  <td className={`${styles.tdList} ${styles.thTdSize}`}>
                    {product.size.split(" ").slice(1).join(" ")}
                  </td>

                  <td className={styles.tdList}>
                    <Icon
                      name="icon-close"
                      className={styles.cancelIcon}
                      onClick={() => handleCancel(product.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2 className={styles.sumInfo}>Всього:</h2>
        <div className={styles.infoContainer}>
          <span className={styles.sumItself}>
            {totalSum} <Icon name="hryvna" className={styles.icon} />
          </span>
          <h3 className={styles.infoTitle}>Підтвердження</h3>
          <span className={styles.infoSubtitle}>замовлення</span>
          <p className={styles.longText}>
            Ваше замовлення отримано! Ви обрали 10 чудових товарів для
            оформлення. Залиште, будь ласка, свої контактні дані, щоб ми могли з
            вами зв&apos;язатися та уточнити всі деталі. Важливо зазначити, що
            кожна гривня, яку ви витратите на мерч, буде використана для
            закупівлі пластику для 3D-друка, щоб підтримати наших друкарів та
            зробити світ яскравішим і більш стійким до майбутніх викликів.
          </p>
        </div>
        <div className={styles.dataSending}>
          <input placeholder="Телефон" className={styles.phoneInput} />
          <input placeholder="ПІБ" className={styles.nameInput} />
          <button className={styles.sendBtn}>Відправити</button>
        </div>
      </div>
      <div className={styles.deliveryImageContainer}>
        <Image
          className={styles.deliveryImage}
          src="/img/merch/man-with-box.png"
          alt="Man standing with box in hands and smiling."
          width={920}
          height={813}
        />
      </div>
    </>
  );
};

export default MerchOrder;
