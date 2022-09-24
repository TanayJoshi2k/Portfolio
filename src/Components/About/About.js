import React, { useState, useEffect } from "react";
import classes from "./About.module.css";
import image from "../../assets/Tanay_edited.webp";

function About() {
  return (
    <div id="about" className={classes.aboutContainer}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
        <path
          fill="#202837"
          fillOpacity="1"
          d="M0,64L48,90.7C96,117,192,171,288,197.3C384,224,480,224,576,197.3C672,171,768,117,864,101.3C960,85,1056,107,1152,122.7C1248,139,1344,149,1392,154.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>

      <p className={classes.aboutMe}>About Me</p>
      <img
        src={image}
        style={{
          outline: "2px solid #33D69A",
          outlineOffset: "10px",
          outlineStyle: "dashed"
        }}
      />
      <div className={classes.aboutpara}>
        <p>
          I am a Computer Engineer, TechOps Consultant @ J.P Morgan & Chase.
        </p>
        <p>Machine Learning and Computer Vision (CV) enthusiast.</p>
        <p>
          I am passionate about reading CV papers and translating them into
          code.
        </p>
        <p>Self-taught Front-end developer &</p>
        <p>Gamer, Nerd and Meme connoiseur.</p>
      </div>
    </div>
  );
}

export default About;
