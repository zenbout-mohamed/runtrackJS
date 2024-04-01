const button = document.getElementById('button'); // Sélectionne le bouton et le paragraphe dans le HTML en utilisant document.getElementById() pour chaque élément.
const expressionParagraph = document.getElementById('expression'); 

// Ajoute un écouteur d'événements au bouton qui écoute l'événement de clic.
button.addEventListener('click', () => {

    // Lorsque le bouton est cliqué, il utilise fetch() pour effectuer une requête afin de récupérer le contenu du fichier expression.txt.
    fetch('expression.txt') // Effectue une requête pour récupérer le contenu du fichier expression.txt

        .then(response => {
            if (!response.ok) { // Vérifie si la réponse est réussie
                throw new Error('Erreur de chargement du fichier');
            }
            // Une fois que la réponse est obtenue, le contenu du fichier est extrait en utilisant response.text().
            return response.text(); // Récupère le texte de la réponse
        })
        .then(data => {
            // Ensuite, le contenu est placé dans le paragraphe en utilisant textContent.
            expressionParagraph.textContent = data; // Place le contenu du fichier dans le paragraphe
        })
        // En cas d'erreur lors du chargement du fichier ou de récupération de son contenu, un message d'erreur approprié est affiché dans le paragraphe.
        .catch(error => {
            console.error('Erreur:', error);
            expressionParagraph.textContent = 'Une erreur est survenue lors du chargement du fichier.';
        });
});

//ANCHOR - la méthode .then() est utilisée dans le contexte des promesses, une fonctionnalité introduite dans ECMAScript 6 (ES6),
// pour gérer les opérations asynchrones de manière plus claire et efficace.

//NOTE - throw new Error est utilisé pour lancer une erreur explicite dans le code.