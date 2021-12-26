function setNextQuote(jsondata) {
    const quote = document.querySelector("#quote");
    const quoteAuthor = document.querySelector("#quote_author");

    const jsonArray = Object.values(jsondata)[0];
    const randNum = Math.floor(Math.random() * jsonArray.length);

    quote.innerText = `"${jsonArray[randNum].quote}"`;
    quoteAuthor.innerText = `- ${jsonArray[randNum].author} -`;
}

document.addEventListener("DOMContentLoaded", (event) => {
    const resetBtn = document.querySelector("#reset_btn");
    const todoClearBtn = document.querySelector("#todo_clear_btn");
    const nextQuoteBtn = document.querySelector("#next_quote_btn");

    resetBtn.addEventListener("click", (event) => {
        localStorage.removeItem("name");
    });

    todoClearBtn.addEventListener("click", (event) => {
        const todos = document
            .querySelector("#todo_list")
            .querySelectorAll("li");

        todos.forEach((element) => {
            element.parentNode.removeChild(element);
        });
    });

    nextQuoteBtn.addEventListener("click", (event) => {
        fetch("../data/quotes.json")
            .then((response) => response.json())
            .then(setNextQuote);
    });
});
