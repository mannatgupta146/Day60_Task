# Day 60 Task | Cohort 2.0

This repository contains all the JavaScript exercises completed as part of **Day 60** in **Sheryians Coding School Cohort 2.0**.  
The focus of this day was to understand **Callbacks**, **Asynchronous Flow**, **Callback Chaining**, and how Callback Hell starts in JavaScript using `setTimeout()`.

All exercises are written inside **one single JavaScript file**.

## 📁 File in This Task

### 📌 day60.js — All Callback Exercises (Single File)

### Topics Covered
- Creating and using callback functions  
- Understanding async execution with `setTimeout()`  
- Custom delay functions  
- Passing data through callbacks  
- Callback chaining  
- Handling multiple async steps  
- Callback dependency (login → permissions → dashboard)  
- Callback hell structure  

## 🧩 Exercises Included

### ✔️ Exercise 1 — Callback + Delay (Very Easy)
- Build a function `afterDelay(time, callback)`  
- Run callback after given milliseconds  
- Understand async delay flow  

### ✔️ Exercise 2 — Data Flow + Callback Chaining
- `getUser()` returns a user object after 1 second  
- `getUserPosts()` returns posts based on userId  
- Shows how async results move from one function to the next  

### ✔️ Exercise 3 — Multi-step Async Flow (Callback Hell Simulation)
- `loginUser()` → returns user  
- `fetchPermissions()` → returns array of permissions  
- `loadDashboard()` → simulates dashboard loading  
- Demonstrates nested callback structure  


# ✨ Key Learning Highlights

You learned to:
- Handle asynchronous behavior using callbacks  
- Use `setTimeout()` to simulate delayed tasks  
- Pass async results between functions  
- Build multi-layer async flows  
- Understand callback hell  
- Prepare for Promises and async–await  


# 🛠️ Technologies Used
- **JavaScript (ES6+)**  
- `setTimeout()`  
- Browser Console  

# 📖 Learning Outcome

By completing Day 60, I understood:
- How asynchronous execution works in JavaScript  
- How callbacks allow sequential async flow  
- Why deeply nested callbacks become unreadable  
- How async dependencies flow between functions  
- Why Promises and async–await are needed for cleaner code  

# 🌟 Acknowledgement

This task was completed under the guidance of **Harsh Bhaiya**  
as part of **Sheryians Coding School – Cohort 2.0**.

---