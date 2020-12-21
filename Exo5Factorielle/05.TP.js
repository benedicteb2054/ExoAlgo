let messageSortie;

do{
    let x = prompt('entrer une valeur');
    let resultat = 1;

    for(let i = 1; i < x; i++){
        resultat = resultat *(i+1);
    }


    window.alert(resultat);
    messageSortie = prompt('Voulez vous continuer? o / n');
}while(messageSortie == 'o' || messageSortie == 'oui')