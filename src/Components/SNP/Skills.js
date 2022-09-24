import React from "react";
import classes from "./skills.module.css";
import Marquee from "react-fast-marquee";

import { default as reactLogo } from "../../assets/reactjs-icon.svg";
import { default as gitIcon } from "../../assets/git-scm-icon.svg";
// import { default as html } from "../../assets/w3_html5-icon.svg";
import { default as javascript } from "../../assets/js.svg";
// import { default as css } from "../../assets/w3_css-icon.svg";
import { default as mysql } from "../../assets/mysql3.svg";
import { default as mongodb } from "../../assets/mongodb-icon.svg";
import { default as python } from "../../assets/python.svg";
import { default as tf } from "../../assets/tensorflow-icon.svg";
import { default as cv } from "../../assets/opencv-icon.svg";
import { default as bootstrap } from "../../assets/getbootstrap-icon.svg";
import { default as tailwind } from "../../assets/tailwindcss-icon.svg";
import { default as html } from "../../assets/w3_html5-icon.svg";
import { default as css } from "../../assets/w3_css-icon.svg";
const Skills = () => {
  return (
    <div id="snp">
      <p className={classes.skillsTitle}>Skills</p>
      <Marquee gradient={false} speed={20}>
        <div className={classes.marqueeContainer}>
          <div><img height="100" width="100" src={python} /></div>
          <div><img height="100" width="100" src={javascript} /></div>
          <div><img height="100" width="100" src={html} /></div>
          <div><img height="100" width="100" src={css} /></div>
          <div><img height="100" width="100" src={reactLogo} /></div>
          <div><img height="100" width="100" src={bootstrap} /></div>
          <div><img height="100" width="100" src={tailwind} /></div>
          <div><img height="100" width="100" src={tf} /></div>
          <div><img height="100" width="100" src={cv} /></div>
          <div><img height="100" width="100" src={mysql} /></div>
          <div><img height="100" width="100" src={mongodb} /></div>
          <div><img height="100" width="100" src={gitIcon} /></div>
        </div>
      </Marquee>
    </div>
  );
};

export default Skills;
