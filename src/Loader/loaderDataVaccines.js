import axios from "axios";

const endPointVaccini = [
  "https://raw.githubusercontent.com/italia/covid19-opendata-vaccini/master/dati/consegne-vaccini-latest.json",
  "https://raw.githubusercontent.com/italia/covid19-opendata-vaccini/master/dati/vaccini-summary-latest.json",
  "https://raw.githubusercontent.com/italia/covid19-opendata-vaccini/master/dati/anagrafica-vaccini-summary-latest.json",
];

export const loaderDataVaccines = async () => {
  const [dataVaccini, dataDosiVaccini, dataAnagraficaVaccini] =
    await Promise.all(endPointVaccini.map((el) => axios.get(el)));

  return {
    vaccini: dataVaccini.data.data,
    dosiVaccini: dataDosiVaccini.data.data,
    anagraficaVaccini: dataAnagraficaVaccini.data,
    dataVaccini: function (item) {
      return dataVaccini.data.data
        .filter((ele, i) => ele.forn === item)
        .reduce((total, el) => {
          return total + el.numero_dosi;
        }, 0);
    },
  };
};
