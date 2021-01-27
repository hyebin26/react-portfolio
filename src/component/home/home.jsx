import React from "react";
import styles from "./home.module.css";
import {
  faInstagramSquare,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Btn from "../btn/btn";
const Home = (props) => (
  <section className={styles.container}>
    <div className={styles.textContainer}>
      <h3>Hello !</h3>
      <h1>I'm Hyebin</h1>
      <h4>
        I'm a <strong>front-end Developer</strong>
      </h4>
      <p>
        I specialize in developing and deploying responsive websites and web
        applications
      </p>
      <ul className={styles.iconsContainer}>
        <li className={styles.iconList}>
          <a href="https://github.com/hyebin26">
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
        </li>
        <li className={styles.iconList}>
          <a href="https://www.instagram.com/hyebinqp/">
            <FontAwesomeIcon icon={faInstagramSquare} />
          </a>
        </li>
      </ul>
      <Btn value="Contact Me" className={styles.btn} />
    </div>
    <div class={styles.imageContainer}>
      <img src="./image/1.jpg" alt="programmer" />
    </div>
  </section>
);

export default Home;
