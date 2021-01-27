import React from "react";
import styles from "./projects.module.css";

const Projects = (props) => (
  <section className={styles.container}>
    <ul className={styles.projectContainer}>
      <li className={styles.list}>
        <div className={styles.imgContainer}>
          <a href="#">
            <img src="./image/clone_hotel.png" alt="clone hotel" />
          </a>
        </div>
        <div className={styles.textContainer}>
          <h2>Hotel Page Clone coding</h2>
          <p>
            템플릿을 참고해서 만든 클론코딩 홈페이지입니다. 구현한 페이지는
            HOME,PROPERTY,PAGES 이며 바닐라 자바스크립트로 이미지 슬라이더,
            비디오 팝업, 햄버거 내비게이션, 썸네일 이미지, 지도 등을
            구현하였습니다.
          </p>
          <div>
            <span>Link: </span>
            <a href="https://github.com/hyebin26/clone_coding">
              https://github.com/hyebin26/clone_coding
            </a>
          </div>
          <div>
            <span>Source code: </span>
            <a href="https://github.com/hyebin26/clone_coding">
              https://github.com/hyebin26/clone_coding
            </a>
          </div>
        </div>
      </li>
      <li className={styles.list}>
        <div className={styles.imgContainer}>
          <a href="https://dashboard.heroku.com/apps/js-review">
            <img src="./image/review.png" alt="review" />
          </a>
        </div>
        <div className={styles.textContainer}>
          <h2>Review Page</h2>
          <div>
            <span>Link: </span>
            <a href="#">naver.com</a>
          </div>
          <div>
            <span>Source code: </span>
            <a href="#"></a>
          </div>
        </div>
      </li>
      <li className={styles.list}>
        <div className={styles.imgContainer}>
          <a href="#">
            <img src="" alt="" />
          </a>
        </div>
        <div className={styles.textContainer}>
          <h2>Hello</h2>
          <div>
            <span>Link: </span>
            <a href="#">naver.com</a>
          </div>
          <div>
            <span>Source code: </span>
            <a href="#"></a>
          </div>
        </div>
      </li>
    </ul>
  </section>
);

export default Projects;
