const africaButton = document.getElementById("africaButton");
const africaResult = document.getElementById("africabut");

let africaclickCount = 0;

africaButton.addEventListener("click", () => {
    const selectedOption = generateRandomOption();
    africaResult.textContent = `You: ${selectedOption}`;

    // Check if it's the 3rd click
    if (++clickCount % 3 === 0) {
        // Show an alert on every 3rd click
        showAlert();
    }
});

function generateRandomOption() {
    const options = ["Can Publish", "Can't Publish"];
    const randomNumber = Math.random();

    const selectedOption = randomNumber < 0.7 ? options[1] : options[0];

    return selectedOption;
}

function showAlert() {
    alert("Your institution didn’t have enough money to fund your APCs, so you had to publish in a closed access journal. -1 publication.");
}
