import React from "react";
import styles from "./skills.module.css";

const Skills = (props) => {
  return (
    <section className={styles.container}>
      <div className={styles.graphContainer}>
        <p>Javascript</p>
        <div className={styles.progress}>
          <div className={styles.progressBar} style={{ width: "80%" }}></div>
        </div>
        <p>React</p>
        <div className={styles.progress}>
          <div className={styles.progressBar} style={{ width: "80%" }}></div>
        </div>
        <p>Typescript</p>
        <div className={styles.progress}>
          <div className={styles.progressBar} style={{ width: "65%" }}></div>
        </div>
        <p>Node JS</p>
        <div className={styles.progress}>
          <div className={styles.progressBar} style={{ width: "60%" }}></div>
        </div>
        <p>Mysql</p>
        <div className={styles.progress}>
          <div className={styles.progressBar} style={{ width: "60%" }}></div>
        </div>
        <p>Express</p>
        <div className={styles.progress}>
          <div className={styles.progressBar} style={{ width: "60%" }}></div>
        </div>
      </div>
      <ul className={styles.iconsContainer}>
        <li>
          <img src="./image/javascript.png" alt="" />
        </li>
        <li>
          <img src="./image/react.png" alt="" />
        </li>
        <li>
          <img src="./image/webpack.png" alt="" />
        </li>
        <li>
          <img src="./image/typescript.png" alt="" />
        </li>
        <li>
          <img src="./image/github.png" alt="" />
        </li>
        <li>
          <img src="./image/nodejs.png" alt="" />
        </li>
        <li>
          <img src="./image/Expressjs.png" alt="" />
        </li>
        <li>
          <img src="./image/sass.png" alt="" />
        </li>
        <li>
          <img src="./image/css.png" alt="" />
        </li>
        <li>
          <img src="./image/mysql.png" alt="" />
        </li>
        <li>
          <img src="./image/postman.jpeg" alt="" />
        </li>
        <li>
          <img src="./image/npm.png" alt="" />
        </li>
      </ul>
    </section>
  );
};

export default Skills;
