import React from "react";
import classes from "./projects.module.css";

const Projects = () => {
  return (
    <div>
      <p className={classes.projectsTitle}>Projects</p>
      <div className={classes.projectsContainer}>
        <div className={classes.project}>
          <a
            href="https://github.com/TanayJoshi2k/ImageColoring"
            target="_blank"
            rel="noopener noreferrer"
          >
            Image Coloring with Encoders
          </a>

          <div className={classes.imgContainer}>
            <p>
              A fun project that implements Encoder Decoder Architecture to
              color Grayscale Images
            </p>
          </div>

          <div className={classes.techStackContainer}>
            <div className={classes.techStack}>
              <div>Python</div>
              <div>Tensorflow</div>
              <div>Keras</div>
            </div>
            <div className={classes.techStack}>
              <div>Numpy</div>
              <div>OpenCV</div>
              <div>Matplotlib</div>
            </div>
          </div>
        </div>

        <div className={classes.project}>
          <a>Segmenting people with U-Net</a>

          <div className={classes.imgContainer}>
            <p>Using U-Net to segment people from the image</p>
          </div>
          <div className={classes.techStackContainer}>
            <div className={classes.techStack}>
              <div>Python</div>
              <div>Tensorflow</div>
              <div>Keras</div>
            </div>

            <div className={classes.techStack}>
              <div>Numpy</div>
              <div>OpenCV</div>
              <div>Matplotlib</div>
            </div>
          </div>
        </div>

        <div className={classes.project}>
          <a>Image Super Resolution using ResNet + GAN</a>

          <div className={classes.imgContainer}>
            <p>
              Implemented the ResNet + GAN-based architecture proposed by the{" "}
              <a className={classes.link}>paper</a> to estimate a
              high-resolution image for a low-resolution input image.
            </p>
          </div>
          <div className={classes.techStackContainer}>
            <div className={classes.techStack}>
              <div>Python</div>
              <div>Tensorflow</div>
              <div>Keras</div>
            </div>

            <div className={classes.techStack}>
              <div>Numpy</div>
              <div>OpenCV</div>
              <div>Matplotlib</div>
            </div>
          </div>
        </div>

        <div className={classes.project}>
          <a
            href="https://github.com/TanayJoshi2k/Portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            Crowd Controller Using Genetic Algorithm
          </a>

          <div className={classes.imgContainer}>
            <p>
              Implemented Steady State Genetic Algorithm in Unity Engine and
              C# to control crowd as a part of senior year project.
            </p>
          </div>
          <div className={classes.techStackContainer}>
            <div className={classes.techStack}>
              <div>HTML</div>
              <div>CSS</div>
              <div>React</div>
              <div>Framer Motion</div>
            </div>
          </div>
        </div>

        <div className={classes.project}>
          <a
            href="https://github.com/TanayJoshi2k/Pokedex"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pokedex
          </a>

          <div className={classes.imgContainer}>
            <p>
              A web app made with React that consumes the{" "}
              <a className={classes.link}>PokeApi</a> to fetch and render
              pokemon details. Implemented lazy loading to reduce page weight,
              allowing for a quicker page load time and bandwidth conservation
            </p>
          </div>
          <div className={classes.techStackContainer}>
            <div className={classes.techStack}>
              <div>HTML</div>
              <div>CSS</div>
              <div>Bootstrap</div>
            </div>

            <div className={classes.techStack}>
              <div>Javascript</div>
              <div>React</div>
              <div>Axios</div>
            </div>
          </div>
        </div>

        <div className={classes.project}>
          <a
            href="https://github.com/TanayJoshi2k/Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fakestagram
          </a>

          <div className={classes.imgContainer}>
            <p>
              An Instagram clone built with React and Firebase that allows users
              to signup & login, follow, unfollow accounts, upload and comment
              on posts.
            </p>
          </div>

          <div className={classes.techStackContainer}>
            <div className={classes.techStack}>
              <div>HTML</div>
              <div>CSS</div>
              <div>React</div>
              <div>Bootstrap</div>
            </div>

            <div className={classes.techStack}>
              <div>React Router</div>
              <div>JavaScript</div>
              <div>Firebase</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
