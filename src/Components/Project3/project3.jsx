import React from "react";
import "./project3.css";
import { Link } from "react-scroll";
import Image from "../../assets/img2.png";
const project3 = () => {
  return (
    <section id="project3">
      <div className="Img3">
        <img src={Image} alt="Profile3" className="image5" />
      </div>
      <div className="projectContent3">
        <span className="project3"> -Project 1</span>
        <br />
        <br />
        <span className="projectText3">Branding Nice Studio</span>
        <br />
        <p className="projectPara3">
          The technological revolution is changing aspect of our lives,
          <br /> and the fabric of society itself. it's also changing the way we
          <br /> learn and what we learn. Factual knowledge is less prized
          <br /> when everything you ever need to know can be found on your
          <br /> phone. There's no imperative to be an expert at <br />
          doing everything when you can.
        </p>
        <br />
        <Link className="Readmore3">-> Read More</Link>
        <Link>
          <div>
            <button className="btn3">View All</button>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default project3;