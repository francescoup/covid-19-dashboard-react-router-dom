export const useChartsCovid = (
  dataRegionali,
  filter,
  dataNazionali,
  latestNazionali
) => {
  const filtroRegioni = dataRegionali.filter(
    (ele) => ele.denominazione_regione === filter
  );
  const dataChart = !filter
    ? dataNazionali
    : filtroRegioni.filter((_, i) => filtroRegioni.length - i <= 7);
  const dataPieChart = !filter
    ? latestNazionali
    : filtroRegioni.filter((_, i) => filtroRegioni.length - i <= 1);
  return [dataChart, dataPieChart];
};
