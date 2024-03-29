// Le code Konami
// Ici, konamiCode est un tableau contenant la séquence spécifique des clés constituant le code Konami.
// konamiIndex est utilisé pour suivre la progression de l'utilisateur à travers la séquence.
// À chaque fois que l'utilisateur entre la bonne touche dans la séquence, konamiIndex est incrémenté.

const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
let konamiIndex = 0;

// Cette partie du script ajoute un écouteur d'événements au document entier.
//  À chaque fois qu'une touche est enfoncée (keydown), la fonction fournie (un "callback") est exécutée.
//  e est l'objet événement qui contient des informations sur l'événement de touche, y compris quelle touche a été pressée.
document.addEventListener('keydown', (e) => {

    // Vérifier si la touche pressée est la prochaine dans le code Konami
    if (e.code === konamiCode[konamiIndex]) {
        konamiIndex++; // Passer à la prochaine touche

        if (konamiIndex === konamiCode.length) {
            // Si le code Konami a été entièrement saisi
            activateKonamiStyle();
            konamiIndex = 0; // Réinitialiser l'index pour permettre de réactiver le code
        }
    }else{
        konamiIndex = 0; // Réinitialiser l'index si la séquence est rompue
    }
});

function activateKonamiStyle() {
    document.body.classList.add('konami-activated');
}
//ANCHOR : 
// L'instruction document.addEventListener est une méthode fondamentale en JavaScript utilisée pour écouter et réagir aux événements qui se produisent dans le document
//  (ou page web). Son but est d'ajouter un écouteur d'événements à un objet spécifique,
//  souvent l'objet document mais cela peut être n'importe quel élément du DOM (Document Object Model).
//  Cela permet au code JavaScript de réagir de manière dynamique à des actions effectuées par l'utilisateur ou à d'autres événements du navigateur.

//NOTE - 
//La méthode document.body.classList.add('konami') est un exemple de manipulation de la liste de classes CSS d'un élément du DOM,
// dans ce cas, l'élément <body> de la page web. 