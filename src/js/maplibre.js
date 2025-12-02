/* src/js/maplibre.js */

const mapContainer = document.getElementById("map-container");

if (mapContainer) {
  // 1. Initialisation de la carte
  const map = new maplibregl.Map({
    container: "map-container",
    // Style sombre (Dark)
    style:
      "https://api.maptiler.com/maps/ch-swisstopo-lbm-dark/style.json?key=28Qpi7R8ZQvfaov4hYoX",
    center: [2.3522, 48.8566], // Départ Paris
    zoom: 2,
    attributionControl: false,
    interactive: false, // Désactive la souris pour éviter de casser l'animation auto
  });

  // 2. Fonction qui fait voyager la carte
  function tourTheWorld() {
    // Générer des coordonnées aléatoires
    const lon = Math.random() * 360 - 180;
    const lat = Math.random() * 120 - 60; // On évite les pôles extrêmes

    // Paramètres de vol
    map.flyTo({
      center: [lon, lat],
      zoom: Math.random() * (5 - 3) + 3, // Zoom varié entre 3 et 5
      speed: 0.6, // Vitesse plus lente pour un effet "cinématique"
      curve: 1.5, // Courbe du trajet
      pitch: 40, // Inclinaison 3D pour faire plus joli
      essential: true,
    });

    // ⚠️ L'ASTUCE EST ICI :
    // Quand le mouvement est fini ('moveend'), on attend 2sec et on recommence
    map.once("moveend", () => {
      setTimeout(() => {
        tourTheWorld(); // Appel récursif (boucle infinie)
      }, 2000); // 2000ms = 2 secondes de pause sur le pays
    });
  }

  // 3. Démarrage automatique une fois la carte chargée
  map.on("load", () => {
    tourTheWorld();
  });

  // 4. Le bouton "JUMP" permet de forcer un saut immédiat sans attendre
  const btn = document.getElementById("randomMapBtn");
  if (btn) {
    btn.addEventListener("click", () => {
      // On relance la fonction immédiatement (ça annulera le mouvement en cours)
      tourTheWorld();
    });
  }
}
