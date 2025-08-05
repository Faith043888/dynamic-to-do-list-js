// Wait for the HTML document to be fully loaded before running JavaScript
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task to the list
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim the input value

        if (taskText === '') {
            alert('Please enter a task.'); // Alert if input is empty
            return;
        }

        // Create new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Add event to remove the task when clicked
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append the remove button and add the list item to the task list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }

    // Event listener for button click
    addButton.addEventListener('click', addTask);

    // Event listener for pressing "Enter" key in the input field
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Invoke addTask once to meet the requirement (although not typically needed)
    addTask();
});