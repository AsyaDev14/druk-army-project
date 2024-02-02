import Logo from "@/components/Logo/Logo";
import Section from "../components/Section/Section";
import Slider from "../components/Slider/Slider";
import Container from "../components/container/Container.jsx";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Section>
        <div className={styles.introWrapper}>
           <Slider />
          Block
          <Logo/>
        </div>
         
      </Section>

      <Section>

      </Section>
    </>
  );
}
