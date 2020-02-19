document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let input = document.getElementById('new-task-description'); 
  let button = document.getElementById('button');
  

  button.addEventListener('click', function(e) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    e.preventDefault();
    ul.appendChild(li).innerText = input.value;
    input.value = ""
    });

});

