# ES6 Promises 🔄

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![ES6](https://img.shields.io/badge/ES6-2C2D72?style=for-the-badge&logo=javascript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

Ce projet se concentre sur l'utilisation des Promises en JavaScript ES6, une fonctionnalité puissante pour gérer les opérations asynchrones.

## 📑 Table des matières
- [ES6 Promises 🔄](#es6-promises-)
  - [📝 Description](#-description)
  - [🛠️ Technologies](#️-technologies)
  - [📂 Fichiers et Fonctionnalités](#-fichiers-et-fonctionnalités)
  - [💻 Installation](#-installation)
  - [🚦 Utilisation](#-utilisation)
  - [📊 Exemples](#-exemples)
  - [👤 Auteur](#-auteur)

## 📝 Description

Ce projet explore l'utilisation des Promises en JavaScript ES6, permettant de gérer efficacement les opérations asynchrones. Les Promises sont un outil essentiel pour éviter le "callback hell" et rendre le code asynchrone plus lisible et maintenable. Le projet couvre la création de Promises, leur chaînage, la gestion des erreurs et l'utilisation de méthodes comme `Promise.all`.

## 🛠️ Technologies

- JavaScript ES6+
- Node.js
- Babel (pour la transpilation)
- ESLint (pour le linting)

## 📂 Fichiers et Fonctionnalités

| Fichier | Description |
|---------|-------------|
| [0-promise.js](./0-promise.js) | Création d'une Promise simple |
| [1-promise.js](./1-promise.js) | Promise avec résolution conditionnelle |
| [2-then.js](./2-then.js) | Manipulation des handlers then/catch/finally |
| [3-all.js](./3-all.js) | Utilisation de Promise.all pour gérer plusieurs promesses |
| [4-user-promise.js](./4-user-promise.js) | Promise retournant un objet utilisateur |
| [5-photo-reject.js](./5-photo-reject.js) | Gestion des rejets de Promise |
| [6-final-user.js](./6-final-user.js) | Combinaison de plusieurs Promises pour des données utilisateur |
| [7-load_balancer.js](./7-load_balancer.js) | Implémentation d'un équilibreur de charge avec Promise.race |
| [8-try.js](./8-try.js) | Gestion des erreurs avec les blocs try/catch |
| [9-try.js](./9-try.js) | Gestion avancée des exceptions |

## 💻 Installation

```bash
# Cloner le dépôt
git clone https://github.com/votre-nom/holbertonschool-web_back_end.git

# Naviguer vers le répertoire du projet
cd holbertonschool-web_back_end/ES6_promise

# Installer les dépendances
npm install
```

## 🚦 Utilisation

Les promesses peuvent être utilisées pour gérer des opérations asynchrones comme les requêtes API, les opérations de fichiers, etc. Voici comment utiliser les fonctions de ce projet:

```javascript
import getResponseFromAPI from './0-promise.js';

const promise = getResponseFromAPI();
promise
  .then((response) => {
    console.log('API response received');
  })
  .catch((error) => {
    console.log('Error occurred:', error);
  });
```

## 📊 Exemples

### Exemple 1: Création d'une Promise simple

```javascript
import getResponseFromAPI from './0-promise.js';

const response = getResponseFromAPI();
console.log(response instanceof Promise); // true
```

### Exemple 2: Utilisation de Promise.all

```javascript
import uploadPhoto from './utils.js';
import createUser from './utils.js';
import handleProfileSignup from './3-all.js';

handleProfileSignup()
  .then((result) => {
    console.log('Profile signup successful');
  })
  .catch((error) => {
    console.log('Error during profile signup');
  });
```

### Exemple 3: Gestion des erreurs

```javascript
import handleProfileSignup from './6-final-user.js';

handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg")
  .then((data) => {
    console.log('Profile data:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
```

## 👤 Auteur

- **Patrick MICHEL** - [GitHub Profile](https://github.com/Pmichel74)
