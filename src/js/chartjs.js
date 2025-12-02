/* src/js/chartjs.js */

// Configuration globale pour le style "Dashboard Sombre"
Chart.defaults.color = "#aaaaaa";
Chart.defaults.font.family = "'Courier New', Courier, monospace";

// Fonction utilitaire pour créer un graphique
function createDashboardChart(
  canvasId,
  label,
  dataPoints,
  colorUrl,
  type = "line"
) {
  const canvas = document.getElementById(canvasId);

  if (canvas) {
    const ctx = canvas.getContext("2d");

    // Création d'un dégradé pour le fond du graphique (effet futuriste)
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, colorUrl + "80"); // Couleur avec transparence
    gradient.addColorStop(1, "rgba(0,0,0,0)");

    new Chart(ctx, {
      type: type,
      data: {
        labels: ["LUN", "MAR", "MER", "JEU", "VEN", "SAM", "DIM"], // Labels fictifs
        datasets: [
          {
            label: label,
            data: dataPoints,
            borderColor: colorUrl, // Couleur de la ligne
            backgroundColor: gradient, // Couleur de remplissage (dégradé)
            borderWidth: 2,
            pointRadius: 0, // Pas de points visibles (style épuré)
            pointHoverRadius: 4,
            fill: true, // Remplir sous la courbe
            tension: 0.4, // Courbe lissée (Bezier)
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false, // S'adapte à la hauteur du conteneur div
        plugins: {
          legend: { display: false }, // Cache la légende pour gagner de la place
          tooltip: {
            mode: "index",
            intersect: false,
            backgroundColor: "rgba(0,0,0,0.8)",
            titleColor: colorUrl,
            bodyColor: "#fff",
            borderColor: colorUrl,
            borderWidth: 1,
          },
        },
        scales: {
          x: {
            display: false, // Cache l'axe X
            grid: { display: false },
          },
          y: {
            display: false, // Cache l'axe Y
            grid: { display: false },
            beginAtZero: false,
          },
        },
        animation: {
          duration: 2000,
          easing: "easeOutQuart",
        },
      },
    });
  }
}

// --- INITIALISATION DES GRAPHIQUES ---

// 1. POPULATION (Vert Fluorescent)
// Données stables puis chute drastique (thème destruction)
createDashboardChart(
  "chartPop",
  "Population (Mds)",
  [8.1, 8.2, 8.2, 8.1, 7.5, 6.0, 4.2],
  "#00ff41" // Vert Hacker
);

// 2. MÉTÉO / TEMPÉRATURE (Bleu Cyan)
// Données qui montent (Réchauffement)
createDashboardChart(
  "chartMeteo",
  "Température (°C)",
  [15, 16, 19, 22, 28, 35, 42],
  "#00f3ff" // Cyan Futuriste
);

// 3. MORTALITÉ (Rouge Sang)
// Inverse de la population, ça monte en flèche
createDashboardChart(
  "chartMort",
  "Mortalité (M/j)",
  [150, 160, 180, 500, 1200, 3000, 8000],
  "#ff003c" // Rouge Néon
);

// 4. POLLUTION (Violet/Gris toxique)
// Constant et élevé
createDashboardChart(
  "chartPollution",
  "CO2 (ppm)",
  [420, 425, 430, 440, 450, 480, 520],
  "#bd00ff" // Violet Toxique
);
