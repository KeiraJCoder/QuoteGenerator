// Variables 
const button = document.getElementById("fetchQuote");
const quoteDisplay = document.getElementById("quoteDisplay");

// Event Listener
button.addEventListener("click", () => {

    quoteDisplay.textContent = "Loading...";

    fetch("https://api.quotable.io/random")
        .then(res => res.json())
        .then(data => {

            // Create elements for quote and author
            const quoteText = document.createElement("p");
            quoteText.textContent = `"${data.content}"`;

            const authorText = document.createElement("p");
            authorText.textContent = `— ${data.author}`;

            // Clear previous content
            quoteDisplay.innerHTML = "";

            // Add both elements to the page
            quoteDisplay.appendChild(quoteText);
            quoteDisplay.appendChild(authorText);

        })
        .catch(error => {
            quoteDisplay.textContent = "Something went wrong.";
            console.error("Error fetching the quote:", error);
        });

});
