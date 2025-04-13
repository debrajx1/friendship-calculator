const badges = [
    { name: "Day One Duo", description: "Started your friendship journey!" },
    { name: "Milestone Mates", description: "Reached 5 milestones together." },
    { name: "Challenge Champions", description: "Completed 3 friendship challenges." },
    { name: "Mood Matchers", description: "Synced moods 10 times." },
    { name: "Zodiac Zealots", description: "Checked zodiac compatibility." }
  ];
  
  const badgeList = document.getElementById("badgeList");
  
  badges.forEach(badge => {
    const li = document.createElement("li");
    li.textContent = `${badge.name} - ${badge.description}`;
    badgeList.appendChild(li);
  });
  