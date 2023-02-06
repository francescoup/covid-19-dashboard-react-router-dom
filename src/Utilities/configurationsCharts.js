export const lineConfiguration = {
  scales: {
    x: {
      grid: {
        borderDash: [8, 4],
      },
      ticks: {
        color: "#f1f5f9",
      },
    },
    y: {
      grid: {
        borderDash: [8, 4],
      },
      ticks: {
        color: "#ffffff",
      },
      beginAtZero: true,
    },
  },
  maintainAspectRatio: false,
  plugins: {
    tooltip: {
      usePointStyle: true,
      titleColor: "#6b7280",
      backgroundColor: "white",
      bodyColor: "#6b7280",
      borderColor: "#f8fafc",
      borderWidth: 1,
      padding: 16,
    },
    title: {
      display: false,
      align: "start",
      color: "#f1f5f9",
      padding: {
        top: 6,
        bottom: 20,
      },
      font: {
        size: 16,
        family: "roboto",
        weight: 400,
      },
      text: "Nuovi Casi test",
    },
    legend: {
      display: false,
      position: "bottom",
      align: "start",
      fontColor: "white",
      labels: {
        color: "#fff",
        usePointStyle: true,
        boxWidth: 15,
      },
    },
  },
};

export const barChart = {
  scales: {
    x: {
      grid: {
        borderDash: [8, 4],
      },
      ticks: {
        color: "#f1f5f9",
      },
    },
    y: {
      grid: {
        borderDash: [8, 4],
      },
      ticks: {
        color: "#f1f5f9",
      },

      beginAtZero: true,
    },
  },
  maintainAspectRatio: false,
  plugins: {
    tooltip: {
      usePointStyle: true,
      titleColor: "#6b7280",
      backgroundColor: "white",
      bodyColor: "#6b7280",
      borderColor: "#f8fafc",
      borderWidth: 1,
      padding: 16,
    },
    title: {
      display: false,
      align: "start",
      color: "#f1f5f9",
      padding: {
        top: 6,
        bottom: 20,
      },
      font: {
        size: 16,
        family: "Roboto",
        weight: 400,
      },
      text: "Anagrafica Vaccini",
    },
    legend: {
      display: false,
      position: "bottom",
      align: "start",
      fontColor: "white",
      labels: {
        color: "white",
        usePointStyle: true,
        boxWidth: 15,
      },
    },
  },
};

export const pieConfiguration = {
  maintainAspectRatio: false,
  plugins: {
    responsive: true,
    tooltip: {
      usePointStyle: true,
      titleColor: "#6b7280",
      backgroundColor: "white",
      bodyColor: "#6b7280",
      borderColor: "#f8fafc",
      borderWidth: 1,
      padding: 16,
    },
    title: {
      display: false,
      align: "start",
      text: "Numero di Somministrazioni",
      color: "white",
      padding: {
        top: 6,
        bottom: 10,
      },
      font: {
        size: 16,
        family: "Roboto",
        weight: 400,
      },
    },
    legend: {
      display: false,
      position: "bottom",
      align: "start",

      labels: {
        border: "rgb(255, 99, 132)",
        color: "white",
        usePointStyle: true,
        boxWidth: 15,
      },
    },
  },
};
