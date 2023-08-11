let msg = document.querySelector(".msg");
let form = document.querySelector("form");
let textInput = document.getElementById("textInput");
let amountInput = document.getElementById("amountInput");
let type = document.getElementById("type");
let todos = document.querySelector(".todos");
let balance = document.getElementById("balance");
let income = document.getElementById("income");
let expense = document.getElementById("expense");
let todoArr = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!textInput.value) {
    msg.textContent = "PLEASE ENTER TRANSACTION";
    msg.style.display = "block";
    msg.style.background = "red";
    setTimeout(() => {
      msg.style.display = "none";
    }, 3000);
  } else {
    let todo = {
      id: Math.random(),
      text: textInput.value,
      amount: amountInput.value,
      type: type.value,
      date: new Date().toDateString() + " | " + new Date().toLocaleTimeString(),
    };
    todoArr.unshift(todo);

    let incArr = todoArr
      .filter((x) => x.type === "income")
      .map((x) => x.amount);
    let expArr = todoArr
      .filter((x) => x.type === "expense")
      .map((x) => x.amount);

    let inc = incArr.reduce((a, b) => Number(a) + Number(b), 0);
    let exp = expArr.reduce((a, b) => Number(a) + Number(b), 0);

    let bal = inc - exp;

    income.textContent = inc;
    expense.textContent = exp;
    balance.textContent = bal;

    displaytodo(todoArr);
    console.log(todoArr);
    msg.textContent = "TRANSACTION ADDED SUCCESSFULLY";
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
                <h3><span>${todo.text}</span><span class=${
      todo.type === "income" ? "success" : "danger"
    }>${todo.amount}</span></h3>
                <small>${todo.date}</small>
            </span>
            <button onClick=deleteTodo(${todo.id})>DELETE</button>
        </div>
    `;
    todos.innerHTML = html;
  });
}
