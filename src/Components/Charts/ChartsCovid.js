import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import styles from "./Charts.module.css";
import Title from "../../Atoms/Title/Title";

const ChartsCovid = ({ dati, options }) => {
  return (
    <div className={styles.charts}>
      <div className={styles.chartsContent}>
        <Line data={dati} options={options} />
      </div>
      <Title
        titleText="Dati sui nuovi contagi"
        infoText="Rapporto fra i nuovi contagi e variazione al giorno precedente"
      />
    </div>
  );
};

export default ChartsCovid;
