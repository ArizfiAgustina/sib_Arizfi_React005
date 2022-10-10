import "./contact.css";
import { AiOutLineYoutube } from "react-icons/ai";
import { AiOutLineWhatsApp } from "react-icons/ai";
import { AiOutLineInstagram } from "react-icons/ai";

function Contact() {
  return (
    <div className="container contact-container">
      <h1>Contact Me</h1>
      <div className="contact-Links">
        <a href="" className="contact youtube">
          <AiOutLineYoutube className="icon" />
          <h2>
            Youtube <span>Creative</span>
          </h2>
        </a>

        <a href="" className="contact whatsapp">
          <AiOutLineWhatsApp className="icon" />
          <h2>
            WhatsApp<span>+62 812 345 678</span>
          </h2>
        </a>

        <a href="" className="contact instagram">
          <AiOutLineInstagram className="icon" />
          <h2>
            Instagram<span>Creative</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
