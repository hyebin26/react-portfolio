import React from "react";
import styles from "./projects.module.css";

const Projects = (props) => (
  <section className={styles.container}>
    <ul className={styles.projectContainer}>
      <li className={styles.list}>
        <div className={styles.imgContainer}>
          <a href="https://hyebin26.github.io/clone_coding/">
            <img src="./image/clone_hotel.png" alt="clone hotel" />
          </a>
        </div>
        <div className={styles.textContainer}>
          <h2>Hotel Page Clone coding</h2>
          <p>
            템플릿을 참고해서 만든 클론코딩 홈페이지입니다. Scss,바닐라
            자바스크립트,HTMl을 사용했습니다. 구현한 페이지는
            HOME,PROPERTY,PAGES 이며 바닐라 자바스크립트로 이미지 슬라이더,
            비디오 팝업, 햄버거 내비게이션, 썸네일 이미지, 지도 등을
            구현하였습니다.
          </p>
          <div>
            <span>Link: </span>
            <a href="https://hyebin26.github.io/clone_coding/">
              https://hyebin26.github.io/clone_coding/
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
          <p>
            취미가 영화감상과 독서라서 기록을 남기기 위해 만든 페이지 입니다.
            NodeJs, Express, Mysql, 바닐라 자바스크립트를 이용해서 만들었습니다.
            작성한 글, 댓글을 Mysql로 저장하여 관리하고 검색 기능을
            구현했습니다. 또한 바닐라 자바스크립트로 동적으로 페이지가 추가되는
            페이지 네이션, 간단한 회원가입,로그인,데이터베이스로 부터 데이터를
            받기 등을 구현했습니다. 또한 Cloudynary Api를 통해 이미지를
            업로드하는 기능 또한 추가하였습니다. 마지막으로 웹팩을 이용해 모듈을
            번들링하고 heroku를 이용해 배포하였습니다.
          </p>
          <div>
            <span>Link: </span>
            <a href="https://dashboard.heroku.com/apps/js-review">
              https://js-review.herokuapp.com/
            </a>
          </div>
          <div>
            <span>Source code: </span>
            <a href="https://dashboard.heroku.com/apps/js-review">
              https://dashboard.heroku.com/apps/js-review
            </a>
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
