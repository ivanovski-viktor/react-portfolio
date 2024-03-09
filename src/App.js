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
import cv from "./assets/my-cv.pdf";
export default function App() {
  return (
    <div className="app">
      <Navbar>
        <Logo />
        <NavMenu />
      </Navbar>
      <Main>
        <Section id={"banner"} className={"banner-section"}>
          <div className={"container intro-cont"}>
            <h4>VIKTOR IVANOVSKI</h4>
            <h2>WEB DEVELOPER</h2>
            <p>
              Welcome to my corner of the web! I'm Viktor, a dedicated junior
              web developer with a love for crafting digital experiences. From
              turning ideas into reality to solving complex problems, I thrive
              on the challenges that coding presents.
            </p>
            <Button>
              <a href={cv} download>
                Download
              </a>
            </Button>
          </div>
          <div className={"container banner-img"}></div>
        </Section>
        <Section id={"about"} className={"about-section"}>
          <div className={"container about-me"}>
            <div>
              <h2>ABOUT ME:</h2>
              <p>
                Hey, I'm Viktor Ivanovski, a coder in Skopje. When I'm not
                knee-deep in code, you'll catch me exploring new places, gaming
                or reading a few chapters of manga. I like to balance things out
                with the occasional coding binge and, of course, enjoying a
                drink or two. Cheers!😁
              </p>
            </div>
          </div>
          <div className={"container accordion"}>
            <Accordion />
          </div>
        </Section>
        <Section id={"carousel"} className={"carousel-section"}>
          <Carousel />
        </Section>
        <Section id={"projects"} className={"projects-section"}>
          <Projects />
        </Section>
      </Main>
      <Footer></Footer>
    </div>
  );
}
