import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import styles from "./btn.module.css";

const Btn = ({ value }) => {
  const history = useHistory();
  const btnClick = () => {
    history.push("/contact");
  };
  return (
    <button className={styles.btn} onClick={btnClick}>
      {value}
    </button>
  );
};

export default Btn;
