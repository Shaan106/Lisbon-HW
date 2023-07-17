console.log("connected")

let taskInfo = document.getElementById("task-info");
let taskTable = document.getElementById("task-table");

document.querySelector('#add-task-button').addEventListener('click', () => {

    const tr = document.createElement('tr');

    let newTask = document.createElement('td');
    let newCheckbox = document.createElement('td');
    let newDelButton = document.createElement('td');

    newTask.innerHTML = taskInfo.value;
    newCheckbox.innerHTML = `<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" unchecked>`;
    newDelButton.innerHTML = `<button type="button" class="btn-close" aria-label="Close"></button>`;

    tr.appendChild(newTask);
    tr.appendChild(newCheckbox);       
    tr.appendChild(newDelButton);

    taskTable.appendChild(tr);

    console.log(taskInfo.value);
});