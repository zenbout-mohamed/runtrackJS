// La fonction showhide() vérifie d'abord si un élément <article> avec l'ID "citation" existe déjà sur la page.
function showhide() {
    // Récupération de l'élément article existant
    var article = document.getElementById("citation");

    // Si cet élément existe, cela signifie qu'il est déjà affiché, donc la fonction le supprime en utilisant la méthode remove()
    if (article) {
        // Si oui, on le supprime
        article.remove();
        // Si l'élément <article> n'existe pas encore, la fonction crée un nouvel élément <article>
    } else {
        // Si non, on crée un nouvel élément article et on lui assigne un ID
        article = document.createElement("article");
        // puis lui assigne l'ID "citation"
        article.id = "citation";
        // lui ajoute le texte spécifié
        article.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        // puis l'ajoute à la fin du corps de la page en utilisant appendChild().
        document.body.appendChild(article);
    }
}