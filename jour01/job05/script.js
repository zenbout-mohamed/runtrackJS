// Nous déclarons la fonction afficherJoursSemaines qui ne prend pas de paramètre.
function AffichageJours() {
    // Création d'un tableau contenant les jours de la semaine
    var joursSemaines = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
    
    // Nous utilisons une boucle for pour parcourir chaque élément du tableau et afficher chaque jour dans la console à l'aide de console.log().
    // Boucle for pour afficher les jours de la semaine
    for (var i = 0; i < joursSemaines.length; i++) {
        console.log(joursSemaines[i]);
    }
    // Appel de la fonction afficherJoursSemaines pour afficher les jours de la semaine
}
// Appel de la fonction
AffichageJours();
