let tasks = [];
let editId = null;
const STORAGE_KEY = "tasks";
let taskForm = document.getElementById("taskForm");
let title = document.getElementById("title");
let description = document.getElementById("description");
let dueDate = document.getElementById("dueDate");
let priority = document.getElementById("priority");
let taskList = document.getElementById("taskList");
let search = document.getElementById("search");
let filter = document.getElementById("filter");
let submitBtn = document.getElementById("submitBtn");
let cancelBtn = document.getElementById("cancelBtn");
let noTasks = document.getElementById("noTasks");
function saveTasks() {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(tasks)
    );
}
function loadTasks() {
    let data = localStorage.getItem(STORAGE_KEY);
    tasks = data ? JSON.parse(data) : [];
    displayTasks();
}
function clearForm() {
    taskForm.reset();
    priority.value = "medium";
    editId = null;
    submitBtn.innerText = "Add Task";
    cancelBtn.classList.add("hidden");
    document.getElementById("formHeading").innerText = "Add New Task";
}
function addTask(e) {
    e.preventDefault();
    let taskTitle = title.value.trim();
    let taskDescription = description.value.trim();
    let taskDate = dueDate.value;
    let taskPriority = priority.value;
    if (taskTitle === "" || taskDate === "") {
        alert("Please enter task title and due date");
        return;
    }
    if (editId === null) {
        let task = {
            id: Date.now(),
            title: taskTitle,
            description: taskDescription,
            dueDate: taskDate,
            priority: taskPriority,
            completed: false
        };
        tasks.push(task);
    }
    else {
        let task = tasks.find((item) => item.id === editId);
        if (!task) {
            alert("Task not found");
            return;
        }
        task.title = taskTitle;
        task.description = taskDescription;
        task.dueDate = taskDate;
        task.priority = taskPriority;
    }
    saveTasks();
    clearForm();
    displayTasks();
}
function displayTasks() {
    taskList.innerHTML = "";
    let searchValue = search.value.toLowerCase();
    let filterValue = filter.value;
    let filteredTasks = tasks.filter((task) => {
        let matchSearch =
            task.title.toLowerCase().includes(searchValue) ||
            task.description.toLowerCase().includes(searchValue);
        let matchPriority =
            filterValue === "all" ||
            task.priority === filterValue;
        return matchSearch && matchPriority;
    });
    if (filteredTasks.length === 0) {
        noTasks.style.display = "block";
        return;
    }
    else {
        noTasks.style.display = "none";
    }
    filteredTasks.forEach((task) => {
        let card = document.createElement("div");
        card.className = "task-card";
        if (task.completed) {
            card.classList.add("completed");
        }
        card.innerHTML = `
            <h3>${escapeHTML(task.title)}</h3>
            <p>${escapeHTML(task.description || "No description")}</p>
            <p><strong>Due Date:</strong> ${escapeHTML(task.dueDate)}</p>
            <span class="priority ${task.priority}">
                ${task.priority.toUpperCase()}
            </span>
            <br>
            <button class="edit-btn" onclick="editTask(${task.id})">
                Edit
            </button>
            <button class="delete-btn" onclick="deleteTask(${task.id})">
                Delete
            </button>
            <button class="complete-btn" onclick="completeTask(${task.id})">
                ${task.completed ? "Mark Active" : "Complete"}
            </button>
        `;
        taskList.appendChild(card);
    });
}
function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, (char) => {
        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };
        return entities[char];
    });
}
function editTask(id) {
    let task = tasks.find((item) => item.id === id);
    if (!task) return;
    title.value = task.title;
    description.value = task.description;
    dueDate.value = task.dueDate;
    priority.value = task.priority;
    editId = id;
    submitBtn.innerText = "Update Task";
    cancelBtn.classList.remove("hidden");
    document.getElementById("formHeading").innerText = "Edit Task";
    title.focus();
}
function deleteTask(id) {
    let confirmDelete = confirm("Are you sure you want to delete this task?");
    if (confirmDelete) {
        tasks = tasks.filter((task) => task.id !== id);
        saveTasks();
        displayTasks();
        if (editId === id) {
            clearForm();
        }
    }
}
function completeTask(id) {
    let task = tasks.find((item) => item.id === id);
    if (task) {
        task.completed = !task.completed;
        saveTasks();
        displayTasks();
    }
}
taskForm.addEventListener("submit", addTask);
search.addEventListener("input", displayTasks);
filter.addEventListener("change", displayTasks);
cancelBtn.addEventListener("click", clearForm);
loadTasks();