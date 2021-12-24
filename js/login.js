function setLabel(name) {
    const label = document.querySelector("#welcome_label");
    label.innerText = `welcome, ${name}!`;
}

function hideLogin(loginForm) {
    loginForm.classList.add("hidden");
}
function showContents() {
    const nav = document.querySelector("#navigation");
    const contents = document.querySelector("#content");

    nav.classList.remove("hidden");
    contents.classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", (event) => {
    const loginInput = document.querySelector("#name_field input");
    const loginForm = document.querySelector("#name_field");

    const storageName = localStorage.getItem("name");

    if (storageName !== null) {
        //label setting
        setLabel(storageName);
        //hide login form and show others
        hideLogin(loginForm);
        showContents();
    } else {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();

            //label setting
            const name = loginInput.value;
            localStorage.setItem("name", name);
            setLabel(name);

            //hide login form and show others
            hideLogin(loginForm);
            showContents();
        });
    }
});
