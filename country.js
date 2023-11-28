const countries =  ["US/UK", "Nigeria", "Cameroon"]; 
const generateButton = document.getElementById("generateButton"); 

function generateRandomCountry(){
  const randomIndex = Math.floor(Math.random() * countries.length);

  const randomct = countries[randomIndex];

  document.getElementById("ctbut").textContent = `You are now a researcher in: ${randomct}`;
}

generateButton.addEventListener("click", generateRandomCountry);