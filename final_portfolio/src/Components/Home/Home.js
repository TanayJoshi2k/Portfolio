import React from "react";
import Intro from "../Intro/Intro";
import About from "../About/About";
import Timeline from "../Timeline/Timeline";
import Skills from "../SNP/Skills";
import Projects from "../Projects/Projects";
import Contact from '../Contact/Contact';

const Home = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Intro />
      <About />
      <Timeline />
      <Skills />
      <Projects />
      <Contact />
      
      {/* <Footer /> */}

      {/* <div className={classes.parentDiv}>
        <div className={classes.rowOne}>
          <div>
            <img src="https://img.icons8.com/stickers/500/000000/python.png" />
          </div>
          <div>
            <img src="https://img.icons8.com/color/500/000000/javascript--v1.png" />
          </div>
          <div>
          <img src="https://img.icons8.com/color/500/000000/c-programming.png"/>
          </div>
        </div>
      </div>
      <div className={classes.parentDiv}>
        <div className={classes.rowOne}>
          <div>
          <img src="https://img.icons8.com/color/500/000000/numpy.png"/>
          </div>
          <div>
            <img src="https://tanay-tech.000webhostapp.com/images/pandas.png" />
          </div>
          <div>
          <img src="https://tanay-tech.000webhostapp.com/images/sns.png"/>
          </div>
        </div>
      </div>
      <div className={classes.parentDiv}>
        <div className={classes.rowOne}>
          <div>
          <img src="https://img.icons8.com/color/500/000000/mysql-logo.png"/>
          </div>
          <div>
          <img src="https://img.icons8.com/color/500/000000/mongodb.png"/>
          </div>
        </div>
      </div>
      <div className={classes.parentDiv}>
        <div className={classes.rowOne}>
          <div>
          <img src="https://img.icons8.com/color/500/000000/tensorflow.png"/>
          </div>
          <div>
          <img src="https://tanay-tech.000webhostapp.com/images/keras.png"/>
          </div>
        </div>
      </div>
      <div className={classes.parentDiv}>
        <div className={classes.rowOne}>
          <div>
          <img src="https://img.icons8.com/color/500/000000/bootstrap.png"/>
          </div>
          <div>
          <img src="https://img.icons8.com/color/500/000000/css3.png"/>
          </div>
          <div>
          <img src="https://blog.logrocket.com/wp-content/uploads/2019/07/E1G1nNb0_400x400.jpg"/>
          </div>
        </div>
      </div> */}
      {/* <Timeline /> */}
    </div>
  );
};

export default Home;
