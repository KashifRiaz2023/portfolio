import React from "react";
import "./skills.css";
import img from "../../assets/img1.png";
import { Link } from "react-scroll";
const skills = () => {
  return (
    <section id="skills">
      <div className="skillBar">
        <img src={img} alt="Profile" className="bg1" />
        <div className="skillBarText">
          <h2>Product Design</h2>
          <p>The technological revolution is changing aspect</p>
        </div>
      </div>
      <div className="happyBar">
        <img src={img} alt="Profile" className="bg1" />
        <div className="hapybartext">
          <h2>Product Design</h2>
          <p>The technological revolution is changing aspect</p>
        </div>
      </div>
      <div className="SadBar">
        <img src={img} alt="Profile" className="bg1" />
        <div className="sadbartext">
          <h2>Product Design</h2>
          <p>The technological revolution is changing aspect</p>
        </div>
      </div>
      <div className="MidBar">
        <img src={img} alt="Profile" className="bg1" />
        <div className="Midbartext">
          <h2>Product Design</h2>
          <p>The technological revolution is changing aspect</p>
        </div>
        <div className="skillContent">
          <span className="skill">-introducing</span>
          <br />
          <br />
          <span className="skillText">
            Why Hire Me For Next
            <br /> Project?
          </span>
          <br />
          <p className="skillPara">
            The technological revolution is changing aspect of our lives,
            <br /> and the fabric of society itself. it's also changing the way
            we
            <br /> learn and what we learn. Factual knowledge is less prized
            <br /> when everything you ever need to know can be found on your
            <br /> phone. There's no imperative to be an expert at <br />
            doing everything when you can.
          </p>
          <Link>
            <button className="btn1">Download CV</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default skills;