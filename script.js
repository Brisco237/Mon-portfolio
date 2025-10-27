// TypeIt js
document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#element", {
        speed:90,
        loop:true
    })
    .type("  Python(Django).")
    .pause(2000)
    .delete(null)
    .type("  Css(Bootstrap, Tailwind).")
    .pause(2000)
    .delete(null)
    .type("  Js(React, AlpineJs).")
    .pause(2000)
    .delete(null)
    .type("Créateur De Solution web.")
    .pause(2000)
    .delete(null)
    .type("Passionné D'innovation Et D'originalité.")
    .pause(2000)
    .delete(null)
    .go();
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
    window.scrollTo({top: 0, behavior:'smooth'});
}


// Initialise EmailJS
emailjs.init("Z-sibBF1XPC8DQpY-");
const form = document.getElementById("contact-form");
const spinner = document.getElementById("loading-spinner");

// Gestion du formulaire
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    // 🔵 1. Afficher le spinner
    spinner.style.display = "block";
    // 🔵 2. Désactiver le bouton d’envoi pour éviter les doubles clics
    const submitBtn = form.querySelector("button[type='submit']");
    submitBtn.disabled = true;
    submitBtn.textContent = "Envoi...";

    emailjs.sendForm("service_8yvk9cb", "template_a3m5izb", this)
        .then(() => {
            // ✅ Envoi réussi → cacher le spinner
            spinner.style.display = "none";
            submitBtn.disabled = false;
            submitBtn.textContent = "Envoyer";
            // ✅ Si l'envoi réussit : afficher le modal
            const successModal = new bootstrap.Modal(document.getElementById('successModal'));
            successModal.show();
            // Réinitialiser le formulaire
            this.reset();
        })
        .catch((error) => {
            console.error("Erreur :", error);
            spinner.style.display = "none";
            submitBtn.disabled = false;
            submitBtn.textContent = "Envoyer";
            alert("Une erreur est survenue, veuillez réessayer.");
        });
});

