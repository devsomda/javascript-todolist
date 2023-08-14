// 필요한 요소 선택
const todoForm = document.getElementById("todo-input-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const deleteButton = document.getElementById("delete-button");

// 등록 함수
function createTodo(e) {
  e.preventDefault();
  const todo = todoInput.value;
  console.log(todo);
  addTodo(todo);
  todoInput.value = "";
}

function addTodo(todo) {
  const li = document.createElement("li");
  const checkInput = document.createElement("input");
  const span = document.createElement("span");
  const deleteBtn = document.createElement("button");
  const updateBtn = document.createElement("button");

  checkInput.type = "checkbox";
  deleteBtn.type = "button";
  deleteBtn.innerText = "삭제";
  deleteBtn.id = "delete-button";

  updateBtn.type = "button";
  updateBtn.innerText = "수정";
  updateBtn.id = "update-button";

  span.innerText = todo;

  li.appendChild(checkInput);
  li.appendChild(span);
  li.appendChild(updateBtn);
  li.appendChild(deleteBtn);

  todoList.appendChild(li);
}

// 삭제 함수
function deleteTodo(event) {
  if (event.target.id === "delete-button") {
    const todoElement = event.target.parentElement;
    todoList.removeChild(todoElement);
  }
}

// 이벤트 리스너 등록
function init() {
  todoForm.addEventListener("submit", createTodo);
  todoList.addEventListener("click", deleteTodo);
}

init();
