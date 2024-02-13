import React from "react";
import Image from "next/image";
import styles from "./Vacancies.module.css";
import Section from "@/components/Section/Section";
import Container from "@/components/container/Container";
import Icon from "@/components/Icon/Icon";
import Link from "next/link";
import InfoBlock from "@/components/InfoBlock/InfoBlock";

import officeImg from "../../../public/img/vacancies/office-tab.jpg";
import office2 from "../../../public/img/vacancies/office2-tab.jpg";
import ruby from "../../../public/img/vacancies/ruby.jpg";
import fand from "../../../public/img/vacancies/fand.jpg";
import manager from "../../../public/img/vacancies/manager.jpg";
import designer from "../../../public/img/vacancies/designer.jpg";
import smm from "../../../public/img/vacancies/smm.jpg";

const vacanciesData = [
  {
    image: ruby,
    title: "Ruby-on-Rail-розробник",
    skills: [
      "Не менше 4 років професійного досвіду розробки програмного забезпечення;",
      "Знання Ruby / Ruby on Rails;",
      "Досвід розробки на основі тестування/поведінки, зокрема RSpec;",
      "Володіння як документами, так і системами реляційних баз даних (зокрема MySQL, PostgreSQL);",
      "Перевірена здатність писати читабельний код і ефективне, масштабоване програмне забезпечення.",
    ],
    btnText: "Відгукнутися",
  },
  {
    image: fand,
    title: "Фандрайзер",
    skills: [
      "Володіння високим рівнем письмової та усної української та англійської мов;",
      "Відповідальність, висока мотивація та вміння працювати у стресових ситуаціях та в умовах стислих дедлайнів;",
      "Вміння добре аналізувати ситуацію, обирати найкращі позиції по проєктах агенції та доносити їх до потенційного спонсора, донора;",
      "Впевнена експертиза в роботі з грантовими пропозиціями та підготовкою необхідної документації, для самостійного отримання фінансування, так і для залучення підприємства до участі у конкурсі на його отримання.",
    ],
    btnText: "Відгукнутися",
  },
  {
    image: smm,
    title: "SMM-managers",
    skills: [
      "Вміння працювати з соціальними мережами та розуміння їх основних принципів;",
      "Можливість працювати в офісі повний робочий день;",
      "Високий рівень володіння українською та російською граматикою.",
    ],
    btnText: "Відгукнутися",
  },
  {
    image: designer,
    title: "Графічний дизайнер",
    skills: [
      "Навички фотореалістичної візуалізації об'єктів — інтер'єр та екстер'єр, візуалізація -статична. Анімація — буде додатковою перевагою;",
      "Відмінне знання пакету 3D-візуалізації: SketchUp, 3DSmax+VRay або Corona, Adobe Photoshop, Adobe After effects, бажано Pro на 3ddd;",
      "Обов’язкове знання меблевих фабрик та виробників різного цінового діапазону, навички комплектації приватних інтер'єрів.",
    ],
    btnText: "Відгукнутися",
  },
  {
    image: manager,
    title: "Менеджер з холодних дзвінків",
    skills: [
      "Клієнтоорієнтованість;",
      "Загальні комунікативні навички, уміння переконувати;",
      "Вміння презентувати та продавати продукт;",
      "Вміння продати пісок в пустелі!!!",
      "Пунктуальна, енергійна і охайна людина.",
    ],
    btnText: "Відгукнутися",
  },
];

const Vacancies = () => {
  return (
    <Container>
      <Section>
        <div className={styles.bannerContainer}>
          <div className={styles.imageContainer}>
            <Image
              src={officeImg}
              alt="office img"
              className={styles.centerCrop}
            />
          </div>

          <div>
            <h2 className={styles.vacTitle}>
              Стати частиною команди <br />
              <span>ДрукАрмії</span>
            </h2>
            <p className={styles.vacTitleDescription}>
              Над проектом працюють люди, які вважають що їхні професійні
              навички та досвід, розуміння своєї справи та компетенції можуть
              бути корисними у спільній справі на шляху до перемоги.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <InfoBlock
          firstTitle={"Зараз відкриті"}
          secondTitle={"Вакансія:"}
          color={"#5169ff"}
          description={
            "Якщо ви вважаєте що можете допомогти, ми раді вітати вас у нашій команді."
          }
        />

        {vacanciesData.map((vacancy, index) => (
          <div key={index}>
            <div className={styles.allVacanciesContainer}>
              <div className={styles.vacancieContainer}>
                <Image
                  src={vacancy.image}
                  alt="employee img"
                  className={styles.vacancieImg}
                />
                <div className={styles.vacancieDescriptionContainer}>
                  <h2 className={styles.vacancieTitle}>{vacancy.title}</h2>

                  {vacancy.skills && (
                    <ul>
                      <p className={styles.skillsTitle}> SKILLS REQUIRED:</p>
                      {vacancy.skills.map((skill, skillIndex) => (
                        <li
                          key={skillIndex}
                          className={styles.skillsDescription}
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  )}
                  {vacancy.btnText && (
                    <button className={styles.btnRespond} type="button">
                      {vacancy.btnText}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Section>

      <Section>
        <div className={styles.vacBottomSectionContainer}>
          <div className={styles.imageContainer}>
            <Image
              src={office2}
              alt="office img"
              className={styles.centerCrop}
            />
          </div>
          <h3 className={styles.vacTitle}>
            Стати частиною команди <br />
            <span>ДрукАрмії</span>
          </h3>
          <p className={styles.vacBottomDescription}>
            Якщо ви розумієте, як ваші компетенції можуть бути корисними для
            допомоги у досягненні цілей, для яких була створена ДрукАрмія, будь
            ласка, напишіть на пошту. Ваш внесок може мати велике значення,
            дозволяючи використовувати ваші унікальні навички та знання для
            спільного блага.{" "}
          </p>
          <div className={styles.vacanciesContacts}>
            <div className={styles.vacContactInfo}>
              <Link href={"tel:+380739207804"}>+38 0(73) 920 78 04</Link>

              <Link href={"mailto:3d@drukarmy.org.ua"}>3d@drukarmy.org.ua</Link>
            </div>
            <button className={styles.btnContactUs} type="button">
              <Icon name="icon-people" className={styles.btnSvg} />
              Напишіть нам
            </button>
          </div>
        </div>
      </Section>
    </Container>
  );
};

export default Vacancies;
