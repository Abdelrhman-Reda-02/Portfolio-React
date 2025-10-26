import React from "react";
import "./services.css";
import { MdDesignServices } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { FaCode } from "react-icons/fa";

function Services() {
  return (
    <section id="services" className="services">
      <div className="top-section">
        <h5>What I Offer</h5>
        <h2>Services</h2>
      </div>
      <div className="container container_services">
        <article className="card">
          <MdDesignServices className="icon" />
          <h3>Front-End Development</h3>
          <p className="text-light">
            Creating responsive and interactive interfaces.
          </p>
        </article>
        <article className="card">
          <IoIosRocket className="icon" />
          <h3>API Integration</h3>
          <p className="text-light">Connecting apps and data seamlessly.</p>
        </article>
        <article className="card">
          <FaCode className="icon" />
          <h3>Clean Code</h3>
          <p className="text-light">
            clean and reusable code that follows best practices.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Services;
