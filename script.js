const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // '×' symbol for delete
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData(); // Save data to localStorage after adding a task
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData(); // Save data after marking a task as complete
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData(); // Save data after removing a task
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML); // Save tasks to localStorage
}

function showTask(){
    let savedData = localStorage.getItem("data");
    if(savedData){  // Only load saved data if it exists
        listContainer.innerHTML = savedData;
    }
}

// Show previously saved tasks when the page is loaded
showTask();
