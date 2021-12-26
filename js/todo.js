function loadTodos() {
    return localStorage.getItem("todos");
}

function saveTodos() {}

document.addEventListener("DOMContentLoaded", (event) => {
    const todoForm = document.querySelector("#todo_form");
    todoForm.addEventListener("submit", (event) => {
        event.preventDefault();
    });
});
