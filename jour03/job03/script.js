// ANCHOR Écouteur d'événement DOMContentLoaded : Ce code s'exécute une fois que le contenu du document a été complètement chargé.
//  C'est à l'intérieur de cet écouteur d'événements que toute la logique de configuration initiale du jeu est déclenchée.
document.addEventListener('DOMContentLoaded', () => {
    
    const taquin = document.getElementById('taquin');
    const restartButton = document.getElementById('restartButton');
    const message = document.getElementById('message');
    // Les variables pieces, emptyIndex, les éléments du DOM (taquin, restartButton, message) sont déclarés au début.
    let pieces = [];
    const emptyIndex = 8; // La 9e position est vide

// ANCHOR La fonction initializeGame initialise ou réinitialise le jeu.
// Elle remplit le tableau pieces avec des nombres de 1 à 8 représentant les pièces du jeu,
// ajoute une valeur pour la case vide (ici le nombre 8 qui agit comme l'index de la case vide), mélange ces pièces, puis dessine le jeu à l'écran.
    function initializeGame() {
        pieces = [];
        for (let i = 1; i <= 8; i++) {
            pieces.push(i);
        }
        pieces.push(emptyIndex); // Ajoute la case vide
        shuffle(pieces);
        drawGame();
    }
// ANCHOR La fonction shuffle prend un tableau et le mélange aléatoirement en utilisant l'algorithme de mélange de Fisher-Yates.
//  Cela assure que chaque partie commence avec une configuration unique du taquin.
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
// ANCHOR La fonction drawGame vide le conteneur taquin et crée un élément <div> pour chaque pièce dans le tableau pieces,
// en assignant à chacun un fond correspondant à l'image de la pièce (ou le marque comme vide si c'est l'index de la case vide).
// Elle ajoute également un écouteur d'événements pour déplacer une pièce lorsqu'elle est cliquée.
    function drawGame() {
        taquin.innerHTML = '';
        pieces.forEach((piece, index) => {
            const pieceElement = document.createElement('div');
            if (piece === emptyIndex) {
                pieceElement.className = 'taquin-piece empty';
            } else {
                pieceElement.className = 'taquin-piece';
                pieceElement.style.backgroundImage = `url('C:\Users\Utilisateur\Desktop\Projets_laplateforme\runtrackJS\jour03\job03\img/${piece}.png')`;
                pieceElement.addEventListener('click', () => movePiece(index));
            }
            taquin.appendChild(pieceElement);
        });
    }
// ANCHOR Lorsqu'une pièce est cliquée, cette fonction est appelée avec l'index de la pièce cliquée.
// La fonction calcule ensuite si le déplacement est valide (la pièce est adjacente à la case vide) et,
// si oui, échange les positions de la pièce cliquée et de la case vide, puis redessine le jeu.
    function movePiece(index) {
        const emptyIndex = pieces.indexOf(8);
        // Liste des index valides autour de la case vide pour un mouvement
        const validMoves = [emptyIndex - 1, emptyIndex + 1, emptyIndex - 3, emptyIndex + 3].filter(i => i >= 0 && i < 9);
        if (validMoves.includes(index)) {
            [pieces[emptyIndex], pieces[index]] = [pieces[index], pieces[emptyIndex]]; // Échange les pièces
            drawGame();
            checkWin();
        }
    }
// ANCHOR Après chaque mouvement, cette fonction vérifie si les pièces sont dans l'ordre correct.
// Si les pièces sont correctement ordonnées (1 à 8 dans cet exemple), elle affiche un message de victoire,
//  bloque les mouvements ultérieurs et montre un bouton pour recommencer le jeu.
    function checkWin() {
        if (pieces.slice(0, 8).every((piece, index) => piece === index + 1)) {
            message.textContent = 'Vous avez gagné';
            message.style.color = 'green';
            taquin.style.pointerEvents = 'none'; // Bloque le mouvement des pièces
            restartButton.style.display = 'block'; // Affiche le bouton pour recommencer
        }
    }
// Le bouton "Recommencer", lorsqu'il est cliqué, réinitialise le jeu en appelant initializeGame, cache le bouton lui-même et réactive les mouvements.
    restartButton.addEventListener('click', () => {
        initializeGame();
        message.textContent = '';
        taquin.style.pointerEvents = 'auto';
        restartButton.style.display = 'none';
    });

    initializeGame(); // Commence le jeu
});
