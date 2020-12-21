// var Age=0

// if (Age < 18) {
//    window.alert("Erreur! ce programme est reserve aux personnes majeures");
// } else if (Age= 18 & Age<=26) {
//    window.alert("Vous avez un Statut jeune");
// } else if (Age> 26 & Age<=65) {
//     window.alert("Vous avez un statut adulte");
// } else (Age> 65) 
//     window.alert("Erreur! ce programme sadresse aux personnes non retraitees");

function check(){
    var nbr;
    nbr = Number(document.getElementById("age").value);
    if(nbr < 18)
    {
       alert("Erreur! ce programme est reserve aux personnes majeures");
    }
    else if (nbr >= 18 && nbr <= 26)
    {
       alert("statut jeune");
    }
    else if (nbr >= 26 && nbr <= 65){
        alert('statut adulte');
    }
    else (age> 65) 
        alert("Erreur! ce programme sadresse aux personnes non retraitees");    
    }

