function createChart(canvasId, label, data, color) {
  const canvas = document.getElementById(canvasId);
  if (canvas) {
    const ctx = canvas.getContext("2d");
    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [
          {
            label: label,
            data: data,
            borderColor: color,
            backgroundColor: color,
            borderWidth: 2,
            pointRadius: 0,
            tension: 0.4,
          },
        ],
      },
      options: {
        plugins: { legend: { display: false } },
        scales: {
          x: { display: false },
          y: { display: false, min: 0 },
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }
}

createChart("chartPop", "Population", [10, 20, 15, 30, 40], "#00ff00");
createChart("chartMeteo", "Température", [12, 19, 3, 5, 2], "#00ffff");
createChart("chartMort", "Mortalité", [50, 40, 60, 70, 90], "#ff0000");
createChart("chartPollution", "CO2", [20, 35, 40, 60, 80], "#888888");
