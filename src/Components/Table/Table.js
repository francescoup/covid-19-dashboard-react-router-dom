import React from "react";
import styles from "./Table.module.css";
import Title from "../../Atoms/Title/Title";
import { Tables } from "../../Atoms/Tables";

const Table = ({ data, isTrue }) => {
  return (
    <div className={styles.table}>
      <Title
        titleText="Dati regionali"
        infoText={
          isTrue
            ? "Andamento regionale su deceduti e guariti"
            : "Andamento regionale dosi consegnate e somministrate"
        }
      />
      <div className={styles.tableContainer}>
        <table className={styles.tableContent}>
          <thead>
            <tr>
              <th>Regione</th>
              <th>{isTrue ? "Deceduti" : "Consegnate"}</th>
              <th>{isTrue ? "Guariti" : "Somministrate"}</th>
              <th>{isTrue ? "Totale casi" : "Percentuale"}</th>
            </tr>
          </thead>
          <tbody>
            <Tables data={data} isTrue={isTrue} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
