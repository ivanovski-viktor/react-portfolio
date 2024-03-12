import { useState } from "react";
import plusIcon from "../assets/plus.png";
import minusIcon from "../assets/minus.png";
const faqs = [
  {
    title: "Formal Education:",
    text: "Regarding my education, I am a senior computer science student currently in the final year of my studies at FICT Bitola. Concurrently, I am actively participating in a Front-End Development academy focused on React.js at Change Academy Skopje.e",
  },
  {
    title: "Work Experience in Web Development",
    text: "I have been working as a Wordpress Developer at Coordea on 3 projects since 1.11.2023 - 5 months experience. While working for Coordea I managed to: - Design the structure of web pages - Build given UI Designs - Build fully responsive web pages - Optimised and improved websites speed - Developed reusable code for future references - Worked with APIs and large databases!",
  },
  {
    title: "What am I looking for?",
    text: "I am eager to contribute my skills and passion as a Junior Web Developer, aspiring to actively engage with a dynamic team and contribute to projects while furthering my professional growth within a collaborative and innovative work environment. I am enthusiastic about making valuable contributions and expanding my expertise in a company that values continuous learning and development.",
  },
];

export default function Accordion() {
  const [curOpen, setIsOpen] = useState(1);

  return (
    <div className="container accordion">
      <div className="accordion">
        {faqs.map((item, index) => (
          <AccordionItem
            onOpen={setIsOpen}
            curOpen={curOpen}
            num={index + 1}
            title={item.title}
            text={item.text}
            key={item.title}
          />
        ))}
      </div>
    </div>
  );
}

function AccordionItem({ num, title, text, onOpen, curOpen }) {
  const isOpen = num === curOpen;
  function handleIsOpen() {
    onOpen(isOpen ? null : num);
  }
  return (
    <>
      <div onClick={handleIsOpen} className={isOpen ? "item open" : "item"}>
        <p className={isOpen ? "number open" : "number"}>
          {num <= 9 ? `0${num}` : num}
        </p>
        <p className="text">{title}</p>
        <p className="icon">
          {isOpen ? (
            <img src={minusIcon} alt="minus" />
          ) : (
            <img src={plusIcon} alt="plus" />
          )}
        </p>
      </div>
      {isOpen ? <div className="content-box">{text}</div> : null}
    </>
  );
}
