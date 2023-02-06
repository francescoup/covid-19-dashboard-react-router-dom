import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import {
  MdOutlineCoronavirus,
  MdOutlineLocalHospital,
  MdOutlineSick,
} from "react-icons/md";
import Title from "../../Atoms/Title/Title";
import styles from "./MiniCard.module.css";
const MiniCard = ({
  data: {
    data,
    totale_positivi,
    isolamento_domiciliare,
    ricoverati_con_sintomi,
    terapia_intensiva,
  },
}) => {
  return (
    <div className={styles.miniCard}>
      <Title
        titleText="Andamento ricoveri"
        infoText={`Situazione aggiornata al ${new Date(
          data
        ).toLocaleDateString()}`}
      />

      <div className={styles.miniCardContent}>
        <div className={styles.miniCardItem}>
          <div>
            <MdOutlineCoronavirus className={styles.miniCardIcon} />
          </div>
          <div>
            <h4>Positivi al Coronavirus</h4>
            <p>{totale_positivi}</p>
          </div>
        </div>
        <div className={styles.miniCardItem}>
          <div>
            <AiOutlineHome
              className={`${styles.miniCardIcon} ${styles.blue}`}
            />
          </div>
          <div>
            <h4>Isolamento domiciliare</h4>
            <p>{isolamento_domiciliare}</p>
          </div>
        </div>
        <div className={styles.miniCardItem}>
          <div>
            <MdOutlineSick
              className={`${styles.miniCardIcon} ${styles.yellow}`}
            />
          </div>
          <div>
            <h4>Ricoverati con sintomi</h4>
            <p>{ricoverati_con_sintomi}</p>
          </div>
        </div>
        <div className={styles.miniCardItem}>
          <div>
            <MdOutlineLocalHospital
              className={`${styles.miniCardIcon} ${styles.red}`}
            />
          </div>
          <div>
            <h4>Ricoveri in terapia intensiva</h4>
            <p>{terapia_intensiva}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniCard;
