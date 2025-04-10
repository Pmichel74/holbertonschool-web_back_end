# ES6 Data Manipulation 🚀

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![ES6](https://img.shields.io/badge/ES6-2C2D72?style=for-the-badge&logo=javascript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

This project focuses on data manipulation in JavaScript ES6, using the latest features like array methods, typed arrays, and Set and Map data structures.

## 📑 Table of Contents
- [ES6 Data Manipulation 🚀](#es6-data-manipulation-)
  - [📝 Description](#-description)
  - [🛠️ Technologies](#️-technologies)
  - [📂 Files and Features](#-files-and-features)
  - [💻 Installation](#-installation)
  - [🚦 Usage](#-usage)
  - [📊 Examples](#-examples)
  - [👤 Author](#-author)

## 📝 Description

This project is a collection of JavaScript ES6 functions that demonstrate advanced data manipulation methods. These methods allow efficient filtering, mapping, reducing, and organizing data with more concise and readable code.

## 🛠️ Technologies

- JavaScript ES6+
- Node.js
- Babel
- ESLint

## 📂 Files and Features

| File | Description |
|---------|-------------|
| [0-get_list_students.js](./0-get_list_students.js) | Function that returns an array of student objects |
| [1-get_list_student_ids.js](./1-get_list_student_ids.js) | Function that returns an array of student IDs |
| [2-get_students_by_loc.js](./2-get_students_by_loc.js) | Filtering students by location |
| [3-get_ids_sum.js](./3-get_ids_sum.js) | Sum of student IDs |
| [4-update_grade_by_city.js](./4-update_grade_by_city.js) | Updating student grades by city |
| [5-typed_arrays.js](./5-typed_arrays.js) | Creating and manipulating typed arrays |
| [6-set.js](./6-set.js) | Operations on the Set data structure |
| [7-has_array_values.js](./7-has_array_values.js) | Checking for the presence of values in an array |
| [8-clean_set.js](./8-clean_set.js) | Cleaning values from a Set |
| [9-groceries_list.js](./9-groceries_list.js) | Using Map to represent a grocery list |
| [10-update_uniq_items.js](./10-update_uniq_items.js) | Updating unique values in a Map |

## 💻 Installation

```bash
# Clone the repository
git clone https://github.com/your-name/holbertonschool-web_back_end.git

# Navigate to the project directory
cd holbertonschool-web_back_end/ES6_data_manipulation

# Install dependencies
npm install
```

## 🚦 Usage

The functions can be imported and used in other JavaScript files:

```javascript
import getListStudents from './0-get_list_students.js';
import getListStudentIds from './1-get_list_student_ids.js';

const students = getListStudents();
const studentIds = getListStudentIds(students);

console.log(students);
console.log(studentIds);
```

## 📊 Examples

### Getting a list of students
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

### Filtering students by location
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

## 👤 Author

- **Patrick MICHEL** - [GitHub Profile](https://github.com/Pmichel74)
