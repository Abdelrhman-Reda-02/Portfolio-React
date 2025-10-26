import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

function HomeSocials() {
  return (
    <div className="home_socials">
      <a
        href="https://www.linkedin.com/in/abdulrahman-reda-a263081b3"
        target="_blank">
        <FaLinkedin />
      </a>
      <a href="https://github.com/Abdelrhman-Reda-02" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.facebook.com/abdo.reda.393950" target="_blank">
        <FaFacebook />
      </a>
    </div>
  );
}

export default HomeSocials;
