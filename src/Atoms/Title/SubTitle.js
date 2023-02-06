import React from "react";
import styles from "./Title.module.css";

const subTitle = ({ title }) => {
  return (
    <div className={styles.subTitle}>
      <p className="block antialiased font-sans text-base leading-relaxed font-normal text-gray-800 dark:text-slate-400 ">
        {title}
      </p>
    </div>
  );
};

export default subTitle;
