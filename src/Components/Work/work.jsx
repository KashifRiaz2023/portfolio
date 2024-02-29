import React from "react";
import { Link } from "react-scroll";
import Image9 from "../../assets/img9 .png";
import Image8 from "../../assets/img8.png";
import "./work.css";
const work = () => {
  return (
    <section id="Work">
      <div className="WorkContent">
        <span className="Work1">___</span>
        <br />
        <br />
        <span className="workText">Lets Work Together</span>
        <br />
        <br />
        <span className="workpara">
          The technological revolution is changing aspect of our lives, and the
          fabric of
          <br /> society itself. it's also changing the way we learn and what we
          learn
        </span>
        <br />
        <br />
        <Link>
          <button className="btn5">Contact Me</button>
        </Link>
        <div>
          <img src={Image9} alt="image" className="image9" />
        </div>
      </div>
    </section>
  );
};

export default work;