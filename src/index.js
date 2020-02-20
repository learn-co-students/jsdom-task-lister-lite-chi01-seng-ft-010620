
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("create-task-form").addEventListener("submit", function(event){
    event.preventDefault();
    
    let input = document.getElementById("new-task-description");
    let new_task = document.createElement("li");
    new_task.innerText = input.value;
    document.getElementById("tasks").appendChild(new_task);  
  });
});

