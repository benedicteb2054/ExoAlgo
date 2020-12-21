
function check(){
// Creation d'une variable qui s'apelle "messageSortie"
let messageSortie;
messageSortie = Number(document.getElementById("age").value);
// console.log
// Creer  une boucle do while 
do{


    // La methode prompt va attendre une reponse de l'utilisateur qui va initialiser la variable "message"
    // let message = prompt('entrer Age')

// Avec le if else je cree une structure de controle qui va comparer la variable selon des resulats que je détermine
    if(messageSortie < 18){
        alert('moins de 18 ans');
    } else if(messageSortie >= 18 && messageSortie <= 26){
        alert('statut Jeune');
    } else if(messageSortie >= 27 && messageSortie <= 65){
        alert('statut adulte');
    } else if(age> 65){
        alert('plus de 65 ans Programme réservé aux personnes non-retraitées');
    }{

    messageSortie = prompt('dois-je continué mon programme ? Oui ou non ');

    }

// Tant que la variable "messageSortie" contient oui je continue la boucle
} while(messageSortie === 'oui')
}
