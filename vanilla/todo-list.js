// Create an array to store our to-do list items
const toDoList = [];

// Create a function to add an item to the to-do list
function addItem(item) {
  toDoList.push(item);
}

// Create a function to edit an item in the to-do list
function editItem(index, item) {
  toDoList[index] = item;
}

// Create a function to delete an item from the to-do list
function deleteItem(index) {
  toDoList.splice(index, 1);
}

// Add some items to the to-do list
addItem("Take out the trash");
addItem("Do the dishes");
addItem("Finish homework");

// Edit the second item in the to-do list
editItem(1, "Wash the dishes");

// Delete the first item from the to-do list
deleteItem(0);

// Print the updated to-do list
console.log(toDoList);
// Output: ["Wash the dishes", "Finish homework"]