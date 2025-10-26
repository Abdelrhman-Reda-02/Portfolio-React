import React from "react";
import "./projects.css";
import IMG1 from "../../assets/portfolio-1.png";
import IMG2 from "../../assets/portfolio-2.png";
import IMG3 from "../../assets/portfolio-3.png";
import IMG4 from "../../assets/portfolio-4.png";
import IMG5 from "../../assets/portfolio-5.png";
import IMG6 from "../../assets/portfolio-6.png";
import IMG7 from "../../assets/portfolio-7.png";
import IMG8 from "../../assets/portfolio-8.png";

const projectsData = [
  {
    id: 1,
    image: IMG1,
    title: "AINO",
    github: "#",
    demo: "https://ai-gen-jmaz.vercel.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Prayer Times",
    github: "https://github.com/Abdelrhman-Reda-02/prayer-times",
    demo: "https://prayer-times-i9c1.vercel.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Education Platform",
    github: "https://github.com/Abdelrhman-Reda-02/Education-Website",
    demo: "https://education-website-five-xi.vercel.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Softy Pinko",
    github: "https://github.com/Abdelrhman-Reda-02/Softy-Pinko",
    demo: "https://softy-pinko-gold.vercel.app",
  },
  {
    id: 5,
    image: IMG5,
    title: "Old Portfolio",
    github: "https://github.com/Abdelrhman-Reda-02/My-Portfolio",
    demo: "https://my-portfolio-nine-omega-28.vercel.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Appie",
    github: "https://github.com/Abdelrhman-Reda-02/Appie",
    demo: "https://appie-murex.vercel.app/",
  },
  {
    id: 7,
    image: IMG7,
    title: "Omnio Food",
    github: "https://github.com/Abdelrhman-Reda-02/OmnioFood",
    demo: "https://omnio-food-two.vercel.app/",
  },
  {
    id: 8,
    image: IMG8,
    title: "Netflix",
    github: "https://github.com/Abdelrhman-Reda-02",
    demo: "#",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="top-section">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
      </div>
      <div className="container projects_container">
        {projectsData.map(({ id, image, title, github, demo }) => (
          <article key={id} className="project-card">
            <div className="project-img">
              <img src={image} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio-btns">
              <a href={demo} className="btn" target="_blank">
                Live Demo
              </a>
              {id !== 1 && (
                <a href={github} className="btn btn-primary" target="_blank">
                  Github
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
