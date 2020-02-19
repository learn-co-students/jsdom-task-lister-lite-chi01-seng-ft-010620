


document.addEventListener("DOMContentLoaded", function() {

  const submitTask = document.getElementById("create-task-form")
  const todoList = document.getElementById("tasks")
  

  

  function handleCreateNewTask(event) {
    event.preventDefault()
    const userInput = event.target.children[1].value
    const newListItem = document.createElement("li")
    const button = document.createElement("button")
    button.addEventListener("click", function(event) {
      event.target.parentNode.remove()
    })
    
    newListItem.innerText = userInput
    button.innerHTML = "Delete"
    button.className = "deleteButton"
    todoList.appendChild(newListItem,)
    newListItem.appendChild(button)
    event.target.reset()

  }








submitTask.addEventListener('submit', handleCreateNewTask )









})
 




















// document.addEventListener("DOMContentLoaded", function() {
//   const submitEvent = document.getElementById('create-task-form')[1]
//   submitEvent.addEventListener('submit',function(event){
//     document.
    
    
//   })
//   document.addEventListener("keydown", function(e){

//   })
// });
// const userInput = document.getElementByTagName('input')[0];
// // innertext input moved to my todos list
// document.getElementById('#tasks')
// userInput.innerText =
// // input.addEventListener('click', function(event) {
// //  alert('I was clicked!');
// // });
// /* <input type="submit" value="Create New Task"></input> */
