import React from "react";
import "./home.css";
import Me from "../../assets/me.png";
import CV from "../../assets/my-cv.pdf";
import HomeSocials from "./HomeSocials";
import { FaBeer } from "react-icons/fa";

function Home() {
  return (
    <div className="home">
      <div className="container home_container">
        <h4>Hello I'm </h4>
        <h1>Abdelrhman Reda</h1>
        <h4 className="text-light">Frontend Developer </h4>

        <div className="btns">
          <a href={CV} className="btn" download>
            Download CV
          </a>
          <a href="#" className="btn btn-primary ">
            Let's Talk
          </a>
        </div>
        <div className="me">
          <img src={Me} alt="my photo" />
        </div>
        <a href="#about" className="scroll_down">
          Scroll Down
        </a>
        <HomeSocials />
      </div>
    </div>
  );
}

export default Home;
