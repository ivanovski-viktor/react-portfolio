import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Section from "./Components/Section";
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
          <div className={"container intro-cont"}>
            <h4>VIKTOR IVANOVSKI</h4>
            <h2>JUNIOR WEB DEVELOPER</h2>
            <p>
              Welcome to my corner of the web! I'm Viktor, a dedicated junior
              web developer with a love for crafting digital experiences. From
              turning ideas into reality to solving complex problems, I thrive
              on the challenges that coding presents.
            </p>
            <Button>Download</Button>
          </div>
          <div className={"container banner-img"}></div>
        </Section>
        <Section className={"about-section"}>
          <div className={"container about-me"}>
            <h2>ABOUT ME:</h2>
            <div>
              Hello, My name is Viktor Ivanovski from Skopje. In my spare time i
              like to read graphics novels, watch tv series and play Fifa 😁
            </div>
          </div>
          <div className={"container accordion"}>
            <Accordion />
          </div>
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
