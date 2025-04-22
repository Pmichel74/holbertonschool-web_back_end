# 🐍 Python Variable Annotations

![Python](https://img.shields.io/badge/Python-3.7+-blue.svg)
![Type Checking](https://img.shields.io/badge/Type%20Checking-mypy-green.svg)
![PEP 8](https://img.shields.io/badge/code%20style-PEP8-orange.svg)

This project demonstrates the use of Python type annotations following [PEP 484](https://peps.python.org/pep-0484/) and [PEP 526](https://peps.python.org/pep-0526/). Type annotations help catch certain errors during development and improve code documentation and maintainability.

## 📋 Table of Contents

- [🔧 Requirements](#-requirements)
- [🚀 Installation](#-installation)
- [📁 Files](#-files)
- [📖 Usage](#-usage)
- [🧪 Examples](#-examples)
- [📚 Resources](#-resources)
- [👨‍💻 Author](#-author)

## 🔧 Requirements

- Python 3.7+
- mypy (optional, for type checking)

## 🚀 Installation

Clone the repository:

```bash
git clone [your-repo-url]
cd python_variable_annotations
```

## 📁 Files

This project includes the following files:

| File | Description |
|------|-------------|
| [0-add.py](0-add.py) | Function that adds two floats and returns their sum |
| [1-concat.py](1-concat.py) | Function that concatenates two strings |
| [2-floor.py](2-floor.py) | Function that takes a float and returns its floor |
| [3-to_str.py](3-to_str.py) | Function that returns the string representation of a float |
| [4-define_variables.py](4-define_variables.py) | Variables with specific types and values |
| [5-sum_list.py](5-sum_list.py) | Function that returns the sum of a list of floats |
| [6-sum_mixed_list.py](6-sum_mixed_list.py) | Function that returns the sum of a list containing integers and floats |
| [7-to_kv.py](7-to_kv.py) | Function that converts a key and value to a tuple |
| [8-make_multiplier.py](8-make_multiplier.py) | Function that returns a function that multiplies a float by a multiplier |
| [9-element_length.py](9-element_length.py) | Function that returns a list with the length of elements |

## 📖 Usage

You can use the functions in this project by importing them:

```python
from 0-add import add

result = add(1.0, 2.0)
print(result)  # Output: 3.0
```

For type checking, you can use mypy:

```bash
mypy 0-add.py
```

## 🧪 Examples

### Example 1: Adding two floats

```python
from 0-add import add

print(add(1.11, 2.22))  # Output: 3.33
```

### Example 2: Concatenating two strings

```python
from 1-concat import concat

print(concat("Hello", "World"))  # Output: HelloWorld
```

### Example 3: Floor of a float

```python
from 2-floor import floor

print(floor(3.14))  # Output: 3
```

## 📚 Resources

- [Python 3 typing documentation](https://docs.python.org/3/library/typing.html)
- [PEP 484 – Type Hints](https://peps.python.org/pep-0484/)
- [PEP 526 – Syntax for Variable Annotations](https://peps.python.org/pep-0526/)
- [mypy documentation](https://mypy.readthedocs.io/en/stable/)

## 👨‍💻 Author

- Patrick MICHEL - [GitHub Profile](https://github.com/Pmichel74)