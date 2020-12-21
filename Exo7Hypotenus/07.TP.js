
// function hypotenus(){

//     let a = prompt('entrer une longeur')
//     let b = prompt('entrer une autre longeur')

//     let c = Math.sqrt((a*a) + (b*b))
//        return window.alert(c)
// }

// hypotenus() ;


function Pytha() {
    if ( isNaN(c1.value) || c1.value == 0 ) {
         alert ("valeur du 1er côté invalide !..."); return;
         }
    if ( isNaN(c2.value) || c2.value == 0 ) {
         alert ("valeur du 2ème côté invalide !..."); return;
         }
    resultat.innerHTML = Math.sqrt( Math.pow(c1.value, 2) + Math.pow(c2.value, 2) );
    }