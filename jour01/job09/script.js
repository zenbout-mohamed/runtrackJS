// La fonction tri prend deux paramètres : numbers, un tableau de nombres à trier, et order, une chaîne de caractères indiquant l'ordre de tri souhaité
//  ("asc" pour ascendant ou "desc" pour descendant).
function tri(numbers, order) {
    // Nous commençons par vérifier si le paramètre order est égal à "asc" (ascendant) ou "desc" (descendant).
    if (order === "asc") {
        // Si order est "asc", nous utilisons la méthode sort() sur le tableau numbers avec une fonction de comparaison qui trie les nombres dans l'ordre croissant.
        // Tri du tableau en ordre ascendant
        numbers.sort(function(a, b) {
            return a - b;
        });
    } else if (order === "desc") {
        // Si order est "desc", nous utilisons également la méthode sort() mais avec une fonction de comparaison qui trie les nombres dans l'ordre décroissant.
        // Tri du tableau en ordre descendant
        numbers.sort(function(a, b) {
            return b - a;
        });
    } else {
        // Si order n'est ni "asc" ni "desc", alors nous affichons un message dans la console indiquant que l'ordre est invalide, et nous retournons le tableau non trié.
        console.log("Ordre invalide. Le tableau n'a pas été trié.");
    }
    // Nous retournons le tableau numbers trié, que ce soit dans l'ordre ascendant, descendant ou non trié (dans le cas où l'ordre spécifié est invalide).
    return numbers;
}


// Deux exemples d'utilisation de la fonction tri sont fournis à la fin du code. Ils démontrent comment trier un tableau dans l'ordre ascendant et descendant
// en utilisant cette fonction.

// 1 . Exemple d'utilisation de la fonction tri avec un tableau de nombres et l'ordre "asc"
var numbers = [5, 2, 8, 1, 9];
var ordreAscendant = "asc";
console.log("Tableau trié en ordre ascendant :", tri(numbers.slice(), ordreAscendant));

// 2 . Exemple d'utilisation de la fonction tri avec un tableau de nombres et l'ordre "desc"
var ordreDescendant = "desc";
console.log("Tableau trié en ordre descendant :", tri(numbers.slice(), ordreDescendant));


// tri(numbers.slice() : Le code numbers.slice() est utilisé pour créer une copie superficielle (shallow copy) du tableau numbers.
//  Cette opération ne modifie pas le tableau original mais renvoie un nouveau tableau contenant les mêmes éléments que le tableau d'origine.