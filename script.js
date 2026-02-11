const button = document.getElementById("getImage");
const display = document.getElementById("imageDisplay");

button.addEventListener("click", () => {
    display.textContent = "Loading...";

    fetch("http://api.quotable.io/random")
        .then(res => res.json())
        .then(data => {
            const img = document.createElement("img");
            img.src = data.message;
            img.alt = "Random dog";

            display.innerHTML = "";
            display.appendChild(img);
        })
        .catch(error => {
            display.textContent = "Something went wrong. Please try again.";
            console.log("Fetch error", error);
        });
});
