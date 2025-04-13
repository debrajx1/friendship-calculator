const challenges = [
    "Share a photo from your first hangout.",
    "Write a poem about your friendship.",
    "Plan a virtual movie night.",
    "Create a shared playlist.",
    "Take a friendship quiz together."
  ];
  
  const challengeList = document.getElementById("challengeList");
  
  challenges.forEach(challenge => {
    const li = document.createElement("li");
    li.textContent = challenge;
    challengeList.appendChild(li);
  });
  