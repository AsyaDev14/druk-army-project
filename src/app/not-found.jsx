import Image from "next/image";
import css from "./not-found.module.css";
import Link from "next/link";

export default function notFound() {
  return (
    <div>
      <div className={css.imageContainer}>
        <Image
          src={"/img/notfound/notfound.png"}
          alt="Error 404. This page not found"
          width={310}
          height={139}
        />
      </div>
      <h2 className={css.title}>Загублена сторінка</h2>
      <p className={css.text}>
        Вибачте, шлях, який ви обрали, виявився руйнівним. Наш солдат уже
        готовий допомогти вам знайти дорогу назад до безпеки. Скористайтеся
        кнопками нижче, щоб повернутися на головну сторінку або підтримати нашу
        справу.
      </p>
      <div className={css.buttonsContainer}>
        <Link href={'/'} aria-label="Перейти до головної сторінки" className={css.linkHome}>додому</Link>
      </div>
    </div>
  );
}
