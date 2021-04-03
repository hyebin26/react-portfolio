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
            비디오 팝업, 햄버거 내비게이션, 썸네일 이미지 등을 구현하였습니다.
            PROPERTY에 Google Maps API를 사용해서 지도를 가져왔습니다.
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
            작성한 글, 댓글을 Mysql로 저장하여 관리하고 검색 부분은 검색을 하면
            서버로 검색 내용을 전달하고 전달받은 내용 중 DB에 있는 제목, 내용과
            일치하는 내용이 있으면 가져오는 것으로 구현했습니다. 또한 게시글이
            점점 많아지면 페이지가 자동적으로 추가되는 페이지네이션을
            추가했습니다. 그리고 회원과 로그인 또한 DB를 통해 관리합니다. 또한
            Cloudynary API를 통해 이미지를 업로드하는 기능또한 추가했습니다.
            서버는 Express를 사용해서 heroku에 배포하였고 어플리케이션 또한
            js파일을 웹팩을 이용해 번들링 한 후 heroku에 배포하였습니다.
          </p>
          <span>*앱이 작동하지 않을 시 새로고침을 눌러주세요!</span>
          <div>
            <span>Link: </span>
            <a href="https://review-vanillajs.herokuapp.com/">
              https://review-vanillajs.herokuapp.com/
            </a>
          </div>
          <div>
            <span>Source code: </span>
            <a href="https://github.com/hyebin26/vanillaJs_review">
              https://github.com/hyebin26/vanillaJs_review
            </a>
          </div>
          <div>
            <span>Server Source code: </span>
            <a href="https://github.com/hyebin-Hwang/server_reviewJS">
              https://github.com/hyebin-Hwang/server_reviewJS
            </a>
          </div>
        </div>
      </li>
      <li className={styles.list}>
        <div className={styles.imgContainer}>
          <a href="https://hyebin26.github.io/react-dietCalendar/">
            <img src="./image/calendar.png" alt="diet calendar" />
          </a>
        </div>
        <div className={styles.textContainer}>
          <h2>Diet Calendar</h2>
          <p>
            이 앱을 만든 이유는 자신의 키와 몸무게에 따른 적절한 칼로리의 목표를
            정하고 그 목표에 따른 결과를 기록하고 싶어서 만들었습니다. 날마다
            칼로리를 기록할 수 있으며, 목표의 칼로리보다 더 많이 먹으면 글씨를
            빨간색으로 표시하게 했습니다. 그리고 Login은 firebase API를 이용해
            구현하였으며 로그인을 할 시 입장 토큰을 저장하고 그 토큰을 이용해
            DB에서 전에 입력한 정보를 가져옵니다. 또한 Database는 firebase를
            통해 구현하였습니다.
          </p>
          <div>
            <span>Link: </span>
            <a href="https://hyebin26.github.io/react-dietCalendar/">
              https://hyebin26.github.io/react-dietCalendar/
            </a>
          </div>
          <div>
            <span>Source code: </span>
            <a href="https://github.com/hyebin26/react-dietCalendar">
              https://github.com/hyebin26/react-dietCalendar
            </a>
          </div>
        </div>
      </li>
    </ul>
  </section>
);

export default Projects;
