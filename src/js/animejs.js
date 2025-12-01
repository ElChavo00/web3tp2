// Animation du titre
anime({
  targets: "#main-title",
  translateY: [-20, 0],
  opacity: [0, 1],
  duration: 2000,
  easing: "easeOutExpo",
});

// Interactions Bouton
const btn = document.getElementById("actionBtn");

if (btn) {
  btn.addEventListener("mouseenter", () => {
    anime({
      targets: btn,
      scale: 1.1,
      duration: 500,
    });
  });

  btn.addEventListener("mouseleave", () => {
    anime({
      targets: btn,
      scale: 1,
      duration: 500,
    });
  });
}
