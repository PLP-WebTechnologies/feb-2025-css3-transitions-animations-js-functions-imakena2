const startBtn = document.getElementById('startBtn');
const playerNameInput = document.getElementById('playerName');
const greeting = document.getElementById('greeting');

// Load saved name
window.onload = function () {
  const savedName = localStorage.getItem('playerName');
  if (savedName) {
    greeting.textContent = `👋 Welcome back, ${savedName}! Let's Play!`;
  }
};

// On button click
startBtn.addEventListener('click', function () {
  const name = playerNameInput.value.trim();
  if (name) {
    localStorage.setItem('playerName', name);
    greeting.textContent = `🎮 Hello, ${name}! Let's start the game!`;

    // Animate button for fun
    startBtn.style.backgroundColor = "#FFD700";
    startBtn.style.transform = "scale(1.3)";
    setTimeout(() => {
      startBtn.style.transform = "scale(1)";
    }, 300);
  } else {
    alert("Please enter your name!");
  }
});
