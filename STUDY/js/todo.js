const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
let toDos = []; 

function saveToDos() { // toDos array의 내용을 localStorage에 넣는 함수
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement; // 어떤 li 를 삭제할지 모르기때문에 button의 부모를 타겟하여 해당하는 li 를 찾음
  li.remove(); // X button이 클릭된 li 삭제하기 
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id))
}

function paintToDo(newTodo) { // 3
  const list = document.createElement("li"); // li 요소 만들기
  list.id = newTodo.id;
  const span = document.createElement("span"); // span 요소 만들기
  span.innerText = newTodo.text; // span에 newTodo
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo);
  list.appendChild(span); // li 안에 span
  list.appendChild(button); // li 안에 button
  toDoList.appendChild(list); // ul(toDoList) 안에 li 
}

function handleToDoSubmit(event) { // 2
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text : newTodo,
    id : Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit); // 1

const savedToDos = localStorage.getItem(TODOS_KEY); // localstorage에 있는 toDos를 가져옴

if (savedToDos !== null) { // 아무것도 없지 않다면 (있다면)
  const parsedToDos = JSON.parse(savedToDos); // JSON 파싱을 하여 객체로 가져옴
  toDos = parsedToDos // 이전 toDos를 복원하기 
  parsedToDos.forEach(paintToDo); // paintToDo는 텍스트를 받는데, forEach를 통한 item가 이미 argument 이다
}