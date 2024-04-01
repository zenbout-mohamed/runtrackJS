//NOTE - Sélection et écouteur d'événement : Cette ligne sélectionne l'élément bouton avec l'identifiant updateButton et lui ajoute un écouteur d'événement.
// L'événement écouté est le click. Lorsque l'utilisateur clique sur le bouton, la fonction anonyme fournie à addEventListener est exécutée.
document.getElementById('mise_a_jour_button').addEventListener('click', function() {
    fetch('utilisateur.json')

    //ANCHOR - Requête fetch et conversion : La fonction fetch est utilisée pour charger le contenu du fichier utilisateur.json.
    // fetch retourne une promesse qui, une fois résolue, fournit un objet response.
        .then(response => response.json())

        //ANCHOR - Traitement des données : Une fois les données converties en objet JavaScript, cette portion de code est exécutée.
        // Elle commence par sélectionner le corps du tableau HTML (tbody) avec l'identifiant userTableBody.
        // Ensuite, elle nettoie le contenu du tableau pour s'assurer que les anciennes données sont supprimées avant de rajouter les nouvelles données.
        .then(data => {
            const tableBody = document.getElementById('userTableBody');
            tableBody.innerHTML = ''; // Nettoyer le tableau avant de le mettre à jour

            //ANCHOR - Affichage des données : Cette boucle forEach parcourt chaque utilisateur dans le tableau de données.
            // Pour chaque utilisateur, elle crée une chaîne de caractères HTML (row) représentant une ligne du tableau avec les informations de l'utilisateur.
            // Cette chaîne est ensuite ajoutée au innerHTML du corps du tableau, ce qui a pour effet de l'afficher sur la page web.
            data.forEach(user => {
                const row = `<tr>
                                <td>${user.id}</td>
                                <td>${user.nom}</td>
                                <td>${user.prenom}</td>
                                <td>${user.email}</td>
                             </tr>`;
                tableBody.innerHTML += row;
            });
        })
        //ANCHOR - Gestion des erreurs : Le bloc catch capture et affiche les erreurs qui peuvent survenir lors de la requête fetch ou du traitement des données.
        // Cela inclut les erreurs de réseau ou si le fichier utilisateur.json ne peut pas être trouvé ou lu correctement.
        .catch(error => console.error('Erreur lors du chargement des utilisateurs:', error));
});
