export const lineData = (data) => {
  const LineData = {
    labels: data.map(({ data }) => new Date(data).toLocaleDateString()),
    datasets: [
      {
        data: data.map((el) => el.nuovi_positivi),
        label: "Nuovi positivi",
        borderColor: "#ffffff",
        backgroundColor: "#f87171",
        fill: false,
        lineTension: 0,
      },
      {
        data: data.map((el) => el.variazione_totale_positivi),
        label: "Variazione",
        borderColor: "#06b6d4",
        backgroundColor: "#06b6d4",
        fill: false,
        lineTension: 0,
      },
    ],
  };
  return LineData;
};

export const barData = (data) => {
  const barChart = {
    labels: data.data?.map((el) => el.eta),
    datasets: [
      {
        data: data.data?.map((el) => el.m),
        label: "Uomini",
        borderColor: "#ffffff",
        backgroundColor: "#ffffff",
        fill: false,
        lineTension: 0.4,
        borderRadius: 10,
      },
      {
        data: data.data?.map((el) => el.f),
        label: "Donne",
        borderColor: "#b7f485",
        backgroundColor: "#b7f485",
        fill: false,
        lineTension: 0.4,
        borderRadius: 10,
      },
    ],
  };
  return barChart;
};

export const DoughnutData = (data) => {
  const dati = {
    labels: ["Ricoverati", "Terapia Intensiva"],
    datasets: [
      {
        data: [
          data.map((el) => el.ricoverati_con_sintomi),
          data.map((el) => el.terapia_intensiva),
        ],
        backgroundColor: ["#f9f871", "#00d1e5"],
        label: "Infected",
        borderColor: ["#f9f871", "#00d1e5"],
        fill: false,
        cutout: "70%",
      },
    ],
  };
  return dati;
};

export const pieDataCharts = (dataChart) => {
  const dati = {
    labels: ["Prima", "Seconda", "Terza", "Quarta"],
    datasets: [
      {
        data: [
          dataChart?.data.reduce((total, el) => {
            return total + el.d1;
          }, 0),
          dataChart?.data.reduce((total, el) => {
            return total + el.d2;
          }, 0),
          dataChart?.data.reduce((total, el) => {
            return total + el.db1;
          }, 0),
          dataChart?.data.reduce((total, el) => {
            return total + el.db2;
          }, 0),
        ],
        backgroundColor: ["#a63069", "#96afb8", "#b7f485", "#f9f871"],
        label: "Infected",
        borderColor: ["#a63069", "#96afb8", "#b7f485", "#f9f871"],
        fill: false,
        cutout: "70%",
      },
    ],
  };
  return dati;
};
