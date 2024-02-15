import React from "react";
import css from "./TitleHomePage.module.css";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container/Container";
import Icon from "@/components/Icon/Icon";

const TitleHomePage = () => {
  return (
    <>
      <Container className={css.container}>
        <div className={css.logoSliderContainer}>
          <Image
            src={"/img/home/sliderLogo.png"}
            alt="Логотип ДрукАрмії"
            width={107}
            height={53}
          />
        </div>
        <div className={css.mainTitleContainer}>
          <h1 className={css.mainTitle}>
            Друкуйте перемогу
            <span className={css.titleAccent}>
              разом з <span>da</span>
            </span>
          </h1>
          <p className={css.mainTitleText}>
            Спільнота українців, які допомагають армії захищати Україну. Ми
            нічого не продаємо, всі витрати покриваються коштом друкарів,
            донорів та волонтерів.
          </p>
          <div className={css.contactsUs}>
            <button
              type="button"
              aria-label="Долучитися і перейти до форми"
              className={css.btn}
            >
              <span className={css.btnText}>
                <Icon className={css.communityIcon} name={"icon-people"} />
                Долучитися
              </span>
            </button>
            <div className={css.links}>
                <Link href={"tel:+380739207804"} aria-label="Телефон для контатку з ДрукАрмією">+38 0(73) 920 78 04</Link>
                <Link href={"mailto:3d@drukarmy.org.ua"} aria-label="Пошта для контатку з ДрукАрмією">3d@drukarmy.org.ua</Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TitleHomePage;
