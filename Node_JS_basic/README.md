# 🚀 Node.js Basic - Holberton School

<div align="center">

![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

**A Node.js learning project covering the fundamentals of backend development**

</div>

---

## 📚 Table of Contents

- [📋 Project Description](#-project-description)
- [🎯 Learning Objectives](#-learning-objectives)
- [🛠️ Technologies Used](#️-technologies-used)
- [📁 Project Structure](#-project-structure)
- [🚀 Installation & Setup](#-installation--setup)
- [📘 Exercises & Tasks](#-exercises--tasks)
  - [Task 0: Console I/O](#task-0-console-io)
  - [Task 1: Standard Input](#task-1-standard-input)
  - [Task 2: Synchronous File Reading](#task-2-synchronous-file-reading)
  - [Task 3: Asynchronous File Reading](#task-3-asynchronous-file-reading)
  - [Task 4: Simple HTTP Server](#task-4-simple-http-server)
  - [Task 5: HTTP Server with Routing](#task-5-http-server-with-routing)
  - [Task 6: Simple Express Server](#task-6-simple-express-server)
  - [Task 7: Advanced Express Server](#task-7-advanced-express-server)
  - [Task 8: Full Server](#task-8-full-server)
- [🧪 Tests](#-tests)
- [📊 Database](#-database)
- [⚙️ Configuration](#️-configuration)
- [📖 Usage](#-usage)
- [👥 Contributors](#-contributors)
- [📄 License](#-license)

---

## 📋 Project Description

This project is part of the **Holberton School** curriculum and covers the fundamentals of backend development with **Node.js**. It progressively explores Node.js features, from basic I/O operations to building a complete web server with Express.js.

The project is structured as a series of exercises to learn:
- Node.js input/output operations
- File manipulation (synchronous and asynchronous)
- Creating native HTTP servers
- Using the Express.js framework
- Routing and controllers
- Handling CSV data

## 🎯 Learning Objectives

By the end of this project, you will be able to:

- ✅ Run JavaScript with Node.js
- ✅ Use Node.js modules
- ✅ Read and write files synchronously and asynchronously
- ✅ Create a simple HTTP server with the native `http` module
- ✅ Build a web server with Express.js
- ✅ Implement routes and controllers
- ✅ Handle CSV data
- ✅ Use Babel for ES6+ transpilation
- ✅ Configure ESLint for code style

## 🛠️ Technologies Used

| Technology | Version | Description |
|-------------|---------|-------------|
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white) | Latest | JavaScript runtime |
| ![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white) | ^4.17.1 | Web framework |
| ![Babel](https://img.shields.io/badge/Babel-F9DC3E?style=flat&logo=babel&logoColor=black) | ^6.26.0 | JavaScript transpiler |
| ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=eslint&logoColor=white) | ^6.8.0 | JavaScript linter |
| ![Mocha](https://img.shields.io/badge/Mocha-8D6748?style=flat&logo=mocha&logoColor=white) | ^6.2.3 | Test framework |
| ![Chai](https://img.shields.io/badge/Chai-A30701?style=flat&logo=chai&logoColor=white) | ^4.4.1 | Assertion library |

## 📁 Project Structure

```
Node_JS_basic/
├── 📄 0-console.js              # Console output
├── 📄 1-stdin.js                # Standard input
├── 📄 2-read_file.js            # Synchronous file reading
├── 📄 3-read_file_async.js      # Asynchronous file reading
├── 📄 4-http.js                 # Simple HTTP server
├── 📄 5-http.js                 # HTTP server with routing
├── 📄 6-http_express.js         # Simple Express server
├── 📄 7-http_express.js         # Advanced Express server
├── 📊 database.csv              # Student database
├── 📁 full_server/              # Full server
│   ├── 📄 server.js            # Entry point
│   ├── 📄 utils.js             # Utilities
│   ├── 📁 controllers/         # Controllers
│   │   ├── 📄 AppController.js
│   │   └── 📄 StudentsController.js
│   └── 📁 routes/              # Routes
│       └── 📄 index.js
├── 📁 test/                     # Tests
│   └── 📄 server.test.js
├── ⚙️ package.json             # NPM configuration
├── ⚙️ .babelrc                 # Babel configuration
├── ⚙️ .eslintrc.js             # ESLint configuration
└── 📖 README.md                # Documentation
```

## 🚀 Installation & Setup

### Prerequisites

- ![Node.js](https://img.shields.io/badge/Node.js-12%2B-green) Node.js version 12 or higher
- ![npm](https://img.shields.io/badge/npm-6%2B-red) npm version 6 or higher

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Node_JS_basic
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Verify installation**
   ```bash
   npm run check-lint
   npm test
   ```

## 📘 Exercises & Tasks

### Task 0: Console I/O
**File:** `0-console.js`

Simple function to display a message in the console.

```javascript
function displayMessage(message) {
  console.log(message);
}
```

**Test:**
```bash
node 0-main.js
```

---

### Task 1: Standard Input
**File:** `1-stdin.js`

Interactive program that asks the user's name via standard input.

**Features:**
- 💬 Prompts for the user's name
- 📝 Displays the entered name
- 👋 Closing message

**Test:**
```bash
node 1-stdin.js
```

---

### Task 2: Synchronous File Reading
**File:** `2-read_file.js`

Function that reads and parses a CSV file synchronously.

**Features:**
- 📊 Counts the total number of students
- 🏫 Groups students by field
- 📈 Displays statistics

**Usage:**
```javascript
countStudents('database.csv');
```

---

### Task 3: Asynchronous File Reading
**File:** `3-read_file_async.js`

Asynchronous version of the CSV file reading function.

**Advantages:**
- ⚡ Non-blocking
- 🔄 Uses Promises
- 🛡️ Improved error handling

---

### Task 4: Simple HTTP Server
**File:** `4-http.js`

Basic HTTP server using the native `http` module.

**Features:**
- 🌐 Listens on port 1245
- 📤 Responds "Hello Holberton School!" to all requests

**Start:**
```bash
node 4-http.js
```

---

### Task 5: HTTP Server with Routing
**File:** `5-http.js`

HTTP server with basic routing and CSV reading integration.

**Routes:**
- `GET /` - Welcome message
- `GET /students` - List of students

---

### Task 6: Simple Express Server
**File:** `6-http_express.js`

Introduction to Express.js with a simple server.

**Express Advantages:**
- 🚀 Simplified setup
- 🛣️ Easier routing
- 🔌 Built-in middleware

---

### Task 7: Advanced Express Server
**File:** `7-http_express.js`

Express server with multiple routes and CSV integration.

**Available routes:**
- `GET /` - Home page
- `GET /students` - All students
- `GET /students/:major` - Students by field

---

### Task 8: Full Server
**Folder:** `full_server/`

Full architecture with separation of concerns.

**Architecture:**
```
full_server/
├── server.js           # Entry point
├── utils.js           # Utility functions
├── controllers/       # Business logic
└── routes/           # Route definitions
```

**Features:**
- 🏗️ MVC architecture
- 🔄 Reusable code
- 📦 Separated modules
- 🧪 Testable

## 🧪 Tests

The project includes a complete test suite using Mocha and Chai.

### Run all tests
```bash
npm test
```

### Run tests with linting
```bash
npm run full-test
```

### Available tests
- ✅ Unit tests for each function
- ✅ Integration tests for servers
- ✅ Data validation tests

## 📊 Database

The `database.csv` file contains sample student data:

| Field | Description |
|-------|-------------|
| `firstname` | Student's first name |
| `lastname` | Last name |
| `age` | Age |
| `field` | Field of study (CS/SWE) |

**Available fields:**
- 💻 **CS** (Computer Science)
- 🛠️ **SWE** (Software Engineering)

## ⚙️ Configuration

### Babel Configuration (`.babelrc`)
```json
{
  "presets": ["env"]
}
```

### ESLint Configuration (`.eslintrc.js`)
- Airbnb code style
- ES6+ rules
- Node.js configuration

### NPM Scripts
| Script | Description |
|--------|-------------|
| `npm run lint` | Checks code style |
| `npm test` | Runs tests |
| `npm run dev` | Development mode with Nodemon |
| `npm run full-test` | Lint + Tests |

## 📖 Usage

### Start a server
```bash
# Simple HTTP server
node 4-http.js

# Express server
node 6-http_express.js

# Full server
cd full_server && npm run dev
```

### Test endpoints
```bash
# Home page
curl http://localhost:1245/

# List of students
curl http://localhost:1245/students

# CS students
curl http://localhost:1245/students/CS
```

## 👥 Contributors

- **Holberton School** - Curriculum and specifications
- **Patrick MICHEL** - Implementation and development

## 📄 License

This project is carried out as part of the Holberton School curriculum. All rights reserved.

---

<div align="center">

**Made with ❤️ at Holberton School**

![Holberton](https://img.shields.io/badge/School-Holberton-red?style=flat&logo=holberton&logoColor=white)

</div>
