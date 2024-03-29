 // Récupération de l'élément <p> compteur
var compteurElement = document.getElementById("compteur");
        

//  À l'intérieur de cette fonction, nous récupérons d'abord la valeur actuelle du compteur à partir du contenu textuel de l'élément <p> avec compteurElement.textContent.
// Fonction pour incrémenter le compteur à chaque clic sur le bouton
function addOne() {
     // Récupération de la valeur actuelle du compteur en tant que nombre
    //  Nous utilisons parseInt() pour convertir cette valeur textuelle en un nombre entier.
    var compteurValeur = parseInt(compteurElement.textContent);
    
    //  Ensuite, nous incrémentons cette valeur de 1 en utilisant l'opérateur d'incrémentation ++.
    compteurValeur++;
     
    //  Nous mettons à jour le contenu textuel de l'élément <p> avec la nouvelle valeur du compteur en utilisant compteurElement.textContent.
    compteurElement.textContent = compteurValeur;
 }