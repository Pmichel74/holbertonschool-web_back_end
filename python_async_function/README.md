# 🚀 Python Async Function Project

![Python](https://img.shields.io/badge/Python-3.7%2B-blue)
![Asyncio](https://img.shields.io/badge/Asyncio-Featured-green)
![Holberton School](https://img.shields.io/badge/Holberton-School-red)

## 📋 Table of Contents

- [🚀 Python Async Function Project](#-python-async-function-project)
  - [📋 Table of Contents](#-table-of-contents)
  - [📝 Description](#-description)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [🛠️ Technologies Used](#️-technologies-used)
  - [🗂️ Project Structure](#️-project-structure)
  - [📚 Key Concepts](#-key-concepts)
    - [Async/Await](#asyncawait)
    - [Coroutines](#coroutines)
    - [Asynchronous Tasks](#asynchronous-tasks)
  - [🏃‍♂️ How to Run](#️-how-to-run)
  - [📊 Code Examples](#-code-examples)
  - [📁 Project Files](#-project-files)
  - [👨‍💻 Author](#-author)
  - [📄 License](#-license)

## 📝 Description

This project explores Python's asynchronous features, with a focus on using the `asyncio` module. It implements various asynchronous functions to demonstrate fundamental concepts of asynchronous programming, including coroutines, parallel execution, and performance measurement.

## 🎯 Learning Objectives

- Understand how `async` and `await` work in Python
- Master asynchronous coroutine execution
- Create and manage asynchronous tasks with `asyncio.create_task`
- Measure the performance of asynchronous operations
- Implement efficient concurrent functions

## 🛠️ Technologies Used

- Python 3.7+
- Asyncio module
- Type annotations
- Random module

## 🗂️ Project Structure

- **0-basic_async_syntax.py**: Basic asynchronous function that waits for a random delay
- **1-concurrent_coroutines.py**: Concurrent execution of multiple coroutines
- **2-measure_runtime.py**: Measuring execution time of asynchronous functions
- **3-tasks.py**: Creating and managing asynchronous tasks
- **4-tasks.py**: Enhanced version using asyncio tasks

## 📚 Key Concepts

### Async/Await

The `async` and `await` keywords enable writing asynchronous code in a synchronous manner, making the code more readable and maintainable.

### Coroutines

Coroutines are special functions that can be suspended and resumed later, enabling non-blocking code execution.

### Asynchronous Tasks

Tasks (`asyncio.Task`) are used to schedule coroutines for concurrent execution within the asyncio event loop.

## 🏃‍♂️ How to Run

1. Make sure you have Python 3.7 or higher installed
2. Run each file individually:

```bash
python3 0-basic_async_syntax.py
python3 1-concurrent_coroutines.py
# etc.
```

## 📊 Code Examples

Here's a simple example of an asynchronous function:

```python
import asyncio
import random

async def wait_random(max_delay: int = 10) -> float:
    """Wait for a random delay between 0 and max_delay seconds."""
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay

# To execute this function:
if __name__ == "__main__":
    print(asyncio.run(wait_random(5)))
```

## 📁 Project Files

Click on the links below to navigate to each script in the project:

- [0-basic_async_syntax.py](./0-basic_async_syntax.py) - Basic asynchronous function that waits for a random delay
- [1-concurrent_coroutines.py](./1-concurrent_coroutines.py) - Concurrent execution of multiple coroutines
- [2-measure_runtime.py](./2-measure_runtime.py) - Measuring execution time of asynchronous functions
- [2-main.py](./2-main.py) - Test script for measure_runtime
- [3-tasks.py](./3-tasks.py) - Creating and managing asynchronous tasks
- [4-tasks.py](./4-tasks.py) - Enhanced version using asyncio tasks
- [4-main.py](./4-main.py) - Test script for tasks implementation

## 👨‍💻 Author

- **Patrick MICHEL** - [Your GitHub Profile](https://github.com/Pmichel74)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.