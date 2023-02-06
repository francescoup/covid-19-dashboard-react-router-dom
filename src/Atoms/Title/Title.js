import React from "react";
import styles from "./Title.module.css";

const Title = ({ titleText, infoText }) => {
  return (
    <div className={styles.title}>
      <h3>{titleText}</h3>
      <p>{infoText}</p>
    </div>
  );
};

export default Title;
