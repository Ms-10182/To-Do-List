let addtask = document.querySelector("#new-task");
let removeList = document.querySelector(".remove-buttons");
let taskList = document.querySelector(".task-list");

//adding event to create a task and its remove button and add it to the DOM
addtask.addEventListener("click", () => {

    //creating a new list item
    let listItem = document.createElement("li");
    listItem.innerText = prompt("Enter the Task");
    listItem.setAttribute("class", "task");
    taskList.append(listItem);

    //creating a new remove task option to remove the corresponding task
    let removeButton = document.createElement("li");
    removeButton.innerText = "remove Task";
    removeButton.setAttribute("class", "remove-task");
    removeList.append(removeButton);
});

//creating an event to remove task and the button when it is clicked
removeList.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-task")) {
        let index = Array.from(removeList.children).indexOf(event.target);

        taskList.removeChild(taskList.children[index]);
        removeList.removeChild(event.target);
    }
});

//creating an event on reset button when clicked both the list will be cleared
let reset = document.querySelector("#reset-button");
reset.addEventListener("click",()=>{
    taskList.innerHTML="";
    removeList.innerHTML="";
})
