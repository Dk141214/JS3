// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('task-input');
    const addButton = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    // Function to create and add a new task item
    function addTask(taskText) {
        const listItem = document.createElement('li');
        const taskCheckbox = document.createElement('input');
        taskCheckbox.type = 'checkbox';
        const taskLabel = document.createElement('span');
        taskLabel.textContent = taskText;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Remove';
        deleteButton.classList.add('delete-btn');

        listItem.appendChild(taskCheckbox);
        listItem.appendChild(taskLabel);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

        // Event listener for checkbox
        taskCheckbox.addEventListener('change', () => {
            if (taskCheckbox.checked) {
                listItem.classList.add('completed');
                setTimeout(() => listItem.remove(), 600); // Fade out effect
            } else {
                listItem.classList.remove('completed');
            }
            moveTaskToEnd(listItem);
        });

        // Event listener for delete button
        deleteButton.addEventListener('click', () => {
            listItem.classList.add('fade-out');
            setTimeout(() => listItem.remove(), 300); // Fade out effect
        });
    }

    // Function to move a task item to the end of the list
    function moveTaskToEnd(item) {
        taskList.appendChild(item);
    }

    // Add button click event listener
    addButton.addEventListener('click', () => {
        const taskText = inputField.value.trim();
        if (taskText) {
            addTask(taskText);
            inputField.value = '';
        }
    });

    // Optional: Allow Enter key to add task
    inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addButton.click();
        }
    });
});
