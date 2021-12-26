function isLoggedIn() {
    const name = localStorage.getItem("name");
    return name !== null;
}

function getQualifiedNum() {
    return localStorage.getItem("qualifiedNum");
}

function addQualifiedNum() {
    let num = Number(getQualifiedNum());
    num += 1;
    localStorage.setItem("qualifiedNum", num);
}

function loadTodos() {
    const todos = localStorage.getItem("todos");
    if (todos === null) return [];
    else return todos;
}

function attachNewListItem(text) {
    const todoList = document.querySelector("#todo_list");

    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.innerText = text;
    button.innerText = "X";

    button.addEventListener("click", (event) => {
        console.log(event);
        console.log(event.currentTarget.parentNode);
    });

    li.id = `item${getQualifiedNum()}`;
    addQualifiedNum();

    li.appendChild(span);
    li.appendChild(button);

    todoList.appendChild(li);
}

function saveTodos(text) {}

document.addEventListener("DOMContentLoaded", (event) => {
    if (isLoggedIn()) {
        if (!getQualifiedNum()) {
            localStorage.setItem("qualifiedNum", 0);
        }
        const todoForm = document.querySelector("#todo_form");

        todoForm.addEventListener("submit", (event) => {
            event.preventDefault();
            attachNewListItem("hello");
        });

        const savedTodos = loadTodos();
    }
});
