/* src/js/three_earth.js */

const container = document.getElementById("earth-container");

if (container) {
  const scene = new THREE.Scene();

  // On initialise avec des valeurs temporaires
  const camera = new THREE.PerspectiveCamera(
    45,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );
  camera.position.z = 5; // On recule un peu la caméra

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);

  // SPHERE
  const geometry = new THREE.SphereGeometry(1.8, 64, 64); // 1.8 de rayon pour bien remplir
  const textureLoader = new THREE.TextureLoader();
  const earthTexture = textureLoader.load(
    "https://upload.wikimedia.org/wikipedia/commons/c/c3/Solarsystemscope_texture_2k_earth_daymap.jpg"
  );

  const material = new THREE.MeshPhongMaterial({
    map: earthTexture,
    shininess: 5,
  });

  const earth = new THREE.Mesh(geometry, material);
  scene.add(earth);

  // LUMIERES
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
  scene.add(ambientLight);
  const sunLight = new THREE.DirectionalLight(0xffffff, 1.5);
  sunLight.position.set(5, 3, 5);
  scene.add(sunLight);

  // ANIMATION
  function animate() {
    requestAnimationFrame(animate);
    earth.rotation.y += 0.0015;
    renderer.render(scene, camera);
  }
  animate();

  // --- CORRECTION CRUCIALE ---
  // Fonction qui force la mise à jour de la taille
  function onWindowResize() {
    if (!container) return;

    // On relit les dimensions réelles du div
    const width = container.offsetWidth;
    const height = container.offsetHeight;

    // On met à jour la caméra et le renderer
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }

  // On écoute le changement de taille de fenêtre
  window.addEventListener("resize", onWindowResize);

  // On appelle la fonction une fois après un petit délai pour être sûr que le CSS est chargé
  setTimeout(onWindowResize, 100);
}
