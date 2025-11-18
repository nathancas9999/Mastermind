function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let nombre1 = getRandomInt(10);
let nombre2 = getRandomInt(10);
let nombre3 = getRandomInt(10);
let nombre4 = getRandomInt(10);
let nombre5 = getRandomInt(10);

const secret = [nombre1, nombre2, nombre3, nombre4, nombre5];

let htmlnombre1 = document.getElementById("nombre1");
let htmlnombre2 = document.getElementById("nombre2");
let htmlnombre3 = document.getElementById("nombre3");
let htmlnombre4 = document.getElementById("nombre4");
let htmlnombre5 = document.getElementById("nombre5");

console.log(secret);


let input = document.getElementById("textR");
let bouton = document.getElementById("boutonVerifier");

let divHistorique = document.getElementById("historique");

bouton.addEventListener("click", function() {
 let propoTexte = input.value;

 if (propoTexte.length !== 5) {
   alert("Vous devez entrer 5 chiffres");
   return;
 }

 let bienP = 0;
 let malP = 0;
//tableau
 let secretU = [false, false, false, false, false];
 let propoU = [false, false, false, false, false];

//chiffre bien placé
 for (let i=0; i < 5; i++) {
    let numPropo = parseInt(propoTexte[i]); 

    if (numPropo === secret[i]){
        bienP ++;
        secretU[i] = true;
        propoU[i] = true;
    }
 }

//chiffre mal placé
 for (let i=0; i < 5; i++) {
    if (propoU[i] === true){
        continue;
    }

    let numPropo = parseInt(propoTexte[i]);

    for (let j = 0; j < 5; j++) {
        if(secretU[j] === true){
            continue;
        }

        if (numPropo === secret[j]) {
            malP++;
            secretU[j] = true;
            break;
        }
    }
 }

 let pResultat = document.createElement("p");
 pResultat.textContent = `Proposition: ${propoTexte} |  Bien placés: ${bienP} |  Mal placés: ${malP}`;

 divHistorique.appendChild(pResultat);
 
 

 if (bienP === 5) {
   alert(
    "Bravo vous avez trouvé ! Le code était " + 
    secret.join(""));
   
   htmlnombre1.textContent = nombre1;
   htmlnombre2.textContent = nombre2;
   htmlnombre3.textContent = nombre3;
   htmlnombre4.textContent = nombre4;
   htmlnombre5.textContent = nombre5;
 }
 

 input.value = "";

});