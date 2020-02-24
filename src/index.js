//VARIABLES
//grab the form from the html
const form = document.querySelector('#create-task-form') 
const taskContainer = document.querySelector('#list')




//FUNCTIONS
function createFormListener() {
//set an event listener (submit) 
form.addEventListener("submit", event => {
  //prevent the default action of the submit form
  event.preventDefault()
  //scrape the info from the form the input field
  const newTask = event.target[0].value
  // create a div tag and add the comment into the div tag
  const divTag = document.createElement('div')
  divTag.innerHTML = newTask
  //create delete button
  const deleteBtn = document.createElement('button')
  //adding a className to the button
  deleteBtn.className = 'delete-btn'
  //add delete button to text
  divTag.append(deleteBtn)
  //add text to delete button
  deleteBtn.innerText = 'x'
  //add a listener to the delete button
  // deleteBtn.addEventListener('click', event => {
  //   console.log('clicked')
  // })
  // append the div tag into the #list conatiner node
  taskContainer.append( divTag )
  //reset form
  form.reset()
  })
};


function createClickListener(){
  //grab the div where the tasks live
  const taskContainer = document.querySelector('#list')
  // add an eventlistener to that dive for a click
  taskContainer.addEventListener('click', event => {
    if (event.target.className === 'delete-btn') {
    //check if the node that clicked has the class 'delete-btn'
    event.target.parentNode.remove()
  }
  })
}

//INVOKE
createFormListener()
createClickListener()























// // VARIABLES
// let form = document.getElementById('create-task-form');
// let newTask = document.getElementById('new-task-description');
// let taskList = document.getElementById('tasks');
// let newListItem = document.createElement("li");
// let deleteButton = document.createElement('button');

// //as a user I should be able to type a task into the input field
// // get the element for the submit button



// //as a user I should be able to click some form of a submit button
// //as a user, the task string that I provided should apper on the dom after the sbumit button has been activated


   
//   //event.target give the entire form -- works on all event listeners
  
// // EVENT LISTENERS
// form.addEventListener("submit", event => {
//   event.preventDefault();
   
// newListItem.innerText = newTask.value;
// // deleteButton.addEventListener("click", deleteButton.parentElement.remove())
// taskList.appendChild(newListItem)

// deleteButton.innerText = "x"

// newListItem.append(deleteButton)


// form.reset()
// });