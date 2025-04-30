# 📦✨ NoSQL Project - Holberton School

Welcome to the **NoSQL** project for Holberton School! This repository contains scripts and Python programs to help you learn and master MongoDB and NoSQL concepts.

---

## 🗂️ Table of Contents
- [📖 Description](#-description)
- [⚡ Features](#-features)
- [🛠️ Requirements](#-requirements)
- [🚀 Installation](#-installation)
- [🧑‍💻 Usage](#-usage)
- [📜 Available Scripts](#-available-scripts)
- [🧪 Testing](#-testing)
- [💡 Tips & Tricks](#-tips--tricks)
- [🔗 Useful Resources](#-useful-resources)
- [👨‍🎓 Authors](#-authors)

---

## 📖 Description
This project is part of the Holberton School Web Back-End curriculum. It focuses on:
- Understanding NoSQL databases
- Using MongoDB for data storage and retrieval
- Writing scripts to automate database operations
- Practicing aggregation, filtering, and updating documents

## ⚡ Features
- 🏷️ List, insert, update, and delete documents
- 📊 Log statistics and analytics for Nginx logs
- 🔍 Advanced queries with regular expressions
- 🥇 Top students ranking by average score
- 🛡️ Clean, well-documented, and easy-to-use scripts

## 🛠️ Requirements
- 🐍 Python 3.x
- 🍃 [MongoDB Community Server](https://www.mongodb.com/try/download/community)
- 📦 [pymongo](https://pymongo.readthedocs.io/en/stable/)

## 🚀 Installation
1. **Clone this repository:**
   ```bash
   git clone https://github.com/your-username/holbertonschool-web_back_end.git
   ```
2. **Install Python dependencies:**
   ```bash
   pip install -r requirements.txt
   ```
3. **Install MongoDB** and make sure it is running on the default port (`27017`).

## 🧑‍💻 Usage
- **MongoDB scripts:**
  ```bash
  cat 0-list_databases | mongo my_db
  ```
- **Python scripts:**
  ```bash
  python3 script_name.py
  ```

## 📜 Available Scripts
| Script                | Description                                      |
|-----------------------|--------------------------------------------------|
| `0-list_databases`    | 📚 List all MongoDB databases                    |
| `1-use_or_create_database` | 🏗️ Create or use the `my_db` database         |
| `2-insert`            | ➕ Insert a document into the `school` collection |
| `3-all`               | 📋 List all documents in the `school` collection |
| `4-match`             | 🔎 List documents with `name="Holberton school"`|
| `5-count`             | 🔢 Display the number of documents in `school`   |
| `6-update`            | 📝 Add an attribute to all matching documents    |
| `7-delete`            | ❌ Delete all matching documents                 |
| `100-find`            | 🕵️‍♂️ List documents whose name starts with "Holberton" |
| `12-log_stats.py`     | 📈 Show statistics about Nginx logs in MongoDB   |
| `102-log_stats.py`    | 🏆 Advanced Nginx log stats (top IPs)            |
| ...                   | And more advanced MongoDB scripts!               |

## 🧪 Testing
You can use the provided sample data (`dump.zip`) and restore it with:
```bash
mongorestore dump
```

## 💡 Tips & Tricks
- Use `printjson()` in MongoDB scripts for pretty output.
- Use aggregation pipelines for advanced analytics.
- Always end your MongoDB scripts with a newline for compatibility.

## 🔗 Useful Resources
- [MongoDB Documentation](https://docs.mongodb.com/manual/)
- [PyMongo Documentation](https://pymongo.readthedocs.io/en/stable/)
- [NoSQL Concepts](https://www.mongodb.com/nosql-explained)
- [Holberton School](https://www.holbertonschool.com/)


---


> 🚀 Project completed as part of the Holberton School Web Back-End curriculum. Happy coding! 😃