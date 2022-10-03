import React from "react";
import "./Home.css";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I'm <span>Arizfi Agustina</span>
            </h1>
            <h2>
              {" "}
              a{" "}
              <span>
                {" "}
                <Typewriter words={["Professional Coder", "Developer"]} loop cursor cursorStyle="|" typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>Hacktiv Student 2022</p>
            <div className="hero-btn d_flex">
              <h4>FIND WITH ME</h4>
              <div className="button">
                <button className="btn_shadow">
                  <i className="fab fa-instagram"></i>
                </button>
                <button className="btn_shadow">
                  <i className="fab fa-linkedin"></i>
                </button>
              </div>
            </div>
            <div className="col_1">
              <h4>BEST SKILL ON</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
