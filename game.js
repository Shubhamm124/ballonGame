const balloonsContainer = document.getElementById("balloons");
const scoreDisplay = document.getElementById("score");
let score = 0;

function generateBalloon() {
  const balloon = document.createElement("div");
  balloon.classList.add("balloon");

  // Randomize position
  const positionX = Math.random() * (balloonsContainer.clientWidth - 50);
  balloon.style.left = `${positionX}px`;

  // Randomize animation speed
  const speed = Math.random() * 3 + 2; // Balloons rise between 2 and 5 seconds
  balloon.style.animation = `rise ${speed}s linear forwards`;

  // Attach click event to pop the balloon
  balloon.addEventListener("click", () => {
    popBalloon(balloon);
  });

  balloonsContainer.appendChild(balloon);

  // Remove balloon after animation ends if it wasn't clicked
  setTimeout(() => {
    if (balloon.parentNode) {
      balloon.remove();
    }
  }, speed * 1000);
}

function popBalloon(balloon) {
  balloon.classList.add("pop");
  score += 1;
  scoreDisplay.textContent = `Score: ${score}`;
  setTimeout(() => balloon.remove(), 300);
}

// Create balloons every 2 to 5 seconds
setInterval(generateBalloon, 2000);

