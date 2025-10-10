document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#element", {}).go();
});

gsap.registerPlugin(ScrollTrigger);

gsap.to('', {
    scrollTrigger: {
      trigger: "",
      start: "right 80%", // déclenche quand la box arrive à 80% de la fenêtre
      toggleActions: "play none none reverse"
    },
    opacity: 1,
    y: -50,
    duration: 3
});
