//NOTE - Sélection des éléments du DOM : Le code commence par sélectionner les éléments HTML pertinents à l'aide de document.getElementById()
// pour les champs du formulaire (email et password) ainsi que pour les messages d'erreur associés (emailError et passwordError).
document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

//NOTE - Fonctions de validation : Deux fonctions de validation sont définies : validateEmail() et validatePassword().
// Chaque fonction récupère la valeur du champ associé, la nettoie (en supprimant les espaces vides) et vérifie si elle est vide.
// Si c'est le cas, un message d'erreur est affiché dans le champ d'erreur correspondant. Sinon, le message d'erreur est effacé.
    function validateEmail() {
        const email = emailInput.value.trim();
        if (!email) {
            emailError.textContent = 'Veuillez entrer une adresse email.';
        } else {
            emailError.textContent = '';
        }
    }

    // Fonction de validation du mot de passe
    function validatePassword() {
        const password = passwordInput.value.trim();
        if (!password) {
            passwordError.textContent = 'Veuillez entrer un mot de passe.';
        } else {
            passwordError.textContent = '';
        }
    }

    //NOTE - Écouteurs d'événements : Des écouteurs d'événements sont ajoutés aux champs du formulaire pour surveiller les événements de saisie (input)
    // et de perte de focus (blur). Cela permet de valider les entrées en temps réel et lorsque l'utilisateur quitte le champ.
    emailInput.addEventListener('input', validateEmail);
    emailInput.addEventListener('blur', validateEmail);
    passwordInput.addEventListener('input', validatePassword);
    passwordInput.addEventListener('blur', validatePassword);

    //NOTE - Validation du formulaire : Un écouteur d'événements est également ajouté au formulaire lui-même pour écouter l'événement de soumission (submit).
    // Lorsque le formulaire est soumis, les fonctions de validation pour l'email et le mot de passe sont appelées.
    // Si des erreurs sont présentes, la soumission du formulaire est empêchée en appelant event.preventDefault().
    document.getElementById('connexionForm').addEventListener('submit', (event) => {
        validateEmail();
        validatePassword();

        // Empêcher la soumission du formulaire si des erreurs sont présentes
        if (emailError.textContent || passwordError.textContent) {
            event.preventDefault();
        }
    });
});
