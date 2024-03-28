// La fonction bisextile est déclarée avec un paramètre annee, qui représente l'année que nous voulons vérifier.
function bisextile(annee) {
    // 1 . À l'intérieur de la fonction, nous utilisons une condition pour vérifier si l'année est bissextile ou non.
    // 2 . Une année est bissextile si elle est divisible par 4 et non divisible par 100, ou si elle est divisible par 400.
    // 3 . Nous utilisons l'opérateur modulo (%) pour vérifier si l'année est divisible par 4, par 100 et par 400.
    if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
        // Si l'année est bissextile, la fonction retourne true.
        return true;
    } else {
        // Sinon, elle retourne false.
        return false;
    }
}

// Appel de la fonction bisextile avec une année spécifique (par exemple 2024)
var anneeTest = 2024;
// La réponse est ensuite affichée dans la console.
console.log("Est-ce que l'année " + anneeTest + " est bissextile ? Réponse : " + bisextile(anneeTest));
