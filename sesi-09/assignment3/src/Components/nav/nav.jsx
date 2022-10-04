import "./nav.css";
import { AiOutLineHome } from "react-icons/ai";
import { AiOutLineUser } from "react-icons/ai";
import { TiGroupOutLine } from "react-icons/ti";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BsArrowDownCircle } from "react-icons/bs";

function Navbar() {
  return (
    <div className="navigation">
      <a href="#home">
        <AiOutLineHome className="icon active-nav" />
      </a>
      <a href="#about">
        <AiOutLineUser className="icon active-nav" />
      </a>
      <a href="#members">
        <TiGroupOutLine className="icon" />
      </a>
      <a href="#contact">
        <BiMessageRoundedDots className="icon" />
      </a>
      <a href="#home">
        <BsArrowDownCircle className="icon" />
      </a>
    </div>
  );
}

let icons = document.querySelectorAll(".navigation .icon");
icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    changeactive();
    icon.classList.add("active-nav");
  });
});

function changeactive() {
  icons.forEach((icon) => {
    icon.classList.remove("active-nav");
  });
}

export default Navbar;
