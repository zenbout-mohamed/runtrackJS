function citation() {
    // Récupération de l'élément avec l'ID "citation"
    var citationElement = document.getElementById("citation");
    // Récupération du texte contenu dans l'élément
    var citationText = citationElement.textContent;
    // Affichage du texte dans la console
    console.log("Contenu de l'élément citation :", citationText);
}

//  NB : La méthode document.getElementById() : est utilisée en JavaScript pour récupérer un élément HTML à partir de son attribut id.
//  citationElement.textContent :  fait référence à la propriété textContent de l'élément HTML citationElement.
//  Cette propriété permet d'accéder au contenu textuel de l'élément HTML, c'est-à-dire au texte contenu entre les balises d'ouverture et de fermeture de cet élément.