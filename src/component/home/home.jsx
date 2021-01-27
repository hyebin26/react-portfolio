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
      <h3>안녕하세요 !</h3>
      <h1>개발자 황혜빈입니다.</h1>
      <h4>
        저는 <strong>프론트엔드</strong> 개발자 입니다.
      </h4>
      <p>
        반응형 웹사이트, 웹 애플리케이션을 개발하고 배포하며 사용자 중심정으로
        생각하고 더 좋은 앱을 만들기 위해 노력하고 있습니다.
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
