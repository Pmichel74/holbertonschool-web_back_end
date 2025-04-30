# 🗂️ Deletion-Resilient Hypermedia Pagination

[![Python](https://img.shields.io/badge/python-3.7%2B-blue)](https://www.python.org/)
[![CSV](https://img.shields.io/badge/format-CSV-green)](https://en.wikipedia.org/wiki/Comma-separated_values)
[![MIT License](https://img.shields.io/badge/license-MIT-yellow)](LICENSE)

A robust pagination implementation that handles dataset modifications during pagination operations.

## 📋 Table of Contents
- [🔍 Project Overview](#-project-overview)
- [✨ Features](#-features)
- [🛠️ Technologies](#-technologies)
- [📦 Installation](#-installation)
- [💻 Usage](#-usage)
- [📚 API Reference](#-api-reference)
- [📝 Examples](#-examples)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

## 🔍 Project Overview

This Python module implements deletion-resilient hypermedia pagination for a CSV dataset of popular baby names. It provides a consistent paginated interface even when items are removed from the underlying dataset, ensuring that users don't miss data or see duplicates when paginating through changing content.

## ✨ Features

- ⚡ Resilient pagination using index-based lookup
- 🚀 Cached CSV dataset for improved performance
- 🔄 Hypermedia response containing metadata and page data
- 🛡️ Handles deletions during pagination without breaking
- 📊 Consistent data retrieval even with changing datasets

## 🛠️ Technologies

- Python 3.7+
- CSV data processing
- RESTful API design principles
- Hypermedia pagination

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>
cd holbertonschool-web_back_end/pagination

# (Optional) Create a virtual environment
python3 -m venv venv
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

## 💻 Usage

```python
from 3-hypermedia_del_pagination import Server

# Initialize server
server = Server()

# Fetch a page (starting at index 0, 10 items per page)
response = server.get_hyper_index(index=0, page_size=10)
print(response)

# Fetch the next page using the next_index
next_page = server.get_hyper_index(
    index=response.get('next_index'),
    page_size=10
)
```

## 📚 API Reference

### `get_hyper_index(index: int, page_size: int) -> dict`

Fetches a page of data with hypermedia pagination that's resilient to deletions.

- **Parameters**:
  - `index` (int): 0-based start index for pagination.
  - `page_size` (int): Number of items to return.

- **Returns**: A dictionary with the following keys:
  - `index`: Original start index.
  - `next_index`: Index to use for the next page, or `None` if at end.
  - `page_size`: Number of items returned.
  - `data`: List of dataset rows (each row is a list of strings).

## 📝 Examples

Run the example script to see the pagination in action:

```bash
$ python3 3-hypermedia_del_pagination.py
```

Example output:
```
{'index': 0, 'data': [...], 'page_size': 10, 'next_index': 10}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.
