import TitleBlock from "@/components/TitleBlock/TitleBlock";
import InfoBlockAccent from "@/components/InfoBlockAccent/InfoBlockAccent";
import Container from "@/components/container/Container";
import Icon from "@/components/Icon/Icon";
import InfoBlock from "@/components/InfoBlock/InfoBlock";
import ContainerNoPadding from "@/components/ContainerNoPadding/ContainerNoPadding";
import css from "./page.module.css";

const HowWorks = () => {
  return (
    <>
      <Container>
        <div className={css.titleTop}>
          <TitleBlock
            title="як це працює"
            description="Використання 3D-печаті відіграє ключову роль у підтримці наших захисників, забезпечуючи не тільки значну економію ресурсів, але й підвищення особистої безпеки військових, демонструючи вплив сучасних технологій на ефективність і безпеку оборонних заходів."
          />
        </div>
      </Container>

      <ContainerNoPadding>
        <div className={css.centralBlock}>
          <div className={css.cablesWrapper}>
            <picture className={css.cables}>
              <source
                className={css.cables}
                media="(max-width: 480px)"
                srcSet="/img/howworks/cable-320.png"
              />
              <source
                className={css.cables}
                media="(max-width: 767px)"
                srcSet="/img/howworks/cable-480.png"
              />
              <source
                className={css.cables}
                media="(max-width: 959px)"
                srcSet="/img/howworks/cable-768.png"
              />
              <source
                className={css.cables}
                media="(max-width: 1200px)"
                srcSet="/img/howworks/cable-960.png"
              />
              <source
                className={css.cables}
                media="(min-width: 1200px)"
                srcSet="/img/howworks/cable-1920.png"
              />
              <img
                className={css.cables}
                src="/img/howworks/cable-1920.png"
                alt="cable"
              />
            </picture>

            <div className={css.wrapper}>
              <InfoBlock
                firstTitle="вартість"
                secondTitle="5 000 ₴"
                description="Starlink — наше найсучасніше обладнання, але має слабку ланку — вразливі конектори, що ламаються під час переміщення, призводячи до втрати зв'язку. Існує також фінансова складова — вартість заміни запчастин становить 5 000 гривень за кожен дріт."
                alignRight={true}
              />
            </div>
          </div>

          <div className={css.connectorsWrapper}>
            <picture className={css.connectors}>
              <source
                className={css.connectors}
                media="(max-width: 320px)"
                srcSet="/img/howworks/connectors-320.png"
              />
              <source
                className={css.connectors}
                media="(max-width: 479px)"
                srcSet="/img/howworks/connectors-320.png"
              />
              <source
                className={css.connectors}
                media="(max-width: 767px)"
                srcSet="/img/howworks/connectors-480.png"
              />
              <source
                className={css.connectors}
                media="(max-width: 959px)"
                srcSet="/img/howworks/connectors-768.png"
              />
              <source
                className={css.connectors}
                media="(max-width: 1199px)"
                srcSet="/img/howworks/connectors-960.png"
              />
              <source
                className={css.connectors}
                media="(min-width: 1200px)"
                srcSet="/img/howworks/connectors-1920.png"
              />
              <img
                className={css.connectors}
                src="/img/howworks/connectors-1920.png"
                alt="connectors"
              />
            </picture>

            <div className={css.wrapper}>
              <InfoBlock
                firstTitle="вартість"
                secondTitle="4,50 ₴"
                description="ДрукАрмія використовує 3D-принтери для вирішення проблеми вразливих дротів. Це рішення не тільки ефективне, але й економічно вигідне: за 350 гривень можна надрукувати 77 комплектів захисних ковпачків, потенційно зберігаючи до 385 000 гривень."
              />
            </div>
          </div>

        </div>
      </ContainerNoPadding>

      <div className={css.outerWrapper}>
        <div className={css.droneWrapper}>
          <picture 
          className={css.drone}
          >
            <source
              className={css.drone}
              media="(max-width: 479px)"
              srcSet="/img/howworks/drone-320.png"
            />
            <source
              className={css.drone}
              media="(max-width: 767px)"
              srcSet="/img/howworks/drone-480.png"
            />
            <source
              className={css.drone}
              media="(max-width: 959px)"
              srcSet="/img/howworks/drone-768.png"
            />
            <source
              className={css.drone}
              media="(max-width: 1199px)"
              srcSet="/img/howworks/drone-960.png"
            />
            <source
              className={css.drone}
              media="(min-width: 1200px)"
              srcSet="/img/howworks/drone-1920.png"
            />
            <img
              className={css.drone}
              src="/img/howworks/drone-1920.png"
              alt="drone"
            />
          </picture>

          <div className={css.accentDiv}>
            <InfoBlockAccent
              firstTitle="виріб"
              secondTitle="для дронів"
              description="Багато пілотів дронів ризикують, запускаючи дрони з рук. Сьогодні ми можемо це змінити, друкуючи безпечні стартові платформи для дронів. Це не тільки захищає пілотів, але й забезпечує надійний запуск кожного дрона. Ці платформи можуть бути використані в навчальних цілях у школах для майбутніх пілотів"
            />
          </div>
        </div>
      </div>

      <ContainerNoPadding>
        <div className={css.titleBottom}>
          <TitleBlock
            title="Друкарі, вперед!"
            description="Використання 3D-друку є важливим для підвищення обороноздатності нашої країни. Це не лише про технології, а й про безпеку військових та успіх виконання бойових завдань. Долучайтеся до нашої спільноти, використовуйте технології на благо нашого війська."
          />
        </div>
      </ContainerNoPadding>
      <a
        className={css.button}
        href="https://app.drukarmy.org.ua"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon className={css.icon} name="icon-people" />
        Долучитися
      </a>
    </>
  );
};

export default HowWorks;
