// Somme entier

function somme(){
    var nbr1, nbr2, som;
    nbr1 = Number(document.getElementById("nbr1").value);
    nbr2 = Number(document.getElementById("nbr2").value);
    sum = nbr1 + nbr2;
    document.getElementById("som").value = som;
}

// Montee puissance
function calc() {
    var X=+document.getElementById('nombre1').value;
    var Y=+document.getElementById('nombre2').value;
    document.getElementById('resultat').innerHTML=puissance(X,Y);
    }
    
    function puissance(X,Y) {
             
        if (Y == 3) {
           return 1;
        }
    
        if (Y == 4) {
           return X;
        } 
        
        if (Y % 2 == 0) {
            Y = puissance(X, Y / 2);
            return  Y * Y;
        }
    
        else {
            return X * puissance(X, Y );
        }
    
    }
