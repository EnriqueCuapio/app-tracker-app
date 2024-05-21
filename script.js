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
taskForm.addEventListener('submit', handleSubmission);

// Function to handle form submissions
function handleSubmission(event) {
    event.preventDefault();

    // Get form input values
    const taskName = document.getElementById('taskName').value;
    const taskDescription = document.getElementById('taskDescription').value;
    const taskDeadline = document.getElementById('taskDeadline').value;

    // Validate input fields
    if (!taskName || !taskDeadline) {
        alert('Task name and deadline are required!');
        return;
    }

    // Update the tasks array
    tasks.push({
        name: taskName,
        description: taskDescription,
        deadline: taskDeadline,
        completed: false
    });

    // Clear form
    taskForm.reset();

    // Render tasks
    render();
}

// Function to render tasks in the table
function render() {
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
            ${tasks.map((task, index) => `
                <tr>
                    <td>${task.name}</td>
                    <td>${task.description}</td>
                    <td>${task.deadline}</td>
                    <td>
                        <button onclick="markComplete(${index})">${task.completed ? 'Undo' : 'Complete'}</button>
                        <button class="remove" onclick="removeTask(${index})">Remove</button>
                    </td>
                </tr>
            `).join('')}
        </tbody>
    `;
}

// Function to initialize the table
function init() {
    taskTable.innerHTML = ''; // Clear the table
    tasks = []; // Reset the tasks array
    render(); // Call the render function
}

// Mark task as complete
function markComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    render();
}

// Remove task
function removeTask(index) {
    tasks.splice(index, 1);
    render();
}

// Initialize the app
init();
