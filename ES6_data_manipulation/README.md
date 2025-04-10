# ES6 Data Manipulation 🚀

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![ES6](https://img.shields.io/badge/ES6-2C2D72?style=for-the-badge&logo=javascript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

Ce projet se concentre sur la manipulation de données en JavaScript ES6, utilisant les dernières fonctionnalités comme les méthodes d'array, les typed arrays, les structures de données Set et Map.

## 📑 Table des matières
- [ES6 Data Manipulation 🚀](#es6-data-manipulation-)
  - [📝 Description](#-description)
  - [🛠️ Technologies](#️-technologies)
  - [📂 Fichiers et Fonctionnalités](#-fichiers-et-fonctionnalités)
  - [💻 Installation](#-installation)
  - [🚦 Utilisation](#-utilisation)
  - [📊 Exemples](#-exemples)
  - [👤 Auteur](#-auteur)

## 📝 Description

Ce projet est une collection de fonctions JavaScript ES6 qui démontrent l'utilisation avancée des méthodes de manipulation de données. Ces méthodes permettent de filtrer, de mapper, de réduire et d'organiser efficacement les données avec un code plus concis et lisible.

## 🛠️ Technologies

- JavaScript ES6+
- Node.js
- Babel
- ESLint

## 📂 Fichiers et Fonctionnalités

| Fichier | Description |
|---------|-------------|
| [0-get_list_students.js](./0-get_list_students.js) | Fonction qui retourne un array d'objets étudiants |
| [1-get_list_student_ids.js](./1-get_list_student_ids.js) | Fonction qui retourne un array d'IDs des étudiants |
| [2-get_students_by_loc.js](./2-get_students_by_loc.js) | Filtrage des étudiants par localité |
| [3-get_ids_sum.js](./3-get_ids_sum.js) | Somme des IDs des étudiants |
| [4-update_grade_by_city.js](./4-update_grade_by_city.js) | Mise à jour des notes des étudiants par ville |
| [5-typed_arrays.js](./5-typed_arrays.js) | Création et manipulation de typed arrays |
| [6-set.js](./6-set.js) | Opérations sur la structure de données Set |
| [7-has_array_values.js](./7-has_array_values.js) | Vérification de la présence de valeurs dans un array |
| [8-clean_set.js](./8-clean_set.js) | Nettoyage de valeurs d'un Set |
| [9-groceries_list.js](./9-groceries_list.js) | Utilisation de Map pour représenter une liste d'épicerie |
| [10-update_uniq_items.js](./10-update_uniq_items.js) | Mise à jour de valeurs uniques dans une Map |

## 💻 Installation

```bash
# Cloner le dépôt
git clone https://github.com/votre-nom/holbertonschool-web_back_end.git

# Naviguer vers le répertoire du projet
cd holbertonschool-web_back_end/ES6_data_manipulation

# Installer les dépendances
npm install
```

## 🚦 Utilisation

Les fonctions peuvent être importées et utilisées dans d'autres fichiers JavaScript:

```javascript
import getListStudents from './0-get_list_students.js';
import getListStudentIds from './1-get_list_student_ids.js';

const students = getListStudents();
const studentIds = getListStudentIds(students);

console.log(students);
console.log(studentIds);
```

## 📊 Exemples

### Obtenir une liste d'étudiants
```javascript
import getListStudents from './0-get_list_students.js';

const students = getListStudents();
console.log(students);
// [
//   { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
//   { id: 2, firstName: 'James', location: 'Columbia' },
//   { id: 5, firstName: 'Serena', location: 'San Francisco' },
// ]
```

### Filtrer les étudiants par localisation
```javascript
import getListStudents from './0-get_list_students.js';
import getStudentsByLocation from './2-get_students_by_loc.js';

const students = getListStudents();
const sfStudents = getStudentsByLocation(students, 'San Francisco');
console.log(sfStudents);
// [
//   { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
//   { id: 5, firstName: 'Serena', location: 'San Francisco' },
// ]
```

## 👤 Auteur

- **Patrick MICHEL** - [GitHub Profile](https://github.com/Pmichel74)
