let addtask = document.querySelector("#new-task");
let removeList = document.querySelector(".remove-buttons");
let taskList = document.querySelector(".task-list");
// let listLength = 0;

addtask.addEventListener("click", () => {
    // listLength++;

    let listItem = document.createElement("li");
    listItem.innerText = prompt("Enter the Task");
    listItem.setAttribute("class", "task");
    taskList.append(listItem);

    let removeButton = document.createElement("li");
    removeButton.innerText = "remove Task";
    removeButton.setAttribute("class", "remove-task");
    removeList.append(removeButton);
});

// Event delegation to handle clicks on the .remove-buttons container
removeList.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-task")) {
        // Find the index of the clicked Remove Task button
        let index = Array.from(removeList.children).indexOf(event.target);

        // Remove the corresponding task and button
        taskList.removeChild(taskList.children[index]);
        removeList.removeChild(event.target);
    }
});

let reset = document.querySelector("#reset-button");
reset.addEventListener("click",()=>{
    taskList.innerHTML="";
    removeList.innerHTML="";
})
