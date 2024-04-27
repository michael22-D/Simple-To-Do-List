let taskList = document.getElementById("taskList");

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText !== "") {
        let taskItem = document.createElement("li");
        taskItem.innerHTML = `
            <input type="checkbox" onchange="toggleTaskCompletion(this)">
            <span>${taskText}</span>
            <button onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
}

function toggleTaskCompletion(checkbox) {
    let taskText = checkbox.nextElementSibling;
    if (checkbox.checked) {
        taskText.style.textDecoration = "line-through";
    } else {
        taskText.style.textDecoration = "none";
    }
}

function deleteTask(button) {
    let taskItem = button.parentElement;
    taskList.removeChild(taskItem);
}
