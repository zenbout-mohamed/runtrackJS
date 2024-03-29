// Nous ajoutons un écouteur d'événements sur la fenêtre (window.addEventListener("scroll", function() { ... })) 
// pour détecter lorsque l'utilisateur fait défiler la page.
// À chaque fois que l'utilisateur fait défiler la page, la fonction anonyme est déclenchée.
window.addEventListener("scroll", function() {

    // C'est la distance en pixels de la partie supérieure de la fenêtre au sommet du document. 
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; 
    // scrollHeight : C'est la hauteur totale de la page, y compris la partie qui n'est pas visible à l'écran.
    var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    // C'est la hauteur de la fenêtre du navigateur. // Hauteur totale de la page
    var clientHeight = document.documentElement.clientHeight || document.body.clientHeight; 
    // Nous utilisons ces valeurs pour calculer le pourcentage de scrolling à l'aide de la formule : (scrollTop / (scrollHeight - clientHeight)) * 100.
    // Cela donne le pourcentage de la distance parcourue par rapport à la distance totale que l'utilisateur peut faire défiler.
    var scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100; 

    // Nous récupérons l'élément <footer> à l'aide de document.querySelector("footer").
    var footer = document.querySelector("footer");
    // Nous utilisons la fonction getColorFromPercentage() 
    footer.style.backgroundColor = color;
    // pour obtenir la couleur en fonction du pourcentage de scrolling pour obtenir la couleur en fonction du pourcentage
    var color = getColorFromPercentage(scrollPercentage); 
});

// Cette fonction prend le pourcentage de scrolling en paramètre.
function getColorFromPercentage(percentage) {
    // Elle convertit ce pourcentage en une teinte de couleur (hue) en multipliant le pourcentage par 1.2 (pour augmenter la variation de couleur).
    var hue = (percentage * 1.2) / 100; 
    // Elle retourne une couleur au format HSL (Teinte, Saturation, Luminosité) en fonction de la teinte calculée et des valeurs de saturation et de luminosité prédéfinies.
    return "hsl(" + hue + ", 80%, 50%)"; 
}


// NB : scrollTop : C'est la distance en pixels de la partie supérieure de la fenêtre au sommet du document.
// Elle est récupérée en utilisant (document.documentElement.scrollTop) ou (document.body.scrollTop). 
// Certains navigateurs utilisent (document.documentElement), d'autres utilisent document.body, nous utilisons donc les deux pour être compatibles avec tous les navigateurs.