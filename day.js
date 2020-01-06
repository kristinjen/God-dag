
const tekst = document.querySelector("h1");
const tid = document.querySelector("h2");
const dato = new Date();
const tidspunkt = dato.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});


if (dato.getHours() < 12) {
    tekst.innerHTML = "GOD MORGEN!"
    document.querySelector("img").src = "https://static.toiimg.com/photo/62457973.cms";

} else if (dato.getHours() < 18) {
    tekst.innerHTML = "GOD ETTERMIDDAG!";
    document.querySelector("img").src = "https://upload.wikimedia.org/wikipedia/commons/0/09/A_good_afternoon_%286933189752%29.jpg";

} else if (dato.getHours() >= 18) {
    tekst.innerHTML = "GOD KVELD!";
    document.querySelector("img").src = "https://assets.website-files.com/5a81979c5cad9c0001408e3b/5d2195ff41e3a985b47b7194_IMG_1459.jpg";

} else {
    tekst.innerHTML = "GOD vet ikke:(";
    document.querySelector("img").src = "https://i.pinimg.com/originals/f7/c6/73/f7c673d31f82cdd228fc6c3043014c41.jpg";
    
};

tid.innerHTML = `Klokka er ${tidspunkt}`



    
