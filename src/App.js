import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Section from "./Components/Section";
import Container from "./Components/Container";
import Button from "./Components/Button";
import NavMenu from "./Components/NavMenu";
import Logo from "./Components/Logo";
import Carousel from "./Components/Carousel";
import Projects from "./Components/Projects";
import Accordion from "./Components/Accordion";

export default function App() {
  return (
    <div className="app">
      <Navbar>
        <Logo />
        <NavMenu />
      </Navbar>
      <Main>
        <Section className={"banner-section"}>
          <Container className={"intro-cont"}>
            <h4>HI, I'M VIKTOR</h4>
            <h2>JUNIOR WEB DEVELOPER</h2>
            <p>
              Welcome to my corner of the web! I'm Viktor, a dedicated junior
              web developer with a love for crafting digital experiences. From
              turning ideas into reality to solving complex problems, I thrive
              on the challenges that coding presents.
            </p>
            <Button> Download </Button>
          </Container>
          <Container className={"banner-img"}></Container>
        </Section>
        <Section className={"about-section"}>
          <Container>
            {" "}
            About me:
            <div>
              Hello, My name is Viktor Ivanovski from Skopje. In my spare time i
              like to read graphics novels, watch tv series and play Fifa 😁
            </div>
          </Container>
          <Container className={"accordion"}>
            <Accordion />
          </Container>
        </Section>
        <Section className={"carousel-section"}>
          <Carousel />
        </Section>
        <Section className={"projects-section"}>
          <Projects />
        </Section>
      </Main>
      <Footer></Footer>
    </div>
  );
}
