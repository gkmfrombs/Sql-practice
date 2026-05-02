

***

# 🗄️ SQL Interview Flashcards

![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)
![GitHub Pages](https://img.shields.io/badge/Deployed_on-GitHub_Pages-2ea44f?logo=github)

> An interactive, 3D flashcard application designed to help you memorize and practice the **120 Most Frequent SQL Interview Questions & Answers**.

### 🔗 [Play the Live Demo Here!](https://gkmfrombs.github.io/Sql-practice/)

---

## ✨ Features

- **🃏 3D Flashcard UI:** Click to flip cards smoothly to reveal detailed SQL answers and code snippets.
- **📚 120 Curated Questions:** Thoroughly covers all major SQL interview topics.
- **🗂️ Category Filtering:** Focus your practice by filtering through 5 distinct parts:
  - Part 1: Basic SQL Concepts
  - Part 2: Joins & Relationships
  - Part 3: Advanced SQL & Functions
  - Part 4: Practical & Scenario-Based Queries
  - Part 5: Deep Dive into JOINS
- **🔀 Shuffle Mode:** Randomize questions to test your true recall ability.
- **📊 Progress Tracking:** Live counter showing your exact position in the deck (e.g., `Q: 42 / 120`).
- **📱 Responsive Design:** Modern, glassmorphism aesthetics that work perfectly on desktop and mobile.

---

## 📂 Project Structure
```text
Sql-practice/
│── index.html          # Main application UI
│── style.css           # 3D animations and glassmorphism styling
│── script.js           # Flashcard logic, state management, and filtering
└── sql-questions.json  # Database containing all 120 questions and answers
```

---

## 🚀 Run Locally

This project requires zero dependencies or build steps. To run it locally:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/gkmfrombs/Sql-practice.git](https://github.com/gkmfrombs/Sql-practice.git)
   
```
2. **Navigate to the directory:**
   ```bash
   cd Sql-practice
   ```
3. **Run the app:**
   Simply double-click `index.html` to open it in your browser. *(Note: If your browser blocks local JSON fetching via CORS, use a local server like VS Code's "Live Server" extension).*

---

<details>
<summary><b>💡 How to modify the questions (Click to expand)</b></summary>
<br>
The entire question bank is dynamically loaded from the JSON file. You don't need to touch the frontend code to update the deck. Just open `sql-questions.json` and add/edit objects:
```json
{
  "category": "Basic SQL Concepts",
  "question": "What is SQL?",
  "answer": "SQL (Structured Query Language) is a standard language used for accessing and manipulating databases."
}
```
</details>

---

## ⭐ Support

If this tool helps you crush your SQL interviews, please consider giving it a ⭐ on GitHub!
