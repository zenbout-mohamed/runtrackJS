 // Nous récupérons cet élément dans JavaScript en utilisant document.getElementById("keylogger").
 var keylogger = document.getElementById("keylogger");

 // Nous ajoutons un gestionnaire d'événement pour l'événement "keydown" sur l'ensemble du document.
//   Cet événement est déclenché chaque fois qu'une touche est enfoncée.
 document.addEventListener("keydown", function(event) {
     // À chaque pression de touche, nous récupérons la touche pressée à l'aide de event.key.
    var key = event.key;

     // Nous vérifions si la touche pressée est une lettre de l'alphabet (a à z) en utilisant une expression régulière.
    //  (/^[a-zA-Z]$/) est une expression régulière qui correspond à une seule lettre de l'alphabet (minuscule ou majuscule).
    //  test() Cette méthode est utilisée pour tester si une chaîne de caractères correspond à l'expression régulière spécifiée par l'objet RegExp.
    //  (key) est la chaîne de caractères représentant la touche pressée par l'utilisateur.
        if (/^[a-zA-Z]$/.test(key)) {
         // Si la touche est une lettre, nous vérifions si le focus est actuellement dans le <textarea> en comparant (document.activeElement) avec notre élément <textarea>.
            var isFocused = (document.activeElement === keylogger);

            // Si le focus est dans le <textarea>, nous ajoutons la lettre deux fois à son contenu en utilisant += pour ajouter du texte à la fin de son contenu actuel.
            // Sinon, nous ajoutons la lettre une fois.
            if (isFocused) {
                keylogger.value += key + key;
                
            } else {
             // Sinon, ajouter la lettre une fois
                keylogger.value += key;
                // Ainsi, à chaque pression de touche, la lettre tapée est ajoutée au contenu du <textarea>,
                // avec la condition spéciale pour ajouter la lettre deux fois si le focus est dans le <textarea>.
         }
     }
 });
