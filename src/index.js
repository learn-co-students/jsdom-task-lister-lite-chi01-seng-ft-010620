document.addEventListener("DOMContentLoaded", () => {
  //grab all the necessary DOM elements

  //form and relevant input fields
  const newTaskForm = document.getElementById("create-task-form");
  // const newTaskDescription = document.getElementById("new-task-description");
  // const newTaskPriority = document.getElementById("new-task-priority");

  // //ul where new tasks will live on the DOM
  // const newTaskUl = document.getElementById("tasks");

  //attach event listeners
  newTaskForm.addEventListener("submit", createNewTask);
  listNer();
});

const createNewTask = event => {
  event.preventDefault();
  //stop form from trying to submit
  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delb";
  deleteBtn.innerText = "X";
  newTask.append(deleteBtn);


  appendNewTask(newTask);
  event.target.reset();
};

const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
};

const listNer = () => {
  const tasks = document.querySelector("#tasks")
  tasks.addEventListener("click", event => {
    if (event.target.className === "delb"){
      event.target.parentNode.remove()
    }
  })
}