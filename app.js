//define UI  vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listners
loadEventListeners();

// Load all event listners
function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask);
}

// Add task
function addTask(e) {
  if (taskInput.value === '') {
    alert('Add a task');
  }

  //Create li element
  const li = document.createElement('li');
  //Add class
  li.className = 'collection-item';
  //Create text node append to li
  li.appendChild(document.createTextNode(taskInput.value));
  //Create new link element
  const link = document.createElement('a');
  //Add class
  link.className = 'delete-item secondary-content';
  //Add icon html
  link.innerHTML = '<i class= "fa fa-remove"></i>';
  //Append the link to the li
  li.appendChild(link);

  //Append the li to the ul
  taskList.appendChild(li);

  //Clear input
  taskInput.value = '';

  e.preventDefault();
}
