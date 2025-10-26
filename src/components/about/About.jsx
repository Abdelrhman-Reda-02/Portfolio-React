import React from "react";
import "./about.css";
import AboutImg from "../../assets/me-about.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { FaUniversity } from "react-icons/fa";
function About() {
  return (
    <section className="about" id="about">
      <div className="top-section">
        <h5>Get to Know</h5>
        <h2>About me</h2>
      </div>
      <div className="container about_container">
        <div className="about-me">
          <div className="about-me-img">
            <img src={AboutImg} alt="my-photo" />
          </div>
        </div>
        <div className="about_content">
          <div className="about-cards">
            <div className="about-card">
              <FaAward className="about-icon" />
              <h5>Experience</h5>
              <small>Building real-world projects during my studies</small>
            </div>
            <div className="about-card">
              <FiUsers className="about-icon" />
              <h5>Projects</h5>
              <small>10+ Personal Projects</small>
            </div>
            <div className="about-card">
              <FaUniversity className="about-icon" />
              <h5>Education</h5>
              <small>Bachelor’s in Computer Engineering 2025</small>
            </div>
          </div>
          <p>
            I'm Abdelrhman Reda, Recent Computer Engineering graduate from
            Zagazig University with a strong academic background. Passionate
            Front-End Developer skilled in building responsive and user-friendly
            web applications using HTML, CSS, JavaScript, React.js, Next.js, and
            Tailwind CSS. Adept at translating UI/UX designs into functional,
            high-performance websites while ensuring cross-browser compatibility
            and optimized user experience.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
