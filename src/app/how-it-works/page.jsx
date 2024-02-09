import TitleBlock from "@/components/TitleBlock/TitleBlock";
import CentralBlock from "./CentralBlock";
import InfoBlockAccent from "@/components/InfoBlockAccent/InfoBlockAccent";
import Container from "@/components/container/Container";
import Icon from "@/components/Icon/Icon";
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
      <CentralBlock />

      <div className={css.outerWrapper}>
        <div className={css.droneWrapper}>
          <picture className={css.drone}>
            <source
              className={css.drone}
              media="(max-width: 479.5px)"
              srcSet="/img/howworks/drone-320.png"
            />
            <source
              className={css.drone}
              media="(max-width: 767.5px)"
              srcSet="/img/howworks/drone-480.png"
            />
            <source
              className={css.drone}
              media="(max-width: 959.5px)"
              srcSet="/img/howworks/drone-960.png"
            />
            <source
              className={css.drone}
              media="(max-width: 1199.5px)"
              srcSet="/img/howworks/drone-960.png"
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

      <Container>
        <div className={css.titleBottom}>
          <TitleBlock
            title="Друкарі, вперед!"
            description="Використання 3D-друку є важливим для підвищення обороноздатності нашої країни. Це не лише про технології, а й про безпеку військових та успіх виконання бойових завдань. Долучайтеся до нашої спільноти, використовуйте технології на благо нашого війська."
          />
        </div>
      </Container>
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
