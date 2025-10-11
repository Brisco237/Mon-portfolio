document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#element", {}).go();
});
// Bouton retour en haut
let btnTop = document.getElementById("btnTop");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }
}
function topFunction() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}