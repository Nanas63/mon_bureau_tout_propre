const surface = document.getElementById("surface");
const form = document.querySelector("form");
const montant = document.getElementById("montant");
const unX = document.getElementById("1x");
const deuxX = document.getElementById("2x");
const cinqX = document.getElementById("5x");
const vitres = document.getElementById("vitres");
const tva = document.getElementById("tva");
const total = document.getElementById("total");

console.log(unX.checked)

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    let prix = surface.value *1.5 

    if(unX.checked) {
        montant.textContent = prix

    } else if(deuxX.checked) {
        prix = prix *2
        montant.textContent = prix 
    } else if(cinqX.checked) {
        prix=prix *5
        montant.textContent = prix 
    }

    if(vitres.value === "oui") {
        montant.textContent = prix *1.10
    }
        tva.textContent = prix* 0.20
        total.textContent = prix *0.20 + prix
})