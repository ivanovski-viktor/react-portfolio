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
import Contact from "./Components/Contact";
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
              Welcome to my corner of the web! I'm Viktor, a dedicated web
              developer with a love for crafting digital experiences. From
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
                Hey, I'm Viktor Ivanovski, a coder from Skopje. I've been
                interested in the world of IT since the young age of 9. Starting
                with operating systems and computer hardware, I later made the
                switch to software development in 2019. Since then, I've been
                steadily working towards a career in web development. When I'm
                not coding, you'll find me exploring the digital realm, taking
                breaks with some gaming and a few chapters of manga. I like to
                keep things balanced, throwing in the occasional coding binge,
                and, of course, savoring a drink or two. Cheers! 😁
              </p>
            </div>
          </div>
          <Accordion />
        </Section>
        <Section id={"carousel"} className={"carousel-section"}>
          <Carousel />
        </Section>
        <Section id={"projects"} className={"projects-section"}>
          <Projects />
        </Section>
        <Section id={"contact"} className={"contact-me"}>
          <Contact />
        </Section>
      </Main>
      <Footer></Footer>
    </div>
  );
}
