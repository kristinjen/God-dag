
// henter html-elementene heading 1, heading 2 og image
const tekst = document.querySelector("h1");
const tid = document.querySelector("h2");
const bilde = document.querySelector("img")

// oppretter et dato-objekt som har mulighet til å sjekke klokka
const dato = new Date();
const tidspunkt = dato.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

// sjekker hva klokker er og endrer hilsen og bilde basert på klokkeslettet
if (dato.getHours() < 12) {
    tekst.innerHTML = "GOD MORGEN!"
    bilde.src = "https://static.toiimg.com/photo/62457973.cms";

} else if (dato.getHours() < 18) {
    tekst.innerHTML = "GOD ETTERMIDDAG!";
    bilde.src = "https://upload.wikimedia.org/wikipedia/commons/0/09/A_good_afternoon_%286933189752%29.jpg";

} else if (dato.getHours() >= 18) {
    tekst.innerHTML = "GOD KVELD!";
    bilde.src = "https://assets.website-files.com/5a81979c5cad9c0001408e3b/5d2195ff41e3a985b47b7194_IMG_1459.jpg";

} else {
    tekst.innerHTML = "GOD vet ikke:(";
    bilde.src = "https://i.pinimg.com/originals/f7/c6/73/f7c673d31f82cdd228fc6c3043014c41.jpg";
    
};

// setter header 2 til å si hva klokka er
tid.innerHTML = `Klokka er ${tidspunkt}`



    
