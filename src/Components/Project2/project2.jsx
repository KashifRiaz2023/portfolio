import React from "react";
import "./project2.css";
import { Link } from "react-scroll";
import Image2 from "../../assets/img2.png";
import Image3 from "../../assets/img3 .png";
import Image4 from "../../assets/img4.png";
const project2 = () => {
  return (
    <section id="project2">
      <div className="Img">
        <img src={Image2} alt="Profile1" className="image1" />
      </div>
      <div className="projectContent1">
        <span className="project1"> -Project 2</span>
        <br />
        <br />
        <span className="projectText1">Mobile Card App</span>
        <br />
        <p className="projectPara1">
          The technological revolution is changing aspect of our lives,
          <br /> and the fabric of society itself. it's also changing the way we
          <br /> learn and what we learn. Factual knowledge is less prized
          <br /> when everything you ever need to know can be found on your
          <br /> phone. There's no imperative to be an expert at <br />
          doing everything when you can.
        </p>
        <br />
        <Link className="Readmore1">-> Read More</Link>
        <div>
          <img src={Image3} alt="image" className="image3" />
        </div>
        <div>
          <img src={Image4} alt="image" className="image4" />
        </div>
      </div>
    </section>
  );
};

export default project2;