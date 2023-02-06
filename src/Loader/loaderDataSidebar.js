import axios from "axios";

export const loaderDataSidebar = async () => {
  const dataRegioni = await axios.get(
    `https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json`
  );

  return {
    listaRegioni: Array.from(
      new Set(dataRegioni.data.map((el) => el.denominazione_regione))
    ),
  };
};
