import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import styles from "./PieCharts.module.css";
import Title from "../../Atoms/Title/Title";

const PieChartsVaccini = ({ data, options, isTrue }) => {
  return (
    <div className={styles.pieCharts}>
      <div className={styles.pieChartsContent}>
        <Doughnut data={data} options={options} />
      </div>
      {isTrue ? (
        <Title
          titleText="Dati sui ricoveri"
          infoText="Terapia intensiva e ospedalizzazione"
        />
      ) : (
        <Title
          titleText="Dosi somministrate"
          infoText="Rapporto fra le dosi somministrate"
        />
      )}
    </div>
  );
};

export default PieChartsVaccini;
