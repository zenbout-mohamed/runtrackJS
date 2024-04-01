// NOTE - 1 Sélection des éléments du DOM : Tout d'abord, le script commence par sélectionner les éléments du formulaire (inputs pour l'ID, le nom, le type, et le bouton pour filtrer)
// ainsi que la zone où les résultats seront affichés. Cette sélection se fait généralement via document.getElementById ou document.querySelector,
// permettant au script d'interagir avec ces éléments.
document.getElementById('filterButton').addEventListener('click', function() {
    const id = document.getElementById('pokemonId').value;
    const name = document.getElementById('pokemonName').value.toLowerCase();
    const type = document.getElementById('pokemonType').value;


// ANCHOR - Attacher un écouteur d'événements au bouton
// Ensuite, un écouteur d'événements est attaché au bouton "Filtrer".
// Cet écouteur réagit au clic de l'utilisateur sur ce bouton, déclenchant ainsi la fonction de filtrage.
// C'est le point de départ de l'interaction utilisateur avec le script.

// Cette instruction initie une requête pour récupérer le contenu du fichier pokemon.json.
// fetch retourne une promesse qui se résout en une réponse (response) contenant les données du fichier.
    fetch('pokemon.json')
        // .then(response => response.json()) Une fois la promesse résolue, le contenu de la réponse est passé à la méthode .json() qui le convertit de JSON à un objet JavaScript.
        // Cette conversion est nécessaire pour traiter les données en JavaScript. La méthode .json() retourne une nouvelle promesse qui se résout en l'objet JavaScript.
        .then(response => response.json())

        // .then(data => { ... })
        // Le résultat de la conversion JSON est maintenant disponible sous forme d'objet (ou tableau d'objets) et est passé à une nouvelle fonction de callback.
        // data représente donc l'ensemble des données Pokémon chargées à partir du fichier JSON.
        .then(data => {

            // À l'intérieur de cette fonction, les données sont filtrées en utilisant la méthode .filter() sur le tableau data.
            // Chaque élément de data est passé à une fonction de callback qui retourne true ou false pour indiquer si l'élément doit être inclus dans le tableau filtré.
            const filteredPokemons = data.filter(pokemon => {

                // Les critères de filtrage vérifient si l'utilisateur a fourni des valeurs pour id, name, et type. Pour chaque critère :
                // ID : Vérifie si l'id du Pokémon (pokemon.id) est égal à l'id recherché. Si aucun id n'est spécifié (id ?), tous les Pokémon passent ce test (true).
                // Name : Vérifie si le nom du Pokémon (pokemon.name.toLowerCase()) contient la chaîne de caractères recherchée (name). Le nom du Pokémon est converti en minuscules pour une comparaison insensible à la casse. Si aucun nom n'est spécifié, tous les Pokémon passent ce test.
                // Type : Vérifie si le tableau de types du Pokémon (pokemon.type) inclut le type recherché. Si aucun type n'est spécifié, tous les Pokémon passent ce test.
                return (id ? pokemon.id == id : true) &&
                       (name ? pokemon.name.toLowerCase().includes(name) : true) &&
                       (type ? pokemon.type.includes(type) : true);
            });
            // displayPokemons(filteredPokemons) :
            // Après le filtrage, la fonction displayPokemons est appelée avec le tableau des Pokémon filtrés (filteredPokemons) comme argument.
            //  Cette fonction est responsable de l'affichage des résultats sur la page web.
            displayPokemons(filteredPokemons);
        })
        // .catch(error => console.error('Erreur:', error))
        // En cas d'erreur lors de la récupération ou du traitement des données (par exemple, si le fichier pokemon.json ne peut pas être chargé),
        //  l'erreur est attrapée par .catch() qui affiche ensuite le message d'erreur dans la console.
        .catch(error => console.error('Erreur:', error));
});

//NOTE - la fonction displayPokemons, qui est responsable de l'affichage des Pokémon filtrés sur la page web.
function displayPokemons(pokemons) {
    // 1 . Obtenir le conteneur des résultats
    // document.getElementById('results');
    // Cette ligne récupère l'élément HTML qui a l'ID results et le stocke dans la variable resultsContainer.
    //  Cet élément sert de conteneur pour afficher les résultats du filtrage des Pokémon.
    const resultsContainer = document.getElementById('results');

    //  Effacer les résultats précédents
    resultsContainer.innerHTML = '';

    // Avant d'afficher les nouveaux résultats, le contenu HTML actuel de resultsContainer est vidé.
    //  Cela assure que les résultats précédents ne s'affichent pas avec les nouveaux.
    resultsContainer.innerHTML = ''; 


    //ANCHOR - Parcourir et afficher chaque Pokémon

    // pokemons.forEach(pokemon => { ... });
    // Cette instruction itère sur chaque objet Pokémon dans le tableau pokemons (les Pokémon filtrés) et exécute une fonction de callback pour chaque élément.
    // La variable pokemon représente l'objet Pokémon courant dans l'itération.
    pokemons.forEach(pokemon => {

    // Créer un élément pour chaque Pokémon
    // À l'intérieur de la boucle .forEach, un nouvel élément de type div est créé pour chaque Pokémon :
    // const pokemonElement = document.createElement('div');
    // Cet élément servira à afficher les informations du Pokémon courant.
        const pokemonElement = document.createElement('div');

        // pokemonElement.textContent = \ID: ${pokemon.id}, Nom: ${pokemon.name}, Type: ${pokemon.type.join(', ')}`;`

        // Cette ligne définit le contenu textuel de l'élément pokemonElement.
        // Elle utilise les propriétés id, name et type de l'objet Pokémon pour créer une chaîne de caractères descriptive.
        // Les types de Pokémon, qui sont stockés dans un tableau, sont joints en une seule chaîne séparée par des virgules pour une présentation claire.
        pokemonElement.textContent = `ID: ${pokemon.id}, Nom: ${pokemon.name}, Type: ${pokemon.type.join(', ')}`;

        // Finalement, l'élément pokemonElement est ajouté au conteneur des résultats (resultsContainer). Cela place l'élément dans le DOM (Document Object Model)
        // de la page web, rendant les informations du Pokémon visibles à l'utilisateur.
        resultsContainer.appendChild(pokemonElement);
    });
}
