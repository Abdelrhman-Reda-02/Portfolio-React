import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Abdelrhman Reda
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.facebook.com/abdo.reda.393950" target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/_abdelrahman_reda_/" target="_blank">
          <FaInstagram />
        </a>
        <a href="https://github.com/Abdelrhman-Reda-02" target="_blank">
          <FaGithub />
        </a>
      </div>
      <div className="footer_copyright">
        <small>
          &copy;<a href="#">Abdelrhman Reda</a>All right reserved
        </small>
      </div>
    </footer>
  );
}

export default Footer;
