let msg = document.querySelector(".msg");
let form = document.querySelector("form");
let textInput = document.getElementById("textInput");
let todos = document.querySelector(".todos");
let todoArr = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!textInput.value) {
    msg.textContent = "PLEASE ENTER TODO";
    msg.style.display = "block";
    msg.style.background = "red";
    setTimeout(() => {
      msg.style.display = "none";
    }, 3000);
  } else {
    let todo = {
      id: Math.random(),
      text: textInput.value,
      date: new Date().toDateString() + " | " + new Date().toLocaleTimeString(),
    };
    todoArr.unshift(todo);
    displaytodo(todoArr);
    msg.textContent = "TODO ADDED SUCCESSFULLY";
    msg.style.display = "block";
    msg.style.background = "green";
    setTimeout(() => {
      msg.style.display = "none";
    }, 3000);
    form.reset();
  }
});

function deleteTodo(id) {
  let todo = todoArr.find((x) => x.id === id);
  console.log(todoArr.indexOf(todo));
  todoArr.splice(todoArr.indexOf(todo), 1);
  displaytodo(todoArr);
}

function displaytodo(arr) {
  let html = "";
  arr.forEach((todo) => {
    html += `
        <div class='todo'>
            <span>
                <h3>${todo.text}</h3>
                <small>${todo.date}</small>
            </span>
            <button onClick=deleteTodo(${todo.id})>DELETE</button>
        </div>
    `;
    todos.innerHTML = html;
  });
}
