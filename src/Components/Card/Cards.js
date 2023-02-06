import React from "react";
import CountUp from "react-countup";
import SubTitle from "../../Atoms/Title/SubTitle";
import Icons from "../../Atoms/Icons";
import styles from "./Cards.module.css";

const Cards = ({ isTrue, data, title, iconClass, icon, subTitle }) => {
  return (
    <div className={styles.cards}>
      <Icons iconClassName={`${styles.cardsIcon} ${iconClass}`} icon={icon} />
      <div className={styles.cardsContent}>
        <h3>{title}</h3>
        <p>
          {!isTrue ? (
            <CountUp start={0} end={data} duration={1.75} separator="." />
          ) : (
            data
          )}
        </p>
      </div>
      <SubTitle title={subTitle ? subTitle : "Sintomi da Covid"} />
    </div>
  );
};

export default Cards;
