import React from "react";
import { Link } from "react-router-dom";
import styles from "./nav.module.css";
import classNames from "classnames";

const Nav = (props) => (
  <nav>
    <ul className={styles.container}>
      <li className={styles.list}>
        <Link to="/" className={classNames(styles.link, styles.active)}>
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

export default Nav;
