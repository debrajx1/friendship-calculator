// List of badges with image paths (relative to badges folder)
const badges = [
  { id: 1, name: 'Friendship Guru', unlocked: false, image: 'logo1.png' },
  { id: 2, name: 'Quiz Master', unlocked: false, image: 'logo2.png' },
  { id: 3, name: 'Mood Tracker Pro', unlocked: false, image: 'logo3.png' },
  { id: 4, name: 'Adventurer', unlocked: false, image: 'logo4.png' },
  { id: 5, name: 'Super Supporter', unlocked: false, image: 'logo5.png' },
  { id: 6, name: 'Positive Vibes', unlocked: false, image: 'logo6.png' },
  { id: 7, name: 'Challenge Champion', unlocked: false, image: 'logo7.png' },
  { id: 8, name: 'Memory Keeper', unlocked: false, image: 'logo8.png' },
  { id: 9, name: 'Star Friend', unlocked: false, image: 'logo9.png' },
  { id: 10, name: 'Compassionate Friend', unlocked: false, image: 'logo10.png' }
];

// Function to display badges
function displayBadges() {
  const badgeList = document.getElementById('badgeList');
  badgeList.innerHTML = ''; // Clear existing badges

  badges.forEach((badge) => {
    const badgeElement = document.createElement('div');
    badgeElement.classList.add('badge-item');
    badgeElement.classList.add(badge.unlocked ? 'unlocked' : 'locked');
    
    badgeElement.innerHTML = 
      `<img src="${badge.image}" alt="${badge.name}" class="badge-image">
      <span class="badge-name">${badge.name}</span>`;

    badgeList.appendChild(badgeElement);
  });
}

// Show a custom notification at the bottom of the container
function showNotification(message) {
  const notification = document.getElementById('notification');
  const notificationMessage = document.getElementById('notificationMessage');
  
  notificationMessage.textContent = message;
  
  // Show the notification with animation
  notification.style.display = 'block';
  notification.classList.add('show');

  // Hide the notification after 3 seconds
  setTimeout(() => {
    notification.classList.remove('show');
    notification.style.display = 'none';
  }, 3000); // 3 seconds
}

// Unlock a badge by ID and show notification
function unlockBadge(badgeId) {
  const badge = badges.find((b) => b.id === badgeId);
  if (badge && !badge.unlocked) {
    badge.unlocked = true;
    saveBadgeStates();
    displayBadges();
    showNotification(`🎉 You unlocked the "${badge.name}" badge!`);
  }
}

// Save badge state to localStorage
function saveBadgeStates() {
  localStorage.setItem('badges', JSON.stringify(badges));
}

// Load badge state from localStorage
function loadBadgeStates() {
  const saved = JSON.parse(localStorage.getItem('badges'));
  if (saved) {
    saved.forEach((savedBadge, i) => {
      if (badges[i]) badges[i].unlocked = savedBadge.unlocked;
    });
  }
  displayBadges();
}

// Claim button example
document.getElementById('claimBadgeBtn').addEventListener('click', () => {
  unlockBadge(1); // Example: unlock badge 1
});

// Initialize
window.addEventListener('DOMContentLoaded', loadBadgeStates);
