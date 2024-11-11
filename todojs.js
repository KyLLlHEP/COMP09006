let list = document.getElementById("task-list");
let taskList = [];

function displayTasks() {
    const taskListElement = document.getElementById("task-list");
    taskListElement.innerHTML = "";

    taskList.forEach((task) => {
        const taskItem = document.createElement("li");

        if (task.priority === "low") {
            taskItem.classList.add("priority-low");
        } else if (task.priority === "medium") {
            taskItem.classList.add("priority-medium");
        } else if (task.priority === "high") {
            taskItem.classList.add("priority-high");
        }

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;

        checkbox.addEventListener("change", function () {
            task.completed = !task.completed;
            taskItem.classList.toggle("completed", task.completed);
        });

        taskItem.innerHTML = `${task.name} + ${task.priority} + ${task.date}`;
        taskItem.classList.toggle("completed", task.completed);
        taskItem.prepend(checkbox);

        taskListElement.appendChild(taskItem);
    });
}

document.getElementById("task-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const taskName = document.getElementById("task-name").value;
    const taskPriority = document.getElementById("task-priority").value;
    const taskDate = document.getElementById("task-date").value;

    const task = {
        name: taskName,
        priority: taskPriority,
        date: taskDate,
        completed: false
    };
    taskList.push(task);

    displayTasks();

    document.getElementById("task-form").reset();
});
