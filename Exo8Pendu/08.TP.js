
var motsListe = ['pendu']


// /Choix aléatoire dans la liste
var motCache = motsListe[Math.floor(Math.random() * motsListe.length)];

//On transforme le mot en tableau
var tabMotCache = motCache.split('')

//tableau où seront affichées les lettres trouvées
var lettreTrouvee = [];

//Nombre de coup possible
var vies = 10

//construction du tableau en fonction du mot choisi aléatoirement
var buildArray = () => {

    for (var i = 1; i <= motCache.length; i++) {
        lettreTrouvee.push(' _ ');
    }
    //affiche le tableau avec les lettres à trouver au début du jeu   
    console.log(lettreTrouvee);
}

//Fonction principale du jeu :
var pendu = (valeur) => {

    // trouve est le booleen qui valide si la lettre est dans le mot
    trouve = false;

    // playAgain est le booleen qui valide s'il reste des lettres à trouver
    playAgain = false;

    for (var i = 0; i <= tabMotCache.length; i++) {

       // si la lettre se trouve dans le mot
        if (tabMotCache[i] == valeur.trim()) {

          // on place la lettre dans le tableau au bon endroit à la place de l'underscore
            lettreTrouvee[i] = valeur.trim();
            trouve = true;
        } 
        if (lettreTrouvee[i] == ' _ ') {
        // si il reste encore des underscores, le mot n'est pas complet 
        
        // on passe playAgain à true
            playAgain = true;
        }

    } if (trouve) {

        // on prévient le joueur qu'il a trouvé et on lui affiche le tableau
        // avec les lettres qu'il a trouvé
        console.log('trouvé !');
        console.log(lettreTrouvee);
        document.getElementById("reponse").innerHTML = lettreTrouvee.join('');
        document.getElementById("alert").innerHTML = 'Super Continuez !';
        document.getElementById('valeur').value = "";

        // il n'y a plus d'underscores dans le tableau, c'est que le mot a été trouvé    
        if (!playAgain) {

            console.log('gagné !');
            document.getElementById("alert").innerHTML = 'Bravo ! gagné !';

            setTimeout(function () {
            window.location.reload();
            }, 2000);
        }
    }

    else {

       // sinon on retire une vie au joueur
        vies--;

        console.log('Dommage ! Continuez quand meme');
        console.log('il te reste : ' + vies + ' vies');
        console.log(lettreTrouvee);
        document.getElementById("reponse").innerHTML = lettreTrouvee.join('');
        document.getElementById("alert").innerHTML = 'Dommage ! Continuez quand meme il te reste ' + vies + ' vies';
        document.getElementById('valeur').value = "";

    }

    if (vies <= 0) {
    // si le joueur n'a plus de vies, il a perdu, on lui montre le mot qu'il fallait trouver

        console.log('c\'est perdu !');
        console.log('Il fallait trouver : ');
        console.log(tabMotCache);
        document.getElementById("reponse").innerHTML = ' Perdu ! '  // + tabMotCache.join('');
        document.getElementById("alert").innerHTML = 'Le mot etait PENDU'; // Il fallait trouver :
       
       
        setTimeout(function () {
            window.location.reload();
        }, 2000);
    }
}


buildArray();
window.addEventListener("load", function () { document.getElementById("reponse").innerHTML = lettreTrouvee.join(''); });

document.getElementById('valider').addEventListener('click', function () {

    var value = document.getElementById('valeur').value;
    pendu(value);

});