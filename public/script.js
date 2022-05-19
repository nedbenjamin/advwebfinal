// Setting up variables for our HTML elements using DOM selection
const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button"); // Complex CSS query
const tasklist = document.getElementById("tasklist");
const taskInput = document.getElementById("taskInput");

// Event listener for Button click
// This could also be form.addEventListener("submit", function() {...} )
button.addEventListener("click", function(event) {
  event.preventDefault(); // Not as necessary for button, but needed for form submit


  
  let task = taskInput.value;

  let date = (new Date()).toLocaleDateString('en-GB'); //Convert to short date format

  let dueDate = (new Date(dueDateInput.value)).toLocaleDateString('en-GB');

  let priorityRating = priorityInput.value;

  
  // Call the addTask() function using
  addTask(task, date, dueDate, priorityRating, false);

  // Log out the newly populated taskList everytime the button has been pressed
  console.log(taskList);
})

// Create an empty array to store our tasks
var taskList = [];

function addTask(taskDescription, createdDate, dueDate, priorityRating) {
  let task = {
    taskDescription,
    createdDate,
    dueDate,
    priorityRating,
  };

  // Add the task to our array of tasks
  taskList.push(task);

  // Separate the DOM manipulation from the object creation logic
  renderTask(task);
}






// Function to display the item on the page
function renderTask(task) {
  let item = document.createElement("li");
  item.innerHTML = "<p>" + task.taskDescription + "<br>" + "Due:" + " " + task.dueDate + "<br>" + "Priority:" + " " + task.priorityRating + "</p>";

  tasklist.appendChild(item);



  // Setup delete button DOM elements
  let delButton = document.createElement("button");
  let delButtonText = document.createTextNode("Delete");
  delButton.appendChild(delButtonText);
  item.appendChild(delButton); // Adds a delete button to every task

  // Listen for when the 
  delButton.addEventListener("click", function(event) {
    item.remove(); // Remove the task item from the page when button clicked
    // Because we used 'let' to define the item, this will always delete the right element
  })

  // Clear the value of the input once the task has been added to the page
  form.reset();
}

document.getElementById("current_date").innerHTML = (new Date()).toLocaleDateString('en-GB');

