import { useState } from "react";
import ProjectsData from "./ProjectsData";

const content = [
  [
    {
      image: require("../assets/cart.png"),
      title: "Simple Shop - Webpack",
      link: "#",
    },
    {
      image: require("../assets/calculator.png"),
      title: "Calculator",
      link: "#",
    },
    {
      image: require("../assets/sketch.png"),
      title: "Etch-A-Sketch",
      link: "#",
    },
    {
      image: require("../assets/scissors.png"),
      title: "Rock-Paper-Scissors",
      link: "#",
    },
  ],
  [
    {
      image: require("../assets/academy.png"),
      title: "Online Dev Academy",
      link: "#",
    },
    {
      image: require("../assets/bill.png"),
      title: "Split a bill",
      link: "#",
    },
    {
      image: require("../assets/recipe.png"),
      title: "Recipes",
      link: "#",
    },
    {
      image: require("../assets/sole.png"),
      title: "Step App",
      link: "#",
    },
  ],
];

export default function Projects() {
  return <div id="projects">{<Tabbed content={content} />}</div>;
}

function Tabbed({ content }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="tabs">
        <Tab num={0} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={1} activeTab={activeTab} onClick={setActiveTab} />
      </div>
      <div className="projects-container">
        {activeTab !== undefined && <TabContent tab={content[activeTab]} />}
      </div>
    </div>
  );
}

function Tab({ num, activeTab, onClick }) {
  return (
    <button
      className={activeTab === num ? "button-tab selected" : "button-tab"}
      onClick={() => onClick(num)}
    >
      {num === 0 ? `Vanilla Js Projects` : `React Projects`}
    </button>
  );
}

function TabContent({ tab }) {
  return (
    <div className="tab-content">
      {tab.map((item, i) => (
        <div key={i} className="project-card">
          <img src={item.image} alt="img" />
          <h4>{item.title}</h4>
          <a href={item.link}>Open!</a>
        </div>
      ))}
    </div>
  );
}
