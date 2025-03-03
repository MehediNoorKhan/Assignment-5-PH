function buttonDisable(btn, reality, titleName) {
    document.getElementById(btn).disabled = reality;
    document.getElementById(btn).style.backgroundColor = '#ccc';
    document.getElementById(btn).style.cursor = 'auto';
    const taskAssigned = document.getElementById('assigned-task').innerText;
    const convertedTaskAssigned = convertToInt(taskAssigned);
    const completedTask = document.getElementById('completed-task').innerText;
    const convertedCompletedTask = convertToInt(completedTask);
    const currentTask = convertedTaskAssigned - 1;
    const currentCompletedTask = convertedCompletedTask + 1;
    alert("Board Updated Successfully");
    writeinside('completed-task', currentCompletedTask);
    writeinside('assigned-task', currentTask);

    updateActivityLog(titleName);
};

function convertToInt(taskno) {
    return parseInt(taskno);

}

function writeinside(id, text) {
    if (text > 0) {
        document.getElementById(id).innerText = text;
    }
    else if (text === 0) {
        alert("Congrats!!! You've completed all the current task");
        document.getElementById(id).innerText = text;
    }
}

function updateActivityLog(titleName) {
    const nameOfTask = document.getElementById(titleName).innerText;
    const newElement = document.createElement('p');
    newElement.style.backgroundColor = "#F4F7FF";
    newElement.classList.add('text-justify', 'px-2', 'py-2', 'mt-3', 'notification');
    const fixedTime = new Date().toLocaleTimeString();
    newElement.innerText = `You have Complete The Task ${nameOfTask} at ${fixedTime} `;

    const activity = document.getElementById('activity-log');
    activity.appendChild(newElement);
}