const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
// toDoForm
const toDoList = document.querySelector("#todo-list");

function deleteToDo(event) {
  const li = event.target.parentElement; // 어떤 li 를 삭제할지 모르기때문에 button의 부모를 타겟하여 해당하는 li 를 찾음
  li.remove(); // X button이 클릭된 li 삭제하기 
}

function paintToDo(newTodo) {
  const list = document.createElement("li"); // li 요소 만들기
  const span = document.createElement("span"); // span 요소 만들기
  span.innerText = newTodo; // span에 newTodo
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo);
  list.appendChild(span); // li 안에 span
  list.appendChild(button); // li 안에 button
  toDoList.appendChild(list); // ul(toDoList) 안에 li 
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit",handleToDoSubmit);