const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const totalCount = document.getElementById("totalCount");
const completedCount = document.getElementById("completedCount");
const clearAllBtn = document.getElementById("clearAllBtn");
const listcontainer = document.getElementById("listcontainer");

let totalTodos = 0;
let completedTodos = 0;

function addTask() {
  if (inputBox.value === "") {
    alert("write the name of your task!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    totalTodos++;
  }

  inputBox.value = "";
  updateCounts();
  sData();
}
listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");

    if (e.target.classList.contains("checked")) {
      completedTodos++;
    } else {
      completedTodos--;
    }
    updateCounts();
    sData();
  } else if (e.target.tagName === "SPAN") {
    if (e.target.parentElement.classList.contains("checked")) {
      completedTodos--;
    }
    e.target.parentElement.remove();
    totalTodos--;
    updateCounts();
    sData();
  }
});

function sData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showtask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showtask();

clearAllBtn.addEventListener("click", () => {
  listContainer.innerHTML = "";
  totalTodos = 0;
  completedTodos = 0;
  updateCounts();
});

function updateCounts() {
  totalCount.textContent = totalTodos;
  completedCount.textContent = completedTodos;
}
