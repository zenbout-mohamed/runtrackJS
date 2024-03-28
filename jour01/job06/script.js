function fizz_buzz() {
    // Boucle pour parcourir les nombres de 1 à 151
    for (var i = 1; i <= 151; i++) {

        // À chaque itération, nous vérifions si le nombre est un multiple de 3, de 5, ou des deux (FizzBuzz)
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }

        // Vérifie si le nombre est un multiple de 3
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
        // Vérifie si le nombre est un multiple de 5
        else if (i % 5 === 0) {
            console.log("Buzz");
        }

        // Si une condition est remplie, nous affichons le mot correspondant ("Fizz", "Buzz" ou "FizzBuzz") dans la console.
        // Si aucune des conditions n'est remplie, nous affichons simplement le nombre lui-même.
        else {
            console.log(i);
        }
    }
}

// Appel de la fonction fizzbuzz pour afficher les nombres de 1 à 151 selon les conditions FizzBuzz
fizz_buzz();
