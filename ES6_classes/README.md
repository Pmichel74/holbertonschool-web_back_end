# ES6 Classes Project 🚀

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow.svg)
![Babel](https://img.shields.io/badge/Babel-7.0-blue.svg)
![Node](https://img.shields.io/badge/Node-14.x-green.svg)

A project focused on understanding and implementing ES6 classes in JavaScript.

## Table of Contents
- [Description](#description)
- [Requirements](#requirements)
- [Installation and Setup](#installation-and-setup)
- [Learning Objectives](#learning-objectives)
- [Tasks](#tasks)
- [Usage](#usage)
- [Author](#author)

## Description
This project explores ES6 classes, one of the major additions to JavaScript in the ES6 specification. ES6 classes provide a much simpler and clearer syntax to create objects and handle inheritance.

## Requirements
* All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
* Allowed editors: vi, vim, emacs, Visual Studio Code
* All files should end with a new line
* A README.md file at the root of the folder is mandatory
* Code should use the JS standard
* Code will be tested using Jest and the command `npm run test`
* Code will be verified against lint using ESLint
* All functions must be exported

## Installation and Setup
```bash
# Install dependencies
npm install
# Run tests
npm run test
# Lint code
npm run lint
```

## Learning Objectives
* How to define a Class
* How to add methods to a class
* Why and how to add a static method to a class
* How to extend a class from another
* Metaprogramming and symbols
* Understanding getters and setters

## Tasks
The project includes multiple tasks to implement various ES6 class concepts:
- Class creation and initialization
- Static methods
- Extending classes
- Implementing getters/setters
- Symbol usage in classes
- Private properties

### 0. You used to attend a place like this at some point
Implement a class named `ClassRoom`:
- Constructor accepts `maxStudentsSize` (Number) and assigns it to `_maxStudentsSize`

```javascript
import ClassRoom from "./0-classroom.js";
const room = new ClassRoom(10);
console.log(room._maxStudentsSize); // 10
```

### 1. Let's make some classrooms
Import the `ClassRoom` class from `0-classroom.js`.
Implement a function named `initializeRooms`:
- Returns an array of 3 `ClassRoom` objects with sizes 19, 20, and 34

```javascript
import initializeRooms from './1-make_classrooms.js';

console.log(initializeRooms());
```

### 2. A Course, Getters, and Setters
Implement a class named `HolbertonCourse`:
- Constructor attributes: `name` (String), `length` (Number), `students` (array of Strings)
- Make sure the type of attributes is verified
- Each attribute must be stored in an "underscore" attribute version (ex: `name` is stored in `_name`)
- Implement getters and setters for each attribute

```javascript
import HolbertonCourse from "./2-hbtn_course.js";

const c1 = new HolbertonCourse("ES6", 1, ["Bob", "Jane"]);
console.log(c1.name); // ES6
c1.name = "Python 101";
console.log(c1.name); // Python 101
```

### 3. Methods, static methods, computed methods names..... MONEY
Implement a class named `Currency`:
- Constructor attributes: `code` (String), `name` (String)
- Each attribute must be stored with an underscore prefix
- Implement getters and setters for each attribute
- Implement a method named `displayFullCurrency` that returns the attributes in the format `name (code)`

```javascript
import Currency from "./3-currency.js";

const dollar = new Currency('$', 'Dollars');
console.log(dollar.displayFullCurrency()); // Dollars ($)
```

### 4. Pricing
Import the `Currency` class from `3-currency.js`.
Implement a class named `Pricing`:
- Constructor attributes: `amount` (Number), `currency` (Currency)
- Each attribute must be stored with an underscore prefix
- Implement getters and setters for each attribute
- Implement a method named `displayFullPrice` that returns the attributes in the format `amount currency_name (currency_code)`
- Implement a static method named `convertPrice` that accepts `amount` and `conversionRate` as arguments and returns the amount multiplied by the conversion rate

```javascript
import Pricing from './4-pricing.js';
import Currency from './3-currency.js';

const p = new Pricing(100, new Currency("EUR", "Euro"));
console.log(p.displayFullPrice()); // 100 Euro (EUR)
```

### 5. A Building
Implement a class named `Building`:
- Constructor attributes: `sqft` (Number)
- Each attribute must be stored with an underscore prefix
- Implement getter for the attribute
- Consider this class as an abstract class, any class that extends from it should implement a method named `evacuationWarningMessage`
- If a class that extends from it does not implement the method, throw an error

```javascript
import Building from './5-building.js';

const b = new Building(100);
console.log(b.sqft); // 100
```

### 6. Inheritance
Import `Building` from `5-building.js`.
Implement a class named `SkyHighBuilding` that extends from `Building`:
- Constructor attributes: `sqft` (Number), `floors` (Number)
- Each attribute must be stored with an underscore prefix
- Implement getters for each attribute
- Override the method `evacuationWarningMessage` and return a string containing the floors number

```javascript
import SkyHighBuilding from './6-sky_high.js';

const building = new SkyHighBuilding(140, 60);
console.log(building.sqft); // 140
console.log(building.floors); // 60
console.log(building.evacuationWarningMessage()); // Evacuate slowly the 60 floors
```

### 7. Airport
Implement a class named `Airport`:
- Constructor attributes: `name` (String), `code` (String)
- Each attribute must be stored with an underscore prefix
- Override the default string representation of the class to return the airport code

```javascript
import Airport from "./7-airport.js";

const airportSF = new Airport('San Francisco Airport', 'SFO');
console.log(airportSF); // SFO
console.log(airportSF.toString()); // SFO
```

### 8. Primitive - Holberton Class
Implement a class named `HolbertonClass`:
- Constructor attributes: `size` (Number), `location` (String)
- Each attribute must be stored with an underscore prefix
- When the class is cast into a Number, it should return the size
- When the class is cast into a String, it should return the location

```javascript
import HolbertonClass from "./8-hbtn_class.js";

const hc = new HolbertonClass(12, "Mezzanine");
console.log(Number(hc)); // 12
console.log(String(hc)); // Mezzanine
```

### 9. Hoisting
Fix the code and make it work:

```javascript
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

export class HolbertonClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }
}

const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

export class StudentHolberton {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get holbertonClass() {
    return this._holbertonClass;
  }

  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}

export const listOfStudents = [student1, student2, student3, student4, student5];
```

### 10. Vroom
Implement a class named `Car`:
- Constructor attributes: `brand` (String), `motor` (String), `color` (String)
- Each attribute must be stored with an underscore prefix
- Add a method named `cloneCar` that returns a new object of the class

```javascript
import Car from "./10-car.js";

const bmw = new Car('BMW', 'Turbo', 'red');
const ferrari = bmw.cloneCar();

console.log(bmw); // Car { _brand: 'BMW', _motor: 'Turbo', _color: 'red' }
console.log(ferrari); // Car { _brand: undefined, _motor: undefined, _color: undefined }
console.log(bmw instanceof Car); // true
console.log(ferrari instanceof Car); // true
```

## Usage
Examples of how to use the implemented classes:
```javascript
import ClassRoom from './0-classroom.js';

const room = new ClassRoom(10);
console.log(room._maxStudentsSize);
```

## Author
[Patrick MICHEL] - [Pmichel74]
