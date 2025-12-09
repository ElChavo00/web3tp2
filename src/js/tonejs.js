const activeBtn = document.querySelector(".red-button");

// Tone.js - Lance la lecture audio
const player = new Tone.Player({
  url: "./assets/audio/music.mp3",
  autostart: false,
}).toDestination();

if (activeBtn) {
  activeBtn.addEventListener("click", async () => {
    // Démarrage audio au clic
    await Tone.start();
    if (player.loaded) {
      player.start();
    } else {
      Tone.loaded().then(() => {
        player.start();
      });
    }
  });
}
