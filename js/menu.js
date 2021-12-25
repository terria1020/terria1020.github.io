document.addEventListener("DOMContentLoaded", (event) => {
    const resetBtn = document.querySelector("#reset_btn");
    resetBtn.addEventListener("click", (event) => {
        localStorage.removeItem("name");
    });

    const todoClearBtn = document.querySelector("#todo_clear_btn");
    todoClearBtn.addEventListener("click", (event) => {
        const todos = document
            .querySelector("#todo_list")
            .querySelectorAll("li");

        todos.forEach((element) => {
            element.parentNode.removeChild(element);
        });
    });
});
