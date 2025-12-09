document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.querySelector(".magic-ball-canvas");

  if (canvas && typeof Zdog !== "undefined") {
    console.log("ZDog: Démarrage de la Fusée");

    let illo = new Zdog.Illustration({
      element: canvas,
      zoom: 1.2,
      dragRotate: true,
      rotate: { x: -Zdog.TAU / 8 },
    });

    let rocket = new Zdog.Anchor({
      addTo: illo,
      rotate: { x: -Zdog.TAU / 4 },
    });

    const bodyColor = "#e6e6e6";
    const accentColor = "#d9534f";
    const engineColor = "#333";

    new Zdog.Cylinder({
      addTo: rocket,
      diameter: 25,
      length: 60,
      stroke: false,
      color: bodyColor,
      backface: engineColor,
    });

    new Zdog.Cone({
      addTo: rocket,
      diameter: 25,
      length: 25,
      stroke: false,
      translate: { z: 30 + 12.5 },
      color: accentColor,
    });

    new Zdog.Cone({
      addTo: rocket,
      diameter: 15,
      length: 10,
      stroke: false,
      translate: { z: -30 - 5 },
      rotate: { y: Zdog.TAU / 2 },
      color: engineColor,
    });

    const finDefaults = {
      addTo: rocket,
      width: 15,
      height: 25,
      cornerRadius: 5,
      stroke: 2,
      fill: true,
      color: accentColor,
      translate: { x: 18, z: -20 },
      rotate: { x: Zdog.TAU / 4 },
    };

    new Zdog.RoundedRect({ ...finDefaults });

    new Zdog.RoundedRect({
      ...finDefaults,
      translate: { x: -18, z: -20 },
      rotate: { x: Zdog.TAU / 4, z: Zdog.TAU / 2 },
    });

    new Zdog.RoundedRect({
      ...finDefaults,
      translate: { y: 18, z: -20 },
      rotate: { x: Zdog.TAU / 4, z: -Zdog.TAU / 4 },
    });

    new Zdog.RoundedRect({
      ...finDefaults,
      translate: { y: -18, z: -20 },
      rotate: { x: Zdog.TAU / 4, z: Zdog.TAU / 4 },
    });

    function animate() {
      rocket.rotate.z += 0.005;

      illo.updateRenderGraph();
      requestAnimationFrame(animate);
    }
    animate();
  } else {
    console.warn("ZDog: Impossible de trouver le canvas ou la librairie.");
  }
});
