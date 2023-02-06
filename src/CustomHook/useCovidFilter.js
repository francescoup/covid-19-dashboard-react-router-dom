import { FaVirus, FaUserPlus, FaUserMinus } from "react-icons/fa";
import { BsFillBarChartFill } from "react-icons/bs";

export const useCovidFilter = (dataNazionali, dataRegionali, filtro) => {
  const data = (
    filtro
      ? dataRegionali.filter(
          (ele) =>
            ele.denominazione_regione.toLowerCase() === filtro.toLowerCase()
        )
      : dataNazionali
  ).flatMap((el) => {
    return [
      {
        data: el.deceduti,
        title: "Deceduti",
        iconClass: "rose",
        icon: <FaVirus />,
        subTitle: (function () {
          return `${((el.deceduti / el.totale_casi) * 100).toFixed(
            1
          )}% sul totale contagi`;
        })(),
      },
      {
        data: el.dimessi_guariti,
        title: "Guariti",
        iconClass: "green",
        icon: <FaUserMinus />,
        subTitle: (function () {
          return `${((el.dimessi_guariti / el.totale_casi) * 100).toFixed(
            1
          )}% sul totale contagi`;
        })(),
      },
      {
        data: el.nuovi_positivi,
        title: "Nuovi casi",
        iconClass: "amber",
        icon: <FaUserPlus />,
        subTitle: (function () {
          return `Aggiornato al ${new Date(el.data).toLocaleDateString()}`;
        })(),
      },
      {
        data: el.totale_casi,
        title: "Totale Casi",
        iconClass: "blue",
        icon: <BsFillBarChartFill />,
        subTitle: `Totale casi ${
          el.denominazione_regione ? el.denominazione_regione : "Italia"
        }`,
      },
    ];
  });
  return data;
};
