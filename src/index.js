document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("input")[1].addEventListener("click", function(event) {
    let ul = document.getElementById("tasks")
    let task = document.createElement('li')
    ul.appendChild(task)
    let input = document.getElementById("new-task-description")
    task.innerHTML = input.value
    event.preventDefault()
  })
});

