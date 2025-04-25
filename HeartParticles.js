const heartButton = document.getElementById("heartButton");
const particlesContainer = document.getElementById("particlesContainer");
const textBox = document.getElementById("textBox");

const messages = [
  "I love how much of a kind soul you are! 💕",
  "I can't wait to spend the rest of my days with you!",
  "You make my heart go badonkadonk",
  "You are so dedicated and I love it!",
  "",
  "Here’s a heart just for you! 💓",
  "Keep spreading the love! 💘",
  "Let’s fill the world with hearts! 💝",
  "You’ve got a lot of heart! 💓",
  "Feel the love! ❤️"
];

heartButton.addEventListener("click", () => {
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  textBox.textContent = randomMessage;

  const rect = heartButton.getBoundingClientRect();
  const topY = rect.top + 10; // near top of heart

  const totalParticles = 20;

  for (let i = 0; i < totalParticles; i++) {
    setTimeout(() => {
      const mini = document.createElement("div");
      mini.classList.add("mini-heart");

      // Randomize horizontal starting position across the top of the heart
      const randomX = rect.left + Math.random() * rect.width;

      mini.style.left = `${randomX}px`;
      mini.style.top = `${topY}px`;

      // Random spread directions
      const xOffset = (Math.random() - 0.5) * 120; // ±60px
      const yOffset = -Math.random() * 200 - 50;   // upwards

      mini.style.setProperty("--x", `${xOffset}px`);
      mini.style.setProperty("--y", `${yOffset}px`);

      particlesContainer.appendChild(mini);

      setTimeout(() => {
        mini.remove();
      }, 1600);
    }, i * 20); // Slight stagger
  }
});
