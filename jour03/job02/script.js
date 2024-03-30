// ANCHOR Écouteur d'événement DOMContentLoaded : Ce code s'exécute lorsque le contenu HTML de la page est complètement chargé dans le navigateur.
//  C'est généralement là que vous configurez les fonctionnalités qui dépendent du DOM.
document.addEventListener('DOMContentLoaded', () => {
    // Récupération des éléments DOM : Le code commence par récupérer les éléments pertinents du DOM en utilisant document.getElementById().
    // 1 . Il récupère un bouton pour mélanger les images (shuffleButton),
    // 2 . le conteneur des images de l'arc-en-ciel (imagesContainer)
    // 3 . et un élément pour afficher le résultat (resultMessage).
    const shuffleButton = document.getElementById('shuffleButton');
    const imagesContainer = document.getElementById('rainbow-images');
    const resultMessage = document.getElementById('resultMessage');
    
    // Ajout d'un écouteur d'événements au bouton de mélange : Un écouteur d'événements est ajouté au bouton de mélange (shuffleButton).
    //  Lorsque ce bouton est cliqué, la fonction shuffleImages() est appelée pour mélanger les images.
    shuffleButton.addEventListener('click', shuffleImages);
    
    // ANCHOR Fonction shuffleImages() :
    //  Cette fonction est appelée lorsque le bouton de mélange est cliqué.
    //  Elle utilise un algorithme simple pour mélanger les images dans le conteneur.
    //  Elle boucle sur les enfants du conteneur (imagesContainer.children) en commençant par la fin et à chaque itération,
    //  elle choisit aléatoirement un enfant et le déplace à la fin du conteneur (imagesContainer.appendChild(...)).
    //  Cela crée un effet de mélange aléatoire des images.
    function shuffleImages() {
        for (let i = imagesContainer.children.length; i >= 0; i--) {
            imagesContainer.appendChild(imagesContainer.children[Math.random() * i | 0]);
        }
        // Effacement du message précédent : Avant de mélanger les images, la fonction shuffleImages() efface tout message précédent affiché dans resultMessage.
        resultMessage.textContent = ''; // Effacer le message précédent
    }

    // Vous pouvez ajouter une logique pour permettre de réordonner les images manuellement ici.
    // Par exemple, en utilisant drag & drop. Puis vérifiez l'ordre après chaque changement.
    
    // ANCHOR Fonction checkOrder() :
    //  Cette fonction vérifie si les images sont dans l'ordre correct de l'arc-en-ciel (rouge, orange, jaune, vert, bleu, violet).
    //  Elle compare l'ordre actuel des images dans le conteneur avec l'ordre correct en vérifiant les IDs des images.
    //  Si l'ordre est correct, un message de victoire est affiché dans resultMessage avec la couleur verte.
    //  Sinon, un message de défaite est affiché avec la couleur rouge.
    function checkOrder() {
        const correctOrder = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
        let currentOrder = Array.from(imagesContainer.children).map(img => img.id);
        if (JSON.stringify(correctOrder) === JSON.stringify(currentOrder)) {
            resultMessage.textContent = 'Vous avez gagné';
            resultMessage.style.color = 'green';
        } else {
            resultMessage.textContent = 'Vous avez perdu';
            resultMessage.style.color = 'red';
        }
    }
});
