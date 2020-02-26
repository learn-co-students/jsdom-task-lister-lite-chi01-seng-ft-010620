document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");
  taskForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let tasks = document.getElementById("tasks");
    let userInput = event.target.children[1].value;
    let li = document.createElement("li");
    li.innerText = userInput;
    tasks.appendChild(li);
    taskForm.reset();

    let button = document.createElement("button");
    button.innerHTML = "X";
    button.style.float = "right";
    li.appendChild(button);
    button.addEventListener("click", function() {
      li.remove();
    });
  });
});
