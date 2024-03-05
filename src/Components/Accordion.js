import { useState } from "react";
import plusIcon from "../assets/plus.png";
import minusIcon from "../assets/minus.png";
const faqs = [
  {
    title: "What is my education?",
    text: "I'm a computer science student in my last year of studies at FICT Bitola! I'm currently enrolled in a front-end development academy with React.js at Change Academy Skopje",
  },
  {
    title: "Do I have any work experience ?",
    text: "I have been working as a Wordpress Developer at Coordea on 3 projects since 1.11.2023 - 5 months experience",
  },
  {
    title: "What am I looking for?",
    text: "I'm looging for a Junior Web Developer opportunity",
  },
];

export default function Accordion() {
  const [curOpen, setIsOpen] = useState(null);

  return (
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
