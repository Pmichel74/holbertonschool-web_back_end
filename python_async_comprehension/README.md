# Python Async Comprehension 🐍⚡

![Python Logo](https://img.shields.io/badge/python-v3.7%2B-blue?logo=python)
![Async](https://img.shields.io/badge/Async-Comprehension-yellow)
![License](https://img.shields.io/badge/license-MIT-green)

> A deep dive into Python's asynchronous comprehensions and generators for efficient concurrent programming.

## 📋 Table of Contents

- [Description](#-description)
- [Prerequisites](#-prerequisites)
- [Project Structure](#-project-structure)
- [Features](#-features)
- [Installation](#-installation)
- [Usage](#-usage)
- [Code Explanation](#-code-explanation)
- [Key Concepts](#-key-concepts)
- [Author](#-author)
- [License](#-license)

## 📝 Description

This project explores advanced asynchronous programming concepts in Python, focusing on async comprehensions and generators. It demonstrates how to collect data asynchronously, process this data using async comprehensions, and measure the performance of parallel asynchronous operations.

## 🔧 Prerequisites

- Python 3.7 or higher
- Asyncio module
- Basic knowledge of asynchronous programming

## 📁 Project Structure

```
python_async_comprehension/
├── 0-async_generator.py     # Asynchronous generator producing random numbers
├── 1-async_comprehension.py # Async comprehension collecting numbers
├── 2-measure_runtime.py     # Performance measurement of parallel operations
└── README.md                # Project documentation
```

## ⚙️ Features

- **Async Generator** - Produces random numbers asynchronously
- **Async Comprehension** - Collects data from asynchronous generators
- **Parallel Execution** - Demonstrates the benefits of parallel asynchronous execution
- **Performance Measurement** - Analyzes performance gains through asynchronism

## 🚀 Installation

To use this project, simply clone the repository and ensure you have Python 3.7+ installed:

```bash
git clone <repository-url>
cd python_async_comprehension
```

## 🖥️ Usage

You can run each file individually to see the results:

```bash
python3 0-main.py  # To test the async generator
```

## 📚 Code Explanation

### 1. Async Generator (0-async_generator.py)

This module implements an asynchronous generator that produces 10 random numbers between 0 and 10, with a 1-second delay between each number.

```python
async def async_generator() -> Generator[float, None, None]:
    for i in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
```

### 2. Async Comprehension (1-async_comprehension.py)

This module uses an asynchronous comprehension to collect 10 random numbers from the async generator.

```python
async def async_comprehension() -> List[float]:
    return [i async for i in async_generator()]
```

### 3. Performance Measurement (2-measure_runtime.py)

This module measures the time required to execute four async comprehensions in parallel.

```python
async def measure_runtime() -> float:
    start_time = time.time()
    tasks = [asyncio.create_task(async_comprehension()) for _ in range(4)]
    await asyncio.gather(*tasks)
    return time.time() - start_time
```

## 🔑 Key Concepts

- **Coroutines** - Asynchronous functions that can be suspended and resumed
- **Async Generators** - Generators that use `async/await` with `yield`
- **Async Comprehension** - Elegant syntax for creating collections from async generators
- **asyncio.gather()** - Parallel execution of coroutines
- **Concurrency vs Parallelism** - How asynchronism enables better resource utilization

## 👤 Author

- **Holberton School**

## 📄 License

This project is under the MIT License - see the LICENSE file for details.

---

⭐ **Developed as part of the Holberton School curriculum** ⭐