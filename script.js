document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#element", {}).go();
});

gsap.registerPlugin(ScrollTrigger);

gsap.to("#aboutme", {
    scrollTrigger: {
      trigger: "#aboutme-photo",
      start: "right 80%", // déclenche quand la box arrive à 80% de la fenêtre
      toggleActions: "play none none reverse"
    },
    opacity: 1,
    y: -50,
    duration: 3
});
gsap.to("#home-section", {
    scrollTrigger: {
      trigger: "#home-section",
      start: "bottom 50%", // déclenche quand la box arrive à 80% de la fenêtre
      toggleActions: "play none none reverse"
    },
    opacity: 1,
    y: -50,
    duration: 3
});