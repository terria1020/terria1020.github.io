function isLoggedIn() {
    const name = localStorage.getItem("name");
    return name !== null;
}

function setQuote(jsondata) {
    const quote = document.querySelector("#quote");
    const quoteAuthor = document.querySelector("#quote_author");

    const jsonArray = Object.values(jsondata)[0];
    const randNum = Math.floor(Math.random() * jsonArray.length);

    quote.innerText = `"${jsonArray[randNum].quote}"`;
    quoteAuthor.innerText = `- ${jsonArray[randNum].author} -`;
}

function attachQuote() {
    fetch("../data/quotes.json")
        .then((response) => response.json())
        .then(setQuote);
}

document.addEventListener("DOMContentLoaded", (event) => {
    if (isLoggedIn()) {
        fetch("../data/quotes.json")
            .then((response) => response.json())
            .then(setQuote);
    } else {
        const loginForm = document.querySelector("#name_field");
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();
            fetch("../data/quotes.json")
                .then((response) => response.json())
                .then(setQuote);
        });
    }
});
