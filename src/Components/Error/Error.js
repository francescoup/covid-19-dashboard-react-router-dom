import React from "react";
import styles from "./Error.module.css";

const Error = () => {
  return (
    <div className={styles.errorPage}>
      <h4>Error</h4>
      <div className={styles.errorSubTitle}>
        <p>Try again Later!</p>
      </div>
    </div>
  );
};

export default Error;
