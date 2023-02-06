import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import styles from "./Charts.module.css";
import Title from "../../Atoms/Title/Title";

const ChartsVaccini = ({ dati, options }) => {
  return (
    <div className={styles.charts}>
      <div className={styles.chartsContent}>
        <Bar data={dati} options={options} />
      </div>
      <Title
        titleText="Anagrafica vaccini"
        infoText="Somministrazioni divise per genere e età"
      />
    </div>
  );
};

export default ChartsVaccini;
