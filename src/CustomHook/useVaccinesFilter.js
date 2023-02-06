import { FaChartPie } from "react-icons/fa";
import { BsFillBarChartFill } from "react-icons/bs";

export const useVacciniFilter = (item) => {
  const dosiModerna = item
    .filter((ele, i) => ele.forn === "Moderna")
    .reduce((total, el) => {
      return total + el.numero_dosi;
    }, 0);
  const dosiPfizer = item
    .filter((ele, i) => ele.forn === "Pfizer/BioNTech")
    .reduce((total, el) => {
      return total + el.numero_dosi;
    }, 0);
  const dosiAstrazeneca = item
    .filter((ele, i) => ele.forn === "Vaxzevria (AstraZeneca)")
    .reduce((total, el) => {
      return total + el.numero_dosi;
    }, 0);
  const totaleDosi = dosiModerna + dosiAstrazeneca + dosiPfizer;
  return [
    {
      data: dosiModerna,
      title: "Moderna",
      iconClass: "rose",
      icon: <FaChartPie />,
      subTitle: (function () {
        return `${((dosiModerna / totaleDosi) * 100).toFixed(
          1
        )}% sul totale delle dosi`;
      })(),
    },
    {
      data: dosiPfizer,
      title: "Pfizer",
      iconClass: "amber",
      icon: <FaChartPie />,
      subTitle: (function () {
        return `${((dosiPfizer / totaleDosi) * 100).toFixed(
          1
        )}% sul totale delle dosi`;
      })(),
    },
    {
      data: dosiAstrazeneca,
      title: "Astrazeneca",
      iconClass: "green",
      icon: <FaChartPie />,
      subTitle: (function () {
        return `${((dosiAstrazeneca / totaleDosi) * 100).toFixed(
          1
        )}% sul totale delle dosi`;
      })(),
    },
    {
      data: totaleDosi,
      title: "Totale",
      iconClass: "blue",
      icon: <BsFillBarChartFill />,
      subTitle: "Totale dosi Consegnate",
    },
  ];
};
