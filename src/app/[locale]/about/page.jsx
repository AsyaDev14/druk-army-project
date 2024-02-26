import {
  TitleTop,
  AboutFounders,
  CanI,
  Support,
  TitleBottom,
  Buttons,
} from "@/components/aboutPage";
import css from "./page.module.css";

const About = () => {
  return (
    <div className={css.pageWrapper}>
      <TitleTop />
      <AboutFounders />
      <CanI />
      <Support />

      <div className={css.picture}>
        <picture>
          <source
            media="(max-width: 480px)"
            srcSet="/img/about/family-rests-320.jpg"
          />

          <source
            media="(max-width: 767px)"
            srcSet="/img/about/family-rests-480.jpg"
          />
          <source
            media="(max-width: 959px)"
            srcSet="/img/about/family-rests-768.jpg"
          />
          <source
            media="(max-width: 1199px)"
            srcSet="/img/about/family-rests-960.jpg"
          />
          <source
            media="(max-width: 1919px)"
            srcSet="/img/about/family-rests-1200.jpg"
          />
          <source
            media="(min-width: 1920px)"
            srcSet="/img/about/family-rests-1920.jpg"
          />

          <img src="/img/about/family-rests-1920.jpg" alt="family" />
        </picture>
      </div>
      <div className={css.reverse}>
        <TitleBottom />
        <Buttons />
      </div>
    </div>
  );
};

export default About;
