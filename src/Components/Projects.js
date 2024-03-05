const faqs = [
  {
    image: require("../assets/git.png"),
    title: "What is my education?",
    text: "I'm a computer science student in my ur.",
    link: "https://www.google.com",
  },
  {
    image: require("../assets/git.png"),
    title: "What is my education?",
    text: "I'm currently enrolled in a front-end development academy with React.js at Change Academy Skopje",
    link: "https://www.google.com",
  },
  {
    image: require("../assets/git.png"),
    title: "What is my education?",
    text: "I'm a computer science student in my last year o",
    link: "https://www.google.com",
  },
];

export default function Projects() {
  return (
    <div className="projects">
      {faqs.map((obj, i) => (
        <ProjectCard key={i} data={obj} />
      ))}
    </div>
  );
}

function ProjectCard({ data }) {
  return (
    <div className="project-card">
      <img src={data.image} alt="img" />
      <div className="detail">
        <h4>{data.title}</h4>
        <p>{data.text}</p>
        <a href={data.link}>Open!</a>
      </div>
    </div>
  );
}
