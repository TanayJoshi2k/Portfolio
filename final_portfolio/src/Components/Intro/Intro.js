// Import Components
import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import SVGICONS from "./svgIcons";

// Import CSS
import classes from "./Intro.module.css";
import typewriter_classes from "./Typewriter.module.css";

// Import Assets
import pdf from "../../assets/Tanay_Joshi_Resume.pdf";

// Import Libraries
import { motion } from "framer-motion";

function Intro() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <motion.div
        className={classes.parentContainer}>
        <p className={classes.hello}>Hello,</p>
        <motion.p
          className={classes.name}
          initial={{ x: "-100vh" }}
          animate={{ x: 0 }}
        >
          I'm Tanay
        </motion.p>

        <p>
          <span className={typewriter_classes.text_1}>Python Developer</span>
          <span className={typewriter_classes.text_2}>ML & CV Enthusiast</span>
        </p>

        <SVGICONS />

        <div>
          <button className={classes.resume_btn}>
            <a href={pdf} download="Tanay Joshi Resume">
              Download Resume
            </a>
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default Intro;
