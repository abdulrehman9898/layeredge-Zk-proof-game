// Cursor effect
const cursor = document.getElementById("cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
  cursor.style.boxShadow = `0 0 10px rgb(${Math.random()*218},${Math.random()*218},${Math.random()*218})`;
});

// Modal
function openModal() {
  document.getElementById("tutorialModal").style.display = "block";
}
function closeModal() {
  document.getElementById("tutorialModal").style.display = "none";
}

// Game Logic
let points = 0;
let tries = 0;

function playGame() {
  const output = document.getElementById("gameOutput");
  const leaderboard = document.getElementById("leaderboard");
  tries++;

  const win = Math.random() < 0.2 || (tries % 5 === 0); // 20% chance or every 5th try
  if (win) {
    points += Math.floor(Math.random() * 50 + 10);
    output.innerHTML = `✅ Valid ZKP! You earned points. Total: ${points}`;
  } else {
    points = Math.max(0, points - 10);
    output.innerHTML = `❌ Invalid proof. -10 points. Total: ${points}`;
  }

  leaderboard.innerHTML = `<h4>Leaderboard</h4><p>You: ${points} pts | Attempts: ${tries}</p>`;
}
