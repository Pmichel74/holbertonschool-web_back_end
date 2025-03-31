# ES6 Basics Project 🚀

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow.svg)
![Node.js](https://img.shields.io/badge/Node.js-14.x-green.svg)
![Babel](https://img.shields.io/badge/Babel-7.x-blue.svg)

A collection of exercises focused on learning and practicing ES6 (ECMAScript 2015) features in JavaScript.

## Table of Contents

- [Description](#description)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Features Covered](#features-covered)
- [Tasks Overview](#tasks-overview)
- [Usage](#usage)
- [Testing](#testing)
- [Requirements](#requirements)
- [Author](#author)
- [License](#license)

## Description

This project contains various JavaScript exercises that demonstrate ES6 features and syntax. Each file focuses on specific ES6 concepts like arrow functions, block scoping, template literals, rest/spread operators, destructuring, and more.

## Project Structure

```
ES6_basic/
├── 0-constants.js - Const/let vs var
├── 1-block-scoped.js - Block scoping
├── 2-arrow.js - Arrow functions
├── 3-default-parameter.js - Default parameters
├── 4-rest-parameter.js - Rest parameter syntax
├── 5-spread-operator.js - Spread operator
├── 6-string-interpolation.js - Template literals
├── 7-getBudgetObject.js - Object property shorthand
├── 8-getBudgetCurrentYear.js - Computed property names
├── 9-getFullBudget.js - ES6 method properties
├── 10-loops.js - ES6 for...of loops
├── 11-createEmployeesObject.js - Object creation
├── 12-createReportObject.js - Object design pattern
└── *-main.js files - Test files for each task
```

## Setup and Installation

```bash
# Clone the repository
git clone [repository-url]

# Navigate to project directory
cd holbertonschool-web_back_end/ES6_basic

# Install dependencies
npm install

# Run babel to compile ES6 code (if needed)
npm run build

# Run tests
npm test
```

## Features Covered

- ✅ Constants and variables
- ✅ Block scoping
- ✅ Arrow functions
- ✅ Parameter defaults
- ✅ Rest parameters
- ✅ Spread syntax
- ✅ Template literals
- ✅ Object property shorthand
- ✅ Computed property names
- ✅ Method properties
- ✅ For...of loops
- ✅ Object creation patterns

## Tasks Overview

1. **Constants** - Using `const` and `let` for variable declaration
2. **Block Scoping** - Working with block scoped variables
3. **Arrow Functions** - Converting standard functions to arrow functions
4. **Default Parameters** - Setting default values for function parameters
5. **Rest Parameter** - Handling multiple arguments with rest syntax
6. **Spread Operator** - Using spread syntax for arrays and strings
7. **String Interpolation** - Using template literals
8. **Object Property Shorthand** - Simplified object property syntax
9. **Computed Property Names** - Dynamic property names in object literals
10. **ES6 Method Properties** - Enhanced method definition syntax
11. **For...of Loops** - Modern iteration with for...of
12. **Object Creation** - Creating objects with dynamic properties
13. **Object Design Pattern** - Advanced object patterns

## Usage

Each file can be executed independently to demonstrate a specific ES6 feature:

```bash
# Run a specific task
node 0-main.js
```

## Testing

Tests are provided for each task using Jest:

```bash
# Run all tests
npm test

# Run specific test
npm test 0-constants.test.js
```

## Requirements

- Node.js 12.x or higher
- Babel 7.x for transpiling ES6 code
- Jest for testing
- ESLint for code quality

## Author

- **Patrick MICHEL** - *Holberton School Student*

