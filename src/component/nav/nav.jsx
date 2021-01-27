import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./nav.module.css";
import "./nav.css";

const Nav = (props) => {
  useEffect(() => {});
  return (
    <nav>
      <ul className={styles.container}>
        <li className={styles.list}>
          <Link to="/" className={styles.link}>
            Home
          </Link>
        </li>
        <li className={styles.list}>
          <Link to="/skills" className={styles.link}>
            Skills
          </Link>
        </li>
        <li className={styles.list}>
          <Link to="/projects" className={styles.link}>
            Projects
          </Link>
        </li>
        <li className={styles.list}>
          <Link to="/contact" className={styles.link}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
