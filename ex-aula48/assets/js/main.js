const inputAssignment = document.querySelector(".input-assignment");
const buttonAssignment = document.querySelector(".btn-assignment");
const assignments = document.querySelector(".assignments");

function createLi() {
  const li = document.createElement("li");
  return li;
}

inputAssignment.addEventListener("keypress", function (e) {
  if (e.keyCode === 13 && inputAssignment.value) {
    createAssignment(inputAssignment.value);
  }
});

function createDeleteButton(li) {
  li.innerText += " ";
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.setAttribute("class", "delete");
  li.appendChild(deleteButton);
}

function clearInput() {
  inputAssignment.value = "";
  inputAssignment.focus();
}

function createAssignment(textInput) {
  const li = createLi();
  li.innerText = textInput;
  assignments.appendChild(li);
  clearInput();
  createDeleteButton(li);
  saveAssignments();
}

buttonAssignment.addEventListener("click", function (e) {
  if (!inputAssignment.value) return;
  createAssignment(inputAssignment.value);
});

document.addEventListener("click", function (e) {
  const el = e.target;

  if (el.classList.contains("delete")) {
    el.parentElement.remove();
    saveAssignments();
  }
});

function saveAssignments() {
  const liAssignments = assignments.querySelectorAll("li");
  const listOfAssignments = [];

  for (let assignment of liAssignments) {
    let textAssignment = assignment.innerText;
    textAssignment = textAssignment.replace("Delete", "");
    listOfAssignments.push(textAssignment);
  }

  const jsonAssignments = JSON.stringify(listOfAssignments);
  localStorage.setItem("assignments", jsonAssignments);
}

function addSavedAssignments() {
  const assignments = localStorage.getItem("assignments");
  const listOfAssignments = JSON.parse(assignments);

  for (let assignment of listOfAssignments) {
    createAssignment(assignment);
  }
}

addSavedAssignments();
