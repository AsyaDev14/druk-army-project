"use client";

import { useContext, useState, useEffect } from "react";
import CartContext from "@/context/CartContext";
import Image from "next/image";
import Icon from "@/components/Icon/Icon";
import styles from "./merchOrder.module.css";

const MerchOrder = () => {
  const { cart, deleteItemFromCart } = useContext(CartContext);
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    if (cart && Array.isArray(cart.cartItems)) {
      const sum = cart.cartItems.reduce((acc, item) => {
        return acc + (item.price || 0) * (item.quantity || 0);
      }, 0);
      setTotalSum(sum);
    }
  }, [cart]);

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
              {cart?.cartItems?.map((cartItem) => (
                <tr
                  key={cartItem.id}
                  product={cartItem}
                  className={styles.trList}
                >
                  <td className={styles.tdList}>{cartItem.title}</td>
                  <td className={styles.tdList}>{cartItem.quantity} шт.</td>
                  <td className={styles.tdList}>{cartItem.color}</td>

                  <td className={`${styles.tdList} ${styles.thTdSize}`}>
                    {cartItem.size}
                  </td>

                  <td className={styles.tdList}>
                    <button
                      className={styles.cancelBtn}
                      onClick={() => deleteItemFromCart(cartItem?.id)}
                    >
                      <Icon name="icon-close" className={styles.cancelIcon} />
                    </button>
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
