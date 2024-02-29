import React from "react";
import "./project.css";
import { Link } from "react-scroll";
import Image from "../../assets/img2.png";
const project = () => {
  return (
    <section id="project">
      <div className="Img">
        <img src={Image} alt="Profile" className="image" />
      </div>
      <div className="projectContent">
        <span className="project"> -Project 1</span>
        <br />
        <br />
        <span className="projectText">Branding Nice Studio</span>
        <br />
        <p className="projectPara">
          The technological revolution is changing aspect of our lives,
          <br /> and the fabric of society itself. it's also changing the way we
          <br /> learn and what we learn. Factual knowledge is less prized
          <br /> when everything you ever need to know can be found on your
          <br /> phone. There's no imperative to be an expert at <br />
          doing everything when you can.
        </p>
        <br />
        <Link className="Readmore">-> Read More</Link>
      </div>
    </section>
  );
};

export default project;