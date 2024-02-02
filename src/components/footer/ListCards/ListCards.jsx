import Link from "next/link";
import css from "./ListCards.module.css";
import Image from "next/image";

const ListCards = () => {
  return (
    <div className={css.cardsContainer}>
      <ul className={css.cardsList}>

        {/*====================== Сили спецільних операцій ======================*/}
        <li className={css.firstCard}>
          <Link href={"https://sof.mil.gov.ua"} target="_blank">
            <Image
              src={"/img/footer-logo/logo-2.png"}
              alt="Емблема Сил Спецільних Операцій України"
              width={117} height={104}
            />
          </Link>
          <p className={css.description}>Сили спеціальних операцій</p>
        </li>

        {/*========================================= Миротворець =============================*/}
        <li className={css.secondCard}>
          <Link href={"https://myrotvorets.center"} target="_blank">
            <Image
              src={"/img/footer-logo/logo-1.png"}
              alt="Емблема Центру Миротворець"
              width={104} height={104}
            />
          </Link>
          <p className={css.description}>Миротворець</p>
        </li>

        {/* ============================= Аеророзвідка ======================================= */}

        <li className={css.thirdCard}>
          <Link href={"https://aerorozvidka.ngo/uk"} target="_blank">
            <Image
              src={"/img/footer-logo/logo-3.png"}
              alt="Емблема Аеророзвідки України"
              width={86} height={114}
            />
          </Link>
          <p className={css.description}>Аеророзвідка</p>
        </li>
      </ul>
    </div>
  );
};

export default ListCards;
