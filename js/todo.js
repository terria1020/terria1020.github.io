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
    if (todos === null) return;
    else {
        const todosArray = JSON.parse(todos);
        console.log(todosArray);
        todosArray.forEach((element) => {
            attachNewListItem(element.value);
        });
    }
}

function attachNewListItem(text) {
    const todoList = document.querySelector("#todo_list");

    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.innerText = text;
    button.innerText = "X";

    button.addEventListener("click", detachListItem);

    li.id = `item${getQualifiedNum()}`;

    li.appendChild(span);
    li.appendChild(button);

    todoList.appendChild(li);

    saveTodos();
}

function detachListItem(event) {
    const target = event.currentTarget.parentNode;
    const id = target.id;
    target.remove();

    saveTodos();
}

function saveTodos() {
    const todos = document.querySelector("#todo_list").querySelectorAll("li");

    const dataModelArray = [];

    todos.forEach((element) => {
        const span = element.getElementsByTagName("span")[0];
        dataModelArray.push({
            value: span.innerText,
            id: element.id,
        });
    });

    localStorage.setItem("todos", JSON.stringify(dataModelArray));
}

document.addEventListener("DOMContentLoaded", (event) => {
    if (isLoggedIn()) {
        const todoForm = document.querySelector("#todo_form");

        todoForm.addEventListener("submit", (event) => {
            event.preventDefault();
            if (!getQualifiedNum()) {
                localStorage.setItem("qualifiedNum", 0);
            }

            const todoInput = document.querySelector("#todo_input");
            const text = todoInput.value;

            todoInput.value = "";
            attachNewListItem(text);
            addQualifiedNum();
        });
        loadTodos();
    }
});
