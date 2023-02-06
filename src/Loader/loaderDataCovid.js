import axios from "axios";

const endPointCovid = [
  "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json",
  "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json",
  "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json",
];

export const loaderDataCovid = async () => {
  const [dataNazionali, dataRegioni, dataParzialeRegioni] = await Promise.all(
    endPointCovid.map((el) => axios.get(el))
  );

  return {
    nazionali: dataNazionali.data.filter(
      (_, i) => dataNazionali.data.length - i <= 7
    ),
    latestNazionali: dataNazionali.data.filter(
      (_, i) => dataNazionali.data.length - i <= 1
    ),
    regionali: dataRegioni.data,
    latestRegionali: dataParzialeRegioni.data,
  };
};
