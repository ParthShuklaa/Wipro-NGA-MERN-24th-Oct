// here we will have jsvascript code for To Do Application
// With the help of DOM manipulation we will create a To Do Application

// Select the necessary DOM elements
const todoInput = document.getElementById('taskInput');
const addButton = document.getElementById('addTaskButton');
const todoList = document.getElementById('taskList');
// Function to add a new task
function addTask() {
    const taskText = todoInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        // Here I am creating a new list item in HTML using createElement method
        li.textContent = taskText;
        todoList.appendChild(li);
        todoInput.value = "";
    }

    // Add event listener to the add button
    addButton.addEventListener("click", addTask);
    // Creating a separate function as delete task
    function deleteCompletedTasks() {
        const completedTasks = todoList.querySelectorAll("li.completed");
        completedTasks.forEach(function (task) {
            task.remove();
        });
    }

    // Add event listener to the task list for removing tasks
    todoList.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
            event.target.remove();
        }
    });

}