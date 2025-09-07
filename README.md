# 🗂️ Kanban Board - Task Management system

A simple **Kanban Board** project built using **HTML, CSS, and JavaScript**.  
This system allows you to **manage your tasks efficiently** by creating, updating, and tracking them through different statuses: **Todo**, **Doing**, and **Done**.

---

## 📖 Project Description

This project demonstrates how to:

- Store, update, and manage **tasks dynamically**.
- Use **JavaScript arrays & objects** for efficient data handling.
- Validate user input and handle incorrect entries gracefully.
- Filter completed tasks and display them separately.

The system starts with **three predefined tasks** and lets you add **up to three more tasks**.  
It automatically **validates statuses** (`todo`, `doing`, `done`) and displays **all tasks** and **completed tasks** in the browser console.

---

## 🛠️ Technologies Used

- **HTML5** → Structure of the Kanban board
- **CSS3** → Styling and responsive layout
- **JavaScript (ES6)** → Task management logic, data storage, and validation

---

## ✨ Features

### **Created**

- Display of **three default tasks**.
- Ability to **add up to three new tasks** dynamically.
- Automatic **ID generation** for new tasks.
- Input **validation** to ensure only valid statuses are stored.

### **Updated**

- New feature: Filter and display **completed tasks**.
- Added **limit checking** → Prevents adding more than **six tasks total**.
- Improved **user feedback** using `alert()` messages.
- Enhanced **console output formatting** for better readability.

---

## ⚡ Setup Instructions

Follow these steps to set up the project locally:

### **1. Clone the repository**

```bash
git clone https://github.com/Lindokuhle-dumakude/LINDUM25535_FTO2506_GroupB_Lindokuhle_Dumakude_JSL03.git
```

### 🗂️ **2. Open the project folder**

- cd LINDUM25535_FTO2506_GroupB_Lindokuhle_Dumakude_JSL03

### **3. Open in your browser**

- Double-click on index.html

---

## 🕹️ Usage Instructions

1. Open the project in your browser.

2. Open the Developer Console:

- On Windows/Linux → Press F12 → Go to Console Tab.
- On Mac → Press Option + ⌘ + J.

3. When prompted, enter:

- Task title
- Task description
- Task status → Must be one of:

      ` todo`
      ` doing`
      ` done `

4. Check the console output for:

- All tasks
- Completed tasks

---

## 🧩 Working Example

### **User Input**:

```
Enter the title for Task 4: Build Portfolio Website
Enter the description for Task 4: Showcase my projects
Enter status (todo, doing, done): done

```

### **User Output**:

1. All tasks

![alt text](<js-example-1.png>)

2. Completed Tasks

![alt text](<js-example-2.png>)
