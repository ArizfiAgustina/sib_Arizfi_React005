import "./footer.css";
import { BsMouse } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialDribble } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialGithub } from "react-icons/ti";

function Footer() {
  return (
    <div id="footer" className="container footer-container">
      <h1>
        That's all
        <a href="#home">
          <h2>
            <BsMouse /> -scroll up-
          </h2>
        </a>
      </h1>

      <div className="social-Links">
        <a href="#">
          <BsInstagram className="social" />
        </a>

        <a href="#">
          <FaFacebookF className="social" />
        </a>

        <a href="#">
          <TiSocialDribble className="social" />
        </a>

        <a href="#">
          <TiSocialYoutube className="social" />
        </a>

        <a href="#">
          <TiSocialGithub className="social" />
        </a>

        <a href="#">
          <BsInstagram className="social" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
