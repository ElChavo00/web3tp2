const mapContainer = document.getElementById("map-container");

if (mapContainer) {
  // Carte géographique - Initialisation de la carte MapLibre
  const map = new maplibregl.Map({
    container: "map-container",
    style: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
    center: [2.35, 48.85],
    zoom: 1,
    attributionControl: false,
    interactive: false,
  });

  const countries = [
    { name: "Canada", lon: -106.3468, lat: 56.1304, zoom: 2.5 },
    { name: "Venezuela", lon: -66.5897, lat: 6.4238, zoom: 4 },
    { name: "Guatemala", lon: -90.2308, lat: 15.7835, zoom: 5 },
    { name: "Espagne", lon: -3.7492, lat: 40.4637, zoom: 4.5 },
    { name: "Japon", lon: 138.2529, lat: 36.2048, zoom: 4 },
    { name: "Suisse", lon: 8.2275, lat: 46.8182, zoom: 6 },
  ];

  // Carte géographique - Animation de la caméra pour voyager entre les pays
  function tourTheWorld() {
    const randomCountry =
      countries[Math.floor(Math.random() * countries.length)];
    map.flyTo({
      center: [randomCountry.lon, randomCountry.lat],
      zoom: randomCountry.zoom,
      speed: 0.6,
      curve: 1.2,
      pitch: 40,
      essential: true,
    });

    map.once("moveend", () => {
      setTimeout(tourTheWorld, 2500);
    });
  }

  map.on("load", tourTheWorld);
  document
    .getElementById("randomMapBtn")
    ?.addEventListener("click", tourTheWorld);
}
