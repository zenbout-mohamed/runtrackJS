function profession_Jour(date) {
    var annee = date.getFullYear(); // Cette méthode renvoie l'année de la date sous forme de nombre à quatre chiffres (par exemple, 2024).

    var mois = date.getMonth() + 1; // Cette méthode renvoie le mois de la date sous forme de nombre compris entre 0 et 11
    //  (0 pour janvier, 1 pour février, ..., 11 pour décembre). Comme les mois sont indexés à partir de 0, nous ajoutons 1 pour obtenir le mois réel.

    var jour = date.getDate(); // Cette méthode renvoie le jour du mois de la date sous forme de nombre (par exemple, 1 pour le premier jour du mois).

    var jourSemaine = date.getDay(); // Cette méthode renvoie le jour de la semaine de la date sous forme de nombre compris entre 0 et 6
    //  (0 pour dimanche, 1 pour lundi, ..., 6 pour samedi).


    // Cela crée un tableau contenant les jours fériés de l'année 2024 au format "MM-DD" (mois-jour). 
    var joursFeries2024 = ["01-01", "04-01", "05-01", "05-08", "07-14", "08-15", "11-01", "11-11", "12-25"];

    // Cette ligne de code crée une chaîne de caractères formatée au format "MM-DD" à partir des variables mois et jour.
    var dateFormatted = (mois < 10 ? '0' : '') + mois + "-" + (jour < 10 ? '0' : '') + jour;

    // Vérification si la date correspond à un jour férié
    if (joursFeries2024.includes(dateFormatted)) {
        console.log("Le " + jour + "/" + mois + "/" + annee + " est un jour férié");
    }
    // Cette condition vérifie si la date correspond à un samedi (0) ou à un dimanche (6), car ces jours sont considérés comme des week-ends.
    // Si c'est le cas, un message est affiché dans la console.
    else if (jourSemaine === 0 || jourSemaine === 6) {
        console.log("Non, le " + jour + "/" + mois + "/" + annee + " est un week-end");
    }
    // Si aucun des cas précédents n'est vrai, cela signifie que la date correspond à un jour travaillé.
    else {
        console.log("Oui, le " + jour + "/" + mois + "/" + annee + " est un jour travaillé");
    }
}

// code crée un objet Date représentant le 1er janvier 2024, puis appelle la fonction profession_Jour()
//  en lui passant cette date comme argument. Cela permet de tester la fonction profession_Jour() avec une date spécifique.
var dateTest = new Date(2024, 0, 1);
profession_Jour(dateTest);
