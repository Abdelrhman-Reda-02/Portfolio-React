import React from "react";
import "./skills.css";
import Html from "../../assets/html.webp";
import Css from "../../assets/css3.svg";
import Javascript from "../../assets/javascript.svg";
import ReactJS from "../../assets/react.svg";
import Tailwind from "../../assets/tailwindcss.svg";
import Figma from "../../assets/figma.svg";
import Nodejs from "../../assets/nodejs.svg";
import GitHub from "../../assets/github.svg";

const SkillsData = [
  {
    id: 1,
    image: Html,
    title: "HTML",
    disc: "Mark Up",
  },
  {
    id: 2,
    image: Css,
    title: "CSS",
    disc: "User Interface",
  },
  {
    id: 3,
    image: Javascript,
    title: "JavaScript",
    disc: "Interaction",
  },
  {
    id: 4,
    image: ReactJS,
    title: "React",
    disc: "Framework",
  },
  {
    id: 5,
    image: Tailwind,
    title: "TailwindCSS",
    disc: "User Interface",
  },
  {
    id: 6,
    image: Nodejs,
    title: "NodeJS",
    disc: "Web Server",
  },
  {
    id: 7,
    image: Figma,
    title: "Figma",
    disc: "Design tool",
  },
  {
    id: 8,
    image: GitHub,
    title: "Github",
    disc: "Version control",
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="top-section">
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
      </div>
      <div className="container skills_container">
        {SkillsData.map(({ id, image, title, disc }) => (
          <article key={id} className="skill-card">
            <div className="icon">
              <img src={image} />
            </div>
            <div className="content">
              <h4>{title}</h4>
              <p className="text-light">{disc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
