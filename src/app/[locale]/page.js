import Slider from "@/components/HomePage/Slider/Slider.jsx";
import TitleHomePage from "@/components/HomePage/TitleHomePage/TitleHomePage";
import Section from "@/components/Section/Section";
import HowItWorks from "@/components/HomePage/HowItWorksTitle/HowItWorks";
import PrintAll from "@/components/HomePage/PrintAll/PrintAll";
import css from "./page.module.css"

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
        <Section>
          <PrintAll/>
        </Section>
    </>
  );
}
