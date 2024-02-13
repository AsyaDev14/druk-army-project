import Container from "@/components/container/Container.jsx";
import TitleBlock from "@/components/TitleBlock/TitleBlock.jsx";
import css from "./page.module.css";
import ContainerNoPadding from "@/components/ContainerNoPadding/ContainerNoPadding";
import InfoBlock from "@/components/InfoBlock/InfoBlock";
import InfoBlockAccent from "@/components/InfoBlockAccent/InfoBlockAccent";
import Icon from "@/components/Icon/Icon";

const About = () => {
  return (
    <>
      <div className={css.wrapper}>
        <p className={css.backText}>Амбасадори</p>
      </div>

      <div className={css.titleTop}>
        <Container>
          <TitleBlock
            title="Про ДрукАрмію"
            description="ДрукАрмія — це українська спільнота, що протягом року друкує на 3D принтерах необхідне обладнання для ЗСУ, щоб підтримати оборону України проти російських агресорів."
          />
        </Container>
      </div>

      <picture className={css.photo}>
        <source
          className={css.photo}
          media="(max-width: 480px)"
          srcSet="/img/about/volnov-320.jpg"
        />
        {/* 
        <source
          className={css.photo}
          media="(max-width: 767px)"
          srcSet="/img/about/volnov-480.jpg"
        />
        <source
          className={css.photo}
          media="(max-width: 959px)"
          srcSet="/img/about/volnov-768.jpg"
        />
        <source
          className={css.photo}
          media="(max-width: 1200px)"
          srcSet="/img/about/volnov-960.jpg"
        />
        <source
          className={css.photo}
          media="(min-width: 1200px)"
          srcSet="/img/about/volnov-1920.jpg"
        /> 
        */}
        <img
          className={css.photo}
          src="/img/about/volnov-1920.jpg"
          alt="volnov"
        />
      </picture>

      <div className={css.volnov}>
        <Container>
          <h2 className={css.title}>Євген Вольнов</h2>
          <p className={css.text}>
            Український пранкер та блогер з Києва, волонтер, співзасновник
            проекту Друк.Армія. Відомий телефонними розіграшами, які
            супроводжуються великим об'ємом ненормативної лексики. З 2018 року —
            офіційний спікер Центру «Миротворець».
          </p>
        </Container>
      </div>

      <picture className={css.photo}>
        <source
          className={css.photo}
          media="(max-width: 480px)"
          srcSet="/img/about/sharaievskyi-320.jpg"
        />

        {/* 
        <source
          className={css.photo}
          media="(max-width: 767px)"
          srcSet="/img/about/sharaievskyi-480.jpg"
        />
        <source
          className={css.photo}
          media="(max-width: 959px)"
          srcSet="/img/about/sharaievskyi-768.jpg"
        />
        <source
          className={css.photo}
          media="(max-width: 1200px)"
          srcSet="/img/about/sharaievskyi-960.jpg"
        />
        <source
          className={css.photo}
          media="(min-width: 1200px)"
          srcSet="/img/about/sharaievskyi-1920.jpg"
        />
         */}
        <img
          className={css.photo}
          src="/img/about/sharaievskyi-1920.jpg"
          alt="sharaievskyi"
        />
      </picture>

      <div className={css.sharaievskyi}>
        <Container>
          <h2 className={css.title}>Андрій Шараєвський</h2>
          <p className={css.text}>
            Український маркетолог з досвідом понад 10 років, який займається
            блогеркою діяльністю, та допомагає ЗСУ як волонтер.
          </p>
        </Container>
      </div>

      <ContainerNoPadding>
        <div className={css.family}>
          <div className={css.background}></div>
          <picture className={css.photo}>
            <source
              className={css.familyImage}
              media="(max-width: 480px)"
              srcSet="/img/about/family-320.jpg"
            />

            {/* 
        <source
        className={css.photo}
        media="(max-width: 767px)"
        srcSet="/img/about/sharaievskyi-480.jpg"
        />
        <source
        className={css.photo}
        media="(max-width: 959px)"
        srcSet="/img/about/sharaievskyi-768.jpg"
        />
        <source
        className={css.photo}
        media="(max-width: 1200px)"
        srcSet="/img/about/sharaievskyi-960.jpg"
        />
        <source
        className={css.photo}
        media="(min-width: 1200px)"
        srcSet="/img/about/sharaievskyi-1920.jpg"
        />
      */}
            <img
              className={css.familyImage}
              src="/img/about/family-1920.jpg"
              alt="A family standing around a 3D printer, looking puzzled and thinking about how to turn it on"
            />
          </picture>
        </div>
      </ContainerNoPadding>

      <div className={css.canI}>
        <Container>
          <InfoBlock
            firstTitle="Чи можу я"
            secondTitle="друкувати?"
            description="Ми шукаємо свідомих громадян, які мають 3D-принтери та бажання приділити час і докласти зусиль задля допомоги нашим військовим. Ми радо надамо вам консультації та підтримку і допоможемо досягти високої якості друку."
            color="var(--accent-color)"
          />
        </Container>
      </div>

      <div className={css.mapWrapper}>
        <picture className={css.photo}>
          <source
            className=""
            media="(max-width: 480px)"
            srcSet="/img/about/map-320.png"
          />

          {/* 
        <source
        className={css.photo}
        media="(max-width: 767px)"
        srcSet="/img/about/sharaievskyi-480.jpg"
        />
        <source
        className={css.photo}
        media="(max-width: 959px)"
        srcSet="/img/about/sharaievskyi-768.jpg"
        />
        <source
        className={css.photo}
        media="(max-width: 1200px)"
        srcSet="/img/about/sharaievskyi-960.jpg"
        />
        <source
        className={css.photo}
        media="(min-width: 1200px)"
        srcSet="/img/about/sharaievskyi-1920.jpg"
        />
      */}
          <img className="" src="/img/about/map-1920.jpg" alt="map" />
        </picture>
      </div>
      <div className={css.accent}>
        <InfoBlockAccent
          firstTitle="Кого ми"
          secondTitle="підтримуємо"
          firstDescription="Обсяг задач, який ми охоплюємо, настільки ж великий, як і наші амбіції. Ми працюємо на потреби захисників на передовій та виконуємо запити штабів ЗСУ. Щодня ми забезпечуємо армію необхідними предметами 3D друку та закриваємо найрізноманітніші потреби. "
          secondDescription="Ми співпрацюємо з різними організаціями, які самовіддано допомагають українській армії. Ми готові перетворити моток пластику на вкрай необхідне обладнання, що зміцнює оборону нашої країни."
        />
      </div>

      <picture className={css.photo}>
        <source
          className=""
          media="(max-width: 480px)"
          srcSet="/img/about/family-rest-320.jpg"
        />

        {/* 
        <source
        className={css.photo}
        media="(max-width: 767px)"
        srcSet="/img/about/family-rest-480.jpg"
        />
        <source
        className={css.photo}
        media="(max-width: 959px)"
        srcSet="/img/about/family-rest-768.jpg"
        />
        <source
        className={css.photo}
        media="(max-width: 1200px)"
        srcSet="/img/about/family-rest-960.jpg"
        />
        <source
        className={css.photo}
        media="(min-width: 1200px)"
        srcSet="/img/about/family-rest-1920.jpg"
        />
      */}
        <img className="" src="/img/about/family-rest-1920.jpg" alt="family" />
      </picture>

      <div className={css.titleBottom}>
        <TitleBlock
          title="можете допомогти"
          description="Важливим є не лише матеріальний внесок: ваш голос також має значення. Допоможіть поширювати нашу історію: розкажіть друзям, поділіться посиланням на наш ресурс у соцмережах, запрошуйте нас на інтерв'ю. Давайте об'єднаємо зусилля за перемогу України!"
        />
      </div>

      <a
        className={css.button}
        href="/donations"
      >
        <Icon className={css.icon} name="icon-banknote" />
        Підтримати
      </a>

      <button
        className={`${css.button} ${css.secondary}`}
        // href="/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon
          className={`${css.icon} ${css.secondary}`}
          name="icon-mix-lines"
        />
        поділитися
      </button>
    </>
  );
};

export default About;
