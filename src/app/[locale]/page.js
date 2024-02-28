import Slider from "@/components/HomePage/Slider/Slider.jsx";
import TitleHomePage from "@/components/HomePage/TitleHomePage/TitleHomePage";
import css from "./page.module.css"
import Section from "@/components/Section/Section";
import HowItWorks from "@/components/HomePage/HowItWorksTitle/HowItWorks";

export default function Home() {
  return (
    <>
        <section className={css.sectionHero}>
          <Slider />
          <TitleHomePage />
        </section>
        <Section>
          <HowItWorks/>
        </Section>
    </>
  );
}
