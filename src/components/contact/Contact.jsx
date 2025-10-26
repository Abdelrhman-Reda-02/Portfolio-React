import React, { useRef } from "react";
import { useState } from "react";

import "./contact.css";
import { MdEmail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const contactData = [
  {
    id: 1,
    icon: <MdEmail />,
    title: "Email",
    info: "abdu.reda2002@gmail.com",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=abdu.reda2002@gmail.com",
  },
  {
    id: 2,
    icon: <FaFacebookMessenger />,
    title: "Messenger",
    info: "Abdelrhman Reda",
    link: "https://m.me/abdo.reda.393950",
  },
  {
    id: 3,
    icon: <FaWhatsapp />,
    title: "WhatsApp",
    info: "01280338493",
    link: "https://wa.me/2001280338493?text=",
  },
];

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); //start animation on sending button

    emailjs
      .sendForm(
        "service_80uaosp",
        "template_7i1yc9j",
        form.current,
        "8YsxU5mLk9SHdE2w7"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset(); //form reset
        },
        (error) => {
          console.error(error.text);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section className="contact" id="contact">
      <div className="top-section">
        <h5>Get In Touch</h5>
        <h2>Contact</h2>
      </div>
      <div className="container contact_container">
        <div className="contact-options">
          {contactData.map(({ id, icon, title, info, link }) => (
            <article key={id} className="contact-card">
              {icon}
              <h4>{title}</h4>
              <h5>{info}</h5>
              <a href={link} target="_blank" rel="noreferrer">
                Send Message
              </a>
            </article>
          ))}
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Full Name" name="name" required />
          <input type="email" placeholder="Your Email" name="email" required />
          <textarea
            rows={10}
            placeholder="Enter Your Message"
            name="message"
            required></textarea>

          <button className="btn btn-primary" disabled={loading}>
            {loading ? <span className="loader"></span> : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
