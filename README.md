# Système d'Authentification Node.js avec Express et MongoDB

Ce projet est un exemple de système d'authentification basé sur Node.js, Express, et MongoDB. Il utilise Argon2 pour le hachage des mots de passe et la gestion des tokens d'accès et de rafraîchissement pour l'authentification des utilisateurs.

## Configuration requise

Avant de commencer, assurez-vous d'avoir installé les logiciels suivants sur votre système :

- Node.js (https://nodejs.org/)
- MongoDB (https://www.mongodb.com/)

## Installation

1. Clonez ce dépôt sur votre machine :

- git clone https://github.com/alexdevops007/authenticate.git
- cd authenticate


2. Installez les dépendances du projet avec npm :

npm install


3. Configurez votre base de données MongoDB en modifiant le fichier `config/config.js`.

4. Démarrez l'application :

npm start


L'application sera accessible à l'adresse `http://localhost:3000`.

## Fonctionnalités

- **Inscription d'utilisateurs** : Les utilisateurs peuvent s'inscrire en fournissant un nom d'utilisateur et un mot de passe.
- **Connexion d'utilisateurs** : Les utilisateurs peuvent se connecter avec leur nom d'utilisateur et leur mot de passe, et ils recevront des tokens d'accès et de rafraîchissement.
- **Protection des ressources** : Certaines ressources de l'application sont protégées et ne sont accessibles qu'aux utilisateurs authentifiés.
- **Middleware d'authentification et d'autorisation** : Le projet inclut des middlewares pour gérer l'authentification des utilisateurs et l'autorisation d'accès aux ressources.

## Routes API

- `POST /auth/register` : Enregistrement d'un nouvel utilisateur.
- `POST /auth/login` : Connexion d'un utilisateur et obtention de tokens d'accès et de rafraîchissement.
- `GET /auth/resource-protegee` : Exemple de ressource protégée par authentification.
- `GET /auth/resource-admin` : Exemple de ressource protégée par authentification et autorisation (réservée aux administrateurs).

## Personnalisation

Vous pouvez personnaliser ce système d'authentification en fonction de vos besoins spécifiques, notamment en ajoutant des champs d'utilisateur supplémentaires, des rôles d'utilisateur, et en adaptant la logique d'autorisation.

## Contributeurs

- [Alex Simisi Nta](https://github.com/alexdevops007)

## Licence

Ce projet est sous licence [MIT](LICENSE).
