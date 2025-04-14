const dice = document.getElementById('dice');
const challengeText = document.getElementById('challenge');

const challenges = [
  "Do 10 jumping jacks!",
  "Share a funny memory.",
  "Compliment someone.",
  "Tell a joke!",
  "Do a quick dance!",
  "Make a silly face!"
];

// Map dice roll to rotation values
const faceRotations = {
  1: 'rotateX(0deg) rotateY(0deg)',
  2: 'rotateX(0deg) rotateY(180deg)',
  3: 'rotateX(0deg) rotateY(-90deg)',
  4: 'rotateX(0deg) rotateY(90deg)',
  5: 'rotateX(-90deg) rotateY(0deg)',
  6: 'rotateX(90deg) rotateY(0deg)'
};

function rollDice() {
  const roll = Math.floor(Math.random() * 6) + 1;

  // Apply rotation for the face
  dice.style.transform = faceRotations[roll];

  // Delay showing the challenge for realism
  setTimeout(() => {
    challengeText.style.opacity = 0;
    setTimeout(() => {
      challengeText.textContent = challenges[roll - 1];
      challengeText.style.opacity = 1;
    }, 200);
  }, 1800); // Wait just before animation ends
}
