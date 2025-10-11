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

// Initialisation EmailJs
(function() {
  emailjs.init("Z-sibBF1XPC8DQpY-");
})();


// Gestion de l'envoi du formulaire
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    emailjs.sendForm('service_8yvk9cb', 'template_a3m5izb', this)
        .then(function () {
            document.getElementById('response-msg').innerText = "✅ Message envoyé avec succès !";
        }, function (error) {
            document.getElementById('response-msg').innerText = "❌ Une erreur s’est produite, réessaie.";
            console.error('Erreur EmailJS:', error);
        });
});

