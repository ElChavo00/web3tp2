const defaultFacts = [
  "La Terre n'est pas une sphère parfaite.",
  "Une journée dure 23h 56min et 4sec.",
  "Le noyau est aussi chaud que le Soleil.",
  "On ne connaît que 5% des océans.",
  "La gravité change selon l'endroit.",
];

let factIndex = 0;
const factElement = document.getElementById("funFactText");

if (factElement) {
  setInterval(() => {
    anime({
      targets: factElement,
      opacity: [1, 0],
      translateY: [0, -10],
      easing: "easeInExpo",
      duration: 500,
      complete: function () {
        const lang = window.currentLanguage || "fr";
        const list = window.funFactsData
          ? window.funFactsData[lang]
          : defaultFacts;

        factIndex = (factIndex + 1) % list.length;
        factElement.innerText = list[factIndex];

        anime({
          targets: factElement,
          opacity: [0, 1],
          translateY: [10, 0],
          easing: "easeOutExpo",
          duration: 500,
        });
      },
    });
  }, 7000);
}

const btn = document.querySelector(".red-button");

if (btn) {
  btn.addEventListener("mouseenter", () => {
    anime({ targets: btn, scale: 1.1, duration: 400 });
  });
  btn.addEventListener("mouseleave", () => {
    anime({ targets: btn, scale: 1, duration: 400 });
  });
}

const greetings = [
  "BONJOUR",
  "HELLO",
  "HOLA",
  "HALLO",
  "CIAO",
  "Preu-vit",
  "KONNICHIWA",
  "NI HAO",
  "OLÁ",
  "NAMASTE",
  "PRIVET",
];

const greetingElement = document.getElementById("greetingText");
let greetingIndex = 0;

if (greetingElement) {
  function playGreetingLoop() {
    let tl = anime.timeline({
      easing: "easeOutExpo",
      duration: 500,
    });

    tl.add({
      targets: greetingElement,
      opacity: [0, 1],
      translateY: [-10, 0],
    }).add({
      targets: greetingElement,
      opacity: [1, 0],
      translateY: [0, 10],
      delay: 2000,
      complete: function () {
        greetingIndex = (greetingIndex + 1) % greetings.length;
        greetingElement.innerText = greetings[greetingIndex];
        playGreetingLoop();
      },
    });
  }
  playGreetingLoop();
}
