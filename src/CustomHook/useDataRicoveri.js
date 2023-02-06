export const useDataRicoveri = (filter, latestNazionali, dataRegionali) => {
  const dataRicoveri = {};
  const filtroRegioni = dataRegionali.filter(
    (ele) => ele.denominazione_regione === filter
  );
  const data = (
    !filter
      ? latestNazionali
      : filtroRegioni.filter((_, i) => filtroRegioni.length - i <= 1)
  ).map((el) => {
    return Object.assign(dataRicoveri, el);
  });
  return dataRicoveri;
};
