import React from "react";
import styles from "./contact.module.css";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";
const Contact = (props) => {
  return (
    <section className={styles.container}>
      <div className={styles.imageContainer}>
        <img src="./image/2.jpg" alt="contact" />
      </div>
      <div className={styles.textContainer}>
        <h2>Contact</h2>
        <p>안녕하세요. 프론트엔드 개발자 황혜빈입니다. </p>
        <p>
          독학으로 프론트엔드를 공부했으며 혼자서 시작부터 배포까지 혼자
          진행하면서 전체적인 개발의 이해도를 높였습니다.
        </p>
        <p>리액트에 관심이 많으며 풀스택 개발에도 큰 관심을 가지고 있습니다.</p>
        <ul className={styles.iconsContainer}>
          <li>
            <a href="tel:010-4334-1279">
              <FontAwesomeIcon icon={faPhone} />
              010-4334-1279
            </a>
          </li>
          <li>
            <a href="mailto:sksp4334@naver.com">
              <FontAwesomeIcon icon={faMailBulk} />
              sksp4334@naver.com
            </a>
          </li>
          <li>
            <a href="https://github.com/hyebin-Hwang">
              <FontAwesomeIcon icon={faGithubSquare} />
              https://github.com/hyebin-Hwang
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
