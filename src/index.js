
document.addEventListener("DOMContentLoaded", () => {
    createFormListener();
    createClickListener();
});

function createFormListener() {

    const taskForm = document.getElementById("create-task-form");

    taskForm.addEventListener('submit', function(event) {
      event.preventDefault();

      let tasks = document.getElementById('tasks');
      let userInput = event.target.children[1].value;
      let createNewNode = document.createElement("li");
      createNewNode.innerText = userInput;
      tasks.appendChild(createNewNode);
      let button = document.createElement("BUTTON");
      button.className = 'delete-btn'
      createNewNode.appendChild(button);
      button.innerHTML = "X";
      taskForm.reset();
  })
};

function createClickListener() {
  let tasks = document.getElementById('tasks');
    tasks.addEventListener('click', function(event) {
      let button = document.getElementsByClassName('delete-btn')
      if (event.target.className === "delete-btn") {
      event.target.parentNode.remove();
    }
  })
};


// A priority value selected from a dropdown that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)
// As a challenge, implement a sorting functionality that displays the tasks ascending or descending order based on priority
// An additional input field (e.g. user, duration, date due)
// Ability to edit tasks
// Something of your choice! The main objective is to add a feature that allows the user's input to affect the DOM
