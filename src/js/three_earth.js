const earthContainer = document.getElementById("earth-container");

if (earthContainer) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    45,
    earthContainer.clientWidth / earthContainer.clientHeight,
    0.1,
    1000
  );
  camera.position.z = 4;

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(earthContainer.clientWidth, earthContainer.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  earthContainer.appendChild(renderer.domElement);

  const geometry = new THREE.SphereGeometry(1.5, 64, 64);
  const textureLoader = new THREE.TextureLoader();
  const earthTexture = textureLoader.load(
    "https://upload.wikimedia.org/wikipedia/commons/c/c3/Solarsystemscope_texture_2k_earth_daymap.jpg"
  );
  const material = new THREE.MeshPhongMaterial({
    map: earthTexture,
    shininess: 10,
  });
  const earth = new THREE.Mesh(geometry, material);
  scene.add(earth);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
  scene.add(ambientLight);
  const pointLight = new THREE.PointLight(0xffffff, 1.5);
  pointLight.position.set(10, 5, 10);
  scene.add(pointLight);

  function animate() {
    requestAnimationFrame(animate);
    earth.rotation.y += 0.002;
    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener("resize", () => {
    const width = earthContainer.clientWidth;
    const height = earthContainer.clientHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  });
  setTimeout(() => window.dispatchEvent(new Event("resize")), 100);
}
