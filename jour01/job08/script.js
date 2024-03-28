// Cette fonction vérifie si un nombre est premier. 
function nombrePremier(nombre) {
    // Si le nombre est inférieur ou égal à 1, la fonction retourne false car les nombres premiers sont des nombres entiers strictement supérieurs à 1.
    if (nombre <= 1) {
        return false;
    }
    // Ensuite, la fonction utilise une boucle for pour vérifier si le nombre est divisible par un autre nombre entre 2 et la racine carrée du nombre (inclus).
    // Si le nombre est divisible par l'un de ces nombres, alors il n'est pas premier et la fonction retourne false. Sinon, elle retourne true.
    for (var i = 2; i <= Math.sqrt(nombre); i++) {
        if (nombre % i === 0) {
            return false;
        }
    }
    return true;
}

// Cette fonction prend deux nombres en paramètres et vérifie s'ils sont tous deux premiers en appelant la fonction estPremier.
// Si les deux nombres sont premiers, la fonction retourne leur somme. Sinon, elle retourne false
function sommeNombresPremiers(nombre1, nombre2) {
    // Vérification si les deux nombres sont premiers
    if (nombrePremier(nombre1) && nombrePremier(nombre2)) {
        return nombre1 + nombre2; // Retourne la somme des nombres premiers
    } else {
        return false; // Retourne false si l'un des nombres n'est pas premier
    }
}

// Exemple d'utilisation de la fonction sommeNombresPremiers avec deux nombres
var nombre1 = 17;
var nombre2 = 5;
console.log("La somme des nombres premiers est : " + sommeNombresPremiers(nombre1, nombre2));
