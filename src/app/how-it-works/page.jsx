import InfoBlock from "@/components/InfoBlock/InfoBlock";
import InfoBlockAccent from "@/components/InfoBlockAccent/InfoBlockAccent";
import TitleBlock from "@/components/TitleBlock/TitleBlock";
import Container from "@/components/container/Container";
import Image from "next/image";
import css from "./page.module.css";
import Section from "@/components/Section/Section";

const HowWorks = () => {
  return (
    <>
      <Container>
        <Section>
          <TitleBlock
            title="як це працює"
            description="Використання 3D-печаті відіграє ключову роль у підтримці наших захисників, забезпечуючи не тільки значну економію ресурсів, але й підвищення особистої безпеки військових, демонструючи вплив сучасних технологій на ефективність і безпеку оборонних заходів."
          />

          <div className={css.cablesWrapper}>
            <picture className={css.cables}>
              <source
                className={css.cables}
                media="(max-width: 479.5px)"
                srcSet="/img/howworks/cable-320.png"
              />
              <source
                className={css.cables}
                media="(max-width: 767.5px)"
                srcSet="/img/howworks/cable-480.png"
              />
              <source
                className={css.cables}
                media="(max-width: 959.5px)"
                srcSet="/img/howworks/cable-960.png"
              />
              <source
                className={css.cables}
                media="(max-width: 1199.5px)"
                srcSet="/img/howworks/cable-960.png"
              />
              <source
                className={css.cables}
                media="(min-width: 1201px)"
                srcSet="/img/howworks/cable-1920.png"
              />
              <img
                className={css.cables}
                src="/img/howworks/cable-1920.png"
                alt="cable"
                // width={484}
                // height={326}
              />
            </picture>

            <InfoBlock
              firstTitle="вартість"
              secondTitle="5 000 ₴"
              description="Starlink — наше найсучасніше обладнання, але має слабку ланку — вразливі конектори, що ламаються під час переміщення, призводячи до втрати зв'язку. Існує також фінансова складова — вартість заміни запчастин становить 5 000 гривень за кожен дріт."
              alignRight={true}
            />
          </div>

          <div className={css.connectorsWrapper}>
            <div>
              <picture className={css.connectors}>
                <source
                  className={css.connectors}
                  media="(max-width: 320px)"
                  srcSet="/img/howworks/connectors-320.png"
                />
                <source
                  className={css.connectors}
                  media="(max-width: 480px)"
                  srcSet="/img/howworks/connectors-320.png"
                />
                <source
                  className={css.connectors}
                  media="(max-width: 768px)"
                  srcSet="/img/howworks/connectors-480.png"
                />
                <source
                  className={css.connectors}
                  media="(max-width: 960px)"
                  srcSet="/img/howworks/connectors-960.png"
                />
                <source
                  className={css.connectors}
                  media="(max-width: 1200px)"
                  srcSet="/img/howworks/connectors-960.png"
                />
                <source
                  className={css.connectors}
                  media="(min-width: 1201px)"
                  srcSet="/img/howworks/connectors-1920.png"
                />
                <img
                  className={css.connectors}
                  src="/img/howworks/connectors-1920.png"
                  alt="connectors"
                  // width={484}
                  // height={326}
                />
              </picture>
            </div>

            <InfoBlock
              firstTitle="вартість"
              secondTitle="4,50 ₴"
              description="ДрукАрмія використовує 3D-принтери для вирішення проблеми вразливих дротів. Це рішення не тільки ефективне, але й економічно вигідне: за 350 гривень можна надрукувати 77 комплектів захисних ковпачків, потенційно зберігаючи до 385 000 гривень."
            />
          </div>
        </Section>
      </Container>

      <div className={css.droneWrapper}>
        <picture className={css.drone} style={{ margin: "auto" }}>
          <source
            className={css.drone}
            media="(max-width: 479.5px)"
            srcSet="/img/howworks/drone-320.png"
          />
          <source
            className={css.drone}
            media="(max-width: 767.5px)"
            srcSet="/img/howworks/drone-960.png"
          />
          <source
            className={css.drone}
            media="(max-width: 959.5px)"
            srcSet="/img/howworks/drone-960.png"
          />
          <source
            className={css.drone}
            media="(max-width: 1199.5px)"
            srcSet="/img/howworks/drone-1920.png"
          />
          <source
            className={css.drone}
            media="(min-width: 1201px)"
            srcSet="/img/howworks/drone-1920.png"
          />
          <img
            className={css.drone}
            src="/img/howworks/drone-1920.png"
            alt="drone"
            // width={484}
            // height={326}
            style={{ width: "100%" }}
          />
        </picture>

        <InfoBlockAccent
          firstTitle="виріб"
          secondTitle="для дронів"
          description="Багато пілотів дронів ризикують, запускаючи дрони з рук. Сьогодні ми можемо це змінити, друкуючи безпечні стартові платформи для дронів. Це не тільки захищає пілотів, але й забезпечує надійний запуск кожного дрона. Ці платформи можуть бути використані в навчальних цілях у школах для майбутніх пілотів"
        />
      </div>
      <Container>
        <TitleBlock
          title="Друкарі, вперед!"
          description="Використання 3D-друку є важливим для підвищення обороноздатності нашої країни. Це не лише про технології, а й про безпеку військових та успіх виконання бойових завдань. Долучайтеся до нашої спільноти, використовуйте технології на благо нашого війська."
        />
      </Container>
    </>
  );
};

export default HowWorks;
