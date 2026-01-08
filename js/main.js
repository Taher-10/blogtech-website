// Script principal de BlogTech
console.log("BlogTech chargé !");
// Fonction pour le menu mobile
function initMobileMenu() {
console.log ("Menu mobile initialisé");
}

// Gestion du formulaire de contact
document.addEventListener("DOMContentLoaded",function(){
    const contactform = document. getElementById("contact-form");
    if (contactForm) {
    contactForm.addEventListener("submit",function(e){
    e.preventDefault ();
    alert("Merci pour votre message !");
    contactForm.reset ();
    });}
});

