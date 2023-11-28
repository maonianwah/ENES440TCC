const discipline = ["Computing", "Medicine", "Humanities", "Law"];
const buttonGenerate = document.getElementById("disButton");

function generateRandomDiscipline() {
  const randomIndex = Math.floor(Math.random() * discipline.length);

  const randomds = discipline[randomIndex];

  document.getElementById("discbut").textContent = `You do research in: ${randomds}`;
}

buttonGenerate.addEventListener("click", generateRandomDiscipline);
