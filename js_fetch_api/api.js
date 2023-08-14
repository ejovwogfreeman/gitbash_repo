// fetch("https://jsonplaceholder.typicode.com/todos/")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// using async and await
// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//   const data = await res.json();
//   console.log(data);
// };

// getData();

let todos = document.querySelector(".todos");

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const data = await res.json();
  console.log(data);
  let html = "";
  for (let i = 0; i < data.length; i++) {
    html += `
        <div class=${data[i].completed === true ? "bg-green" : "bg-red"}>
            <h3>${data[i].title}</h3>
        </div>
   `;
  }
  todos.innerHTML = html;
};

getData();
