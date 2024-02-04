import css from "./not-found.module.css";
import Link from "next/link";
import Icon from "@/components/Icon/Icon";
import ImageNotFound from "@/components/notFoundPage/ImageNotFound";

export default function notFound() {
  return (
    <div className={css.notFoundPageContainer}>
      <ImageNotFound />
      <h2 className={css.title}>Загублена сторінка</h2>
      <p className={css.text}>
        Вибачте, шлях, який ви обрали, виявився руйнівним. Наш солдат уже
        готовий допомогти вам знайти дорогу назад до безпеки. Скористайтеся
        кнопками нижче, щоб повернутися на головну сторінку або підтримати нашу
        справу.
      </p>
      <div className={css.buttonsContainer}>
        <Link
          href={"/"}
          aria-label="Перейти до головної сторінки"
          className={css.linkHome}
        >
          додому
        </Link>
        <button type="button" className={css.buttonSupport}>
          <Icon className={css.iconSupportBtn} name={"icon-banknote"} />
          підтримати
        </button>
      </div>
    </div>
  );
}
