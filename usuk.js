
const westButton = document.getElementById("westButton");
const usukResult = document.getElementById("usukbut");

let clickCount = 0;

westButton.addEventListener("click", () => {
    const selectedOption = usukgenerateRandomOption();
    usukResult.textContent = `You: ${selectedOption}`;

    // Check if it's the 5th click
    if (++clickCount % 5 === 0) {
        // Show an alert on every 5th click
        usukshowAlert();
    }
});

function usukgenerateRandomOption() {
    const options = ["Can Publish", "Can't Publish"];
    const randomNumber = Math.random();

    // Favor "Can Publish" with a probability of 70%
    const selectedOption = randomNumber < 0.9 ? options[0] : options[1];

    return selectedOption;
}

function usukshowAlert() {
    // Display an alert on the HTML screen
    alert("Your APC funding that was promised by your institution was taken away to be used as a scholarship. Happy for them, but you lost 2 open access publications. If you are the humanities, you lost 3, and Law lost all!");
}

