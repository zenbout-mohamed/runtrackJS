//NOTE - document.addEventListener('DOMContentLoaded', (event) => {...}); :
// Cette ligne assure que le script ne s'exécute que lorsque le DOM est entièrement chargé.
//  C'est une bonne pratique pour éviter les erreurs où le script essaie d'accéder à des éléments pas encore chargés dans la page.

document.addEventListener('DOMContentLoaded', (event) => {
    // Sélection des éléments des boutons id et de l'id de la div :
    const showTextButton = document.getElementById('showTextBtn');
    const hideEverythingButton = document.getElementById('hideEverythingBtn');
    const textElement = document.getElementById('textToShow');

    //NOTE - addEventListener('click', function() {...}); : 
    // Cette méthode est utilisée pour attacher un gestionnaire d'événements à un élément.
    // Ici, elle écoute pour un événement de clic sur les boutons. Lorsque l'événement se produit (le bouton est cliqué),
    // la fonction fournie est appelée. Gestionnaire d'événement pour afficher le texte.
    showTextButton.addEventListener('click', function() {

        // Modifie le style de l'élément textToShow pour qu'il soit visible. C'est un moyen direct de changer les styles CSS via JavaScript.
        textElement.style.display = 'block'; // Change le style pour afficher le texte
    });

    // Gestionnaire d'événement pour cacher tout l'élément HTML
    // Cache l'ensemble du contenu de <body>. Une opération comme celle-ci supprime tout ce qui est visible sur la page, la rendant complètement vide.
    hideEverythingButton.addEventListener('click', function() {
        document.body.style.display = 'none'; // Cache tout le contenu de <body>
    });
});