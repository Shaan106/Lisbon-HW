console.log("connected")

let taskInfo = document.getElementById("task-info");
let taskTable = document.getElementById("task-table");

let taskList = [];

class Task {
    constructor(taskForm) {
        this.taskInfo = taskForm.value;
        this.complete = false;

        this.tableRow = document.createElement('tr');

        this.taskHTML = document.createElement('td');
        this.taskCheckbox = document.createElement('td');
        this.buttons = document.createElement('td');

        this.taskHTML.innerHTML = this.taskInfo;
        this.taskCheckbox.innerHTML = `<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" unchecked>`;
        this.buttons.innerHTML = `  <button class="btn btn-warning"><i class="fa fa-recycle"></i></button>
        <button class="btn btn-danger"><i class="fa fa-trash"></i></button>`;
    }
}

document.querySelector('#add-task-button').addEventListener('click', () => {

    const tr = document.createElement('tr');

    let newTask = document.createElement('td');
    let newCheckbox = document.createElement('td');
    let newDelButton = document.createElement('td');

    newTask.innerHTML = taskInfo.value;
    newCheckbox.innerHTML = `<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" unchecked>`;
    newDelButton.innerHTML = `  <button class="btn btn-warning"><i class="fa fa-recycle"></i></button>
                                <button class="btn btn-danger"><i class="fa fa-trash"></i></button>`;

    tr.appendChild(newTask);
    tr.appendChild(newCheckbox);       
    tr.appendChild(newDelButton);

    taskTable.appendChild(tr);

    console.log(taskInfo.value);
});