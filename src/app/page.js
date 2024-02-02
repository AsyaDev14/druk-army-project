import Section from "../components/Section/Section";
import Slider from "../components/Slider/Slider";
import Container from "../components/container/Container";

export default function Home() {
  return (
    <>
      <main>
        <Section>
          <Container>
            <Slider />
          </Container>
        </Section>
      </main>
    </>
  );
}
