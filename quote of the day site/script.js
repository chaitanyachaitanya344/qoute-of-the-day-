// Constant variables
const randomquote = document.getElementById('randomquote');
const quoteAuthor = document.getElementById('quoteAuthor');
const generatequoteButton = document.getElementById('generatequote');
const copyquote = document.getElementById('copyquote');

// Generate random quote using API
function generateQuote() {
    fetch("https://api.quotable.io/random")
        .then(res => res.json())
        .then(result => {
            randomquote.textContent = result.content;
            quoteAuthor.textContent = result.author;
        });
}

generatequoteButton.addEventListener("click", generateQuote);

// Copy the quote to clipboard when the copyquote button is clicked
copyquote.addEventListener("click", function () {
    const quoteText = randomquote.textContent;
    const textArea = document.createElement("textarea");
    textArea.value = quoteText;

    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    alert("Quote copied to clipboard.");
});
