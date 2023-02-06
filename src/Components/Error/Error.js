import React from "react";
import styles from "./Error.module.css";

const Error = () => {
  return (
    <div class={styles.errorPage}>
      <h4>Error</h4>
      <div class={styles.errorSubTitle}>
        <p>Try again Later!</p>
      </div>
    </div>
  );
};

export default Error;
