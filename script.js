// script.js

// Section 1: TODOs
// TODO: Register submissions from the user on the form.
// TODO: Determine the value of the data submitted and add it to a JavaScript array called tasks.
// TODO: Call the render function to update the table with the new tasks.

// Section 2: App State Variables
let tasks = [];

// Section 3: Cached Element References
const taskForm = document.getElementById('taskForm');
const taskTable = document.getElementById('taskTable');

// Log the values of taskForm and taskTable to the console for testing
console.log(taskForm);
console.log(taskTable);

// Section 4: Event Listeners
taskForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get form values
    const taskName = document.getElementById('taskName').value;
    const taskDescription = document.getElementById('taskDescription').value;
    const taskDeadline = document.getElementById('taskDeadline').value;

    // Add new task to the tasks array
    const newTask = {
        name: taskName,
        description: taskDescription,
        deadline: taskDeadline,
        completed: false
    };
    tasks.push(newTask);

    // Clear form
    taskForm.reset();

    // Render tasks
    renderTasks();
});

// Section 5: Functions
function renderTasks() {
    // Clear current table content
    taskTable.innerHTML = `
        <thead>
            <tr>
                <th>Task Name</th>
                <th>Description</th>
                <th>Deadline</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    `;

    const tbody = taskTable.querySelector('tbody');

    tasks.forEach((task, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${task.name}</td>
            <td>${task.description}</td>
            <td>${task.deadline}</td>
            <td>
                <button onclick="markComplete(${index})">Complete</button>
                <button class="remove" onclick="removeTask(${index})">Remove</button>
            </td>
        `;

        tbody.appendChild(row);
    });
}

function markComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function removeTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}
