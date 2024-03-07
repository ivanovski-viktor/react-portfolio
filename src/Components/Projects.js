import { useState } from "react";
import ProjectsData from "./ProjectsData";

export default function Projects() {
  const content = ProjectsData();
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
        <a href={item.link}>
          <div key={i} className="project-card">
            <img src={item.image} alt="img" />
            <h4>{item.title}</h4>
            <a>Open!</a>
          </div>
        </a>
      ))}
    </div>
  );
}
