function addTask(){
    const taskInput = document.getElementById('taskInput');
    const taskDescription = taskInput.ariaValueMax.trim();

    if (taskDescription) {
        const taskList = document.getElementById('taskList');
        const taskElment= document.createElement('li');
        taskElment.classList.add('task');
        taskElment.innerHTML = ` 
            ${taskDescription}
            <button onclick="markComplete(this)">Mark Complete</button>
        `;
        taskList.appendChild(taskElment);
        taskInput.value = '';
    }
}

function markComplete(button){
    const taskElment = button.parentElment;
    const completeList = document.getElementById('completedList');
    taskElment.remove();
    const completedTaskElment = document.createElement('li');
    completedTaskElment.classList.add('task');
    completedTaskElment.innerHTML = taskElment.innerHTML;
    completedTaskElment.querySelector('button').remove();
    completeList.appendChild(completedTaskElment);
}
