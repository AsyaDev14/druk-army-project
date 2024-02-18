"use client";
import styles from "./merchList.module.css";
import CardType1 from "../merchCards/cardType1/CardType1";
import CardType2 from "../merchCards/cardType2/CardType2";
import CardType3 from "../merchCards/cardType3/CardType3";
import Icon from "@/components/Icon/Icon";

const MerchList = () => {
  return (
    <div className={styles.list}>
      <CardType2 />
      <CardType1 />
      <CardType3 />
      <button className={styles.orderBtn}>
        <Icon name="basket" className={styles.basketIcon} />
        Замовити
      </button>
    </div>
  );
};

export default MerchList;