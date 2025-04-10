# ES6 Promises 🔄

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![ES6](https://img.shields.io/badge/ES6-2C2D72?style=for-the-badge&logo=javascript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

This project focuses on using Promises in JavaScript ES6, a powerful feature for handling asynchronous operations.

## 📑 Table of Contents
- [ES6 Promises 🔄](#es6-promises-)
  - [📝 Description](#-description)
  - [🛠️ Technologies](#️-technologies)
  - [📂 Files and Features](#-files-and-features)
  - [💻 Installation](#-installation)
  - [🚦 Usage](#-usage)
  - [📊 Examples](#-examples)
  - [👤 Author](#-author)

## 📝 Description

This project explores the use of Promises in JavaScript ES6, allowing for efficient management of asynchronous operations. Promises are an essential tool for avoiding "callback hell" and making asynchronous code more readable and maintainable. The project covers creating Promises, chaining them, error handling, and using methods like `Promise.all`.

## 🛠️ Technologies

- JavaScript ES6+
- Node.js
- Babel (for transpilation)
- ESLint (for linting)

## 📂 Files and Features

| File | Description |
|---------|-------------|
| [0-promise.js](./0-promise.js) | Creating a simple Promise |
| [1-promise.js](./1-promise.js) | Promise with conditional resolution |
| [2-then.js](./2-then.js) | Manipulating then/catch/finally handlers |
| [3-all.js](./3-all.js) | Using Promise.all to handle multiple promises |
| [4-user-promise.js](./4-user-promise.js) | Promise returning a user object |
| [5-photo-reject.js](./5-photo-reject.js) | Handling Promise rejections |
| [6-final-user.js](./6-final-user.js) | Combining multiple Promises for user data |
| [7-load_balancer.js](./7-load_balancer.js) | Implementing a load balancer with Promise.race |
| [8-try.js](./8-try.js) | Error handling with try/catch blocks |
| [9-try.js](./9-try.js) | Advanced exception handling |

## 💻 Installation

```bash
# Clone the repository
git clone https://github.com/your-name/holbertonschool-web_back_end.git

# Navigate to the project directory
cd holbertonschool-web_back_end/ES6_promise

# Install dependencies
npm install
```

## 🚦 Usage

Promises can be used to handle asynchronous operations like API requests, file operations, etc. Here's how to use the functions in this project:

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

## 📊 Examples

### Example 1: Creating a Simple Promise

```javascript
import getResponseFromAPI from './0-promise.js';

const response = getResponseFromAPI();
console.log(response instanceof Promise); // true
```

### Example 2: Using Promise.all

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

### Example 3: Error Handling

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

## 👤 Author

- **Patrick MICHEL** - [GitHub Profile](https://github.com/Pmichel74)
