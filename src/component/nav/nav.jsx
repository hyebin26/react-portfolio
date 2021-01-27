import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./nav.module.css";
import "./nav.css";

const Nav = (props) => {
  const linkRef = useRef();
  let location = useLocation();

  const clickLink = (e) => {
    const active = document.querySelector(".active");
    if (active == null) {
      e.target.classList.add("active");
    } else {
      active.classList.remove("active");
      e.target.classList.add("active");
    }
  };
  useEffect(() => {
    
  });
  return (
    <nav>
      <ul className={styles.container}>
        <li className={styles.list}>
          <Link
            to="/"
            className={styles.link}
            onClick={clickLink}
            ref={linkRef}
          >
            Home
          </Link>
        </li>
        <li className={styles.list}>
          <Link
            to="/skills"
            className={styles.link}
            onClick={clickLink}
            ref={linkRef}
          >
            Skills
          </Link>
        </li>
        <li className={styles.list}>
          <Link
            to="/projects"
            className={styles.link}
            onClick={clickLink}
            ref={linkRef}
          >
            Projects
          </Link>
        </li>
        <li className={styles.list}>
          <Link
            to="/contact"
            className={styles.link}
            onClick={clickLink}
            ref={linkRef}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
