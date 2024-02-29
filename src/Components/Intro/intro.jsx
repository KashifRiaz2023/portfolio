import React from "react";
import "./intro.css";
import { Link } from "react-scroll";
import bg from "../../assets/logo1.png";
import "./intro.css";
const intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">-introducing</span>

        <span className="introText">
          Hello <br />
          <span className="introName">I'm Kashif</span>
          <br />
          <span className="introName">Website Designer</span>
        </span>
        <p className="introPara">
          Since beginning my journey as a freelance designer nearby 7 years ago,
          I 've done remote work for agencies, consulted for startup, and
          collaborated with talented people to create digital products.
        </p>
        <Link>
          <button className="btn">Contact Me</button>
        </Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default intro;