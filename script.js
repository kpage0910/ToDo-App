const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById("list-container");

//
function addTask() {
    if(inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData(); // Save data to local storage
}

// Add event listener to the list container for marking tasks as completed or deleting them
listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData(); // Save data to local storage
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData(); // Save data to local storage
    }
}, false);

// Save data to local storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask(); // Load tasks from local storage when the page loads