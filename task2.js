
document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const dueDateInput = document.getElementById('dueDateInput');
    const priorityInput = document.getElementById('priorityInput');
    const categoryInput = document.getElementById('categoryInput');
    const taskList = document.getElementById('taskList');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask(taskInput.value, dueDateInput.value, priorityInput.value, categoryInput.value);
        taskForm.reset();
    });

    function addTask(task, dueDate, priority, category) {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task', `priority-${priority}`);
        taskItem.innerHTML = `
            <span>${task} (${category}) - Due: ${dueDate}</span>
            <div class="task-buttons">
                <button class="complete-btn">Complete</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;

        const completeBtn = taskItem.querySelector('.complete-btn');
        const deleteBtn = taskItem.querySelector('.delete-btn');

        completeBtn.addEventListener('click', () => {
            taskItem.classList.toggle('complete');
        });

        deleteBtn.addEventListener('click', () => {
            taskItem.remove();
        });

        taskList.appendChild(taskItem);
    }
});
