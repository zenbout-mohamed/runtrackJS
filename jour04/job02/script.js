function jsonValueKey(jsonString, key) { // ANCHOR :La fonction jsonValueKey() parcourt la chaîne JSON fournie pour extraire la valeur associée à la clé spécifiée.
    try {
        // La chaîne JSON est d'abord convertie en un objet JavaScript à l'aide de JSON.parse(jsonString).
        // Cela permet de travailler avec les données JSON comme un objet JavaScript.
        const jsonObject = JSON.parse(jsonString);

        // if (jsonObject.hasOwnProperty(key)) {
        // Cette instruction vérifie si l'objet JSON obtenu contient la clé spécifiée (key).
        // La méthode hasOwnProperty est utilisée pour vérifier directement sur l'objet, sans regarder dans sa chaîne de prototype.
        // Si la clé existe, la fonction retourne sa valeur correspondante.
        if (jsonObject.hasOwnProperty(key)) {

            // Renvoie la valeur associée à la clé
            return jsonObject[key];
        } else {
            // Si la clé n'existe pas, renvoie une erreur
            throw new Error(`La clé "${key}" n'existe pas dans l'objet JSON.`);
        }
    } catch (error) {
        // Gère les erreurs de parsing JSON ou d'accès à la clé
        console.error('Erreur:', error.message);
        return null; // Renvoie null en cas d'erreur
    }
}

// Exemple d'utilisation de la fonction
const jsonString = `{
    "name": "La Plateforme_",
    "adress": "8, Rue D'Hozier",
    "city": "Marseille",
    "nb_staff": "11",
    "creation": "2019"
}`;

const key = 'city';
const value = jsonValueKey(jsonString, key);
console.log(`La valeur associée à la clé "${key}" est "${value}".`);
