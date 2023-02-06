import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p>
        &copy;{year} Dashboard Covid realizzata da Francesco Mangione con React,
        il sito ha uno scopo solamente illustrativo.
      </p>
    </footer>
  );
};

export default Footer;
