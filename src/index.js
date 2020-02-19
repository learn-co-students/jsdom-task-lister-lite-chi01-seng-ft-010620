document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  taskForm.addEventListener("submit", event => {
    event.preventDefault();

    let newItem = document.createElement("li")
    let taskField = document.getElementById("new-task-description")
    newItem.innerText = taskField.value
    taskList.appendChild(newItem)
  })

});

