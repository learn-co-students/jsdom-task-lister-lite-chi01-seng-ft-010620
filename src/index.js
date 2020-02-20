const taskForm = document.getElementById("create-task-form");
const taskList = document.getElementById("tasks");

// const main = document.getElementById("main-content")
// const sortTaskBtn = document.

function handleSubmitTask(event) {
  event.preventDefault();
  const userInput = event.target.children[1].value;
  const li = document.createElement("li");
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "X";
  deleteBtn.style.float = "right";
  li.innerText = userInput;
  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  event.target.reset();
}

function handleDeleteTask(event) {
  if (event.target.tagName === "BUTTON") {
    event.target.parentElement.remove();
  }
}

// function handleSortedTasks(event) {
// cont taskArray = Array

// }

taskForm.addEventListener("submit", handleSubmitTask);
taskList.addEventListener("click", handleDeleteTask);
// sortTaskBtn.addEventListener("click", handleSortedTasks);
