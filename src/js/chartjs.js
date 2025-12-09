// Graphique avec ChartJS - Initialisation et configuration globale
Chart.defaults.color = "#888";
Chart.defaults.font.family = "'Courier New', Courier, monospace";

function createChart(canvasId, label, color, initialData) {
  const ctx = document.getElementById(canvasId).getContext("2d");
  const gradient = ctx.createLinearGradient(0, 0, 0, 200);
  gradient.addColorStop(0, color + "66");
  gradient.addColorStop(1, "rgba(0,0,0,0)");

  return new Chart(ctx, {
    type: "line",
    data: {
      labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
      datasets: [
        {
          label: label,
          data: initialData,
          borderColor: color,
          backgroundColor: gradient,
          borderWidth: 2,
          pointRadius: 2,
          fill: true,
          tension: 0.4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: { x: { display: false }, y: { display: false } },
      animation: { duration: 1000, easing: "linear" },
    },
  });
}

const popChart = createChart(
  "populationChart",
  "Pop",
  "#00ff00",
  [50, 52, 48, 55, 53, 58, 56, 60]
);
const meteoChart = createChart(
  "meteoChart",
  "Temp",
  "#00ffff",
  [20, 22, 21, 25, 24, 28, 26, 25]
);
const mortChart = createChart(
  "mortChart",
  "Morts",
  "#ff0000",
  [10, 12, 15, 20, 25, 30, 35, 40]
);
const pollutionChart = createChart(
  "pollutionChart",
  "CO2",
  "#aa00ff",
  [400, 405, 410, 415, 420, 425, 430, 435]
);

// Graphique avec ChartJS - Mise à jour dynamique des données en boucle
setInterval(() => {
  updateChart(popChart, "fluctuate");
  updateChart(meteoChart, "fluctuate");
  updateChart(mortChart, "increase");
  updateChart(pollutionChart, "increase");
}, 2000);

function updateChart(chart, mode) {
  const data = chart.data.datasets[0].data;
  const lastValue = data[data.length - 1];
  let newValue;

  if (mode === "increase") {
    newValue = lastValue + Math.random() * 5 + 1;
  } else {
    newValue = lastValue + (Math.random() * 10 - 5);
  }

  data.shift();
  data.push(newValue);
  chart.update("none");
}
