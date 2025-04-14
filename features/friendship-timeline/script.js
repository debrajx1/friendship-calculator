const memoryForm = document.getElementById('memoryForm');
const memoryText = document.getElementById('memoryText');
const memoryDate = document.getElementById('memoryDate');
const memoryImage = document.getElementById('memoryImage');
const memoryMood = document.getElementById('memoryMood');
const previewImage = document.getElementById('previewImage');
const timelineContainer = document.getElementById('timelineContainer');
const memoryCount = document.getElementById('memoryCount').querySelector('span');
let memories = [];

memoryImage.addEventListener('change', () => {
  const file = memoryImage.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = e => {
      previewImage.src = e.target.result;
      previewImage.style.display = 'block';
    };
    reader.readAsDataURL(file);
  }
});

memoryForm.addEventListener('submit', e => {
  e.preventDefault();

  const memory = {
    text: memoryText.value,
    date: memoryDate.value,
    mood: memoryMood.value,
    image: previewImage.src,
    reactions: { like: 0, love: 0, funny: 0 },
    comments: [],
    userReaction: null // ✅ Track current user's selected reaction
  };
  
  memories.unshift(memory);
  memoryForm.reset();
  previewImage.style.display = 'none';
  renderMemories();
});

function renderMemories() {
  timelineContainer.innerHTML = '';
  memoryCount.textContent = memories.length;

  memories.forEach((memory, index) => {
    const div = document.createElement('div');
    div.className = 'memory-entry animate__animated animate__fadeInUp';
    div.innerHTML = `
      <h3>${memory.text} ${memory.mood}</h3>
      <small>${new Date(memory.date).toDateString()}</small>
      ${memory.image ? `<img src="${memory.image}" alt="Memory Image" />` : ''}
      <div class="reactions">
        <button onclick="react(${index}, 'like')">👍 ${memory.reactions.like}</button>
        <button onclick="react(${index}, 'love')">❤️ ${memory.reactions.love}</button>
        <button onclick="react(${index}, 'funny')">😂 ${memory.reactions.funny}</button>
      </div>
      <div class="comments">
        <textarea placeholder="Add a comment..." onkeypress="if(event.key==='Enter'){addComment(event, ${index})}"></textarea>
        ${memory.comments.map(comment => `<p>💬 ${comment}</p>`).join('')}
      </div>
      <div class="memory-controls">
        <button onclick="editMemory(${index})">✏️ Edit</button>
        <button onclick="deleteMemory(${index})">🗑️ Delete</button>
      </div>
    `;
    timelineContainer.appendChild(div);
  });
}

function react(index, type) {
  // Each memory stores one activeReaction to simulate a single user
  const memory = memories[index];

  if (!memory.userReaction) {
    memory.userReaction = type;
    memory.reactions[type]++;
  } else if (memory.userReaction === type) {
    // Toggle off the same reaction
    memory.reactions[type]--;
    memory.userReaction = null;
  } else {
    // Switch reaction: decrease previous and increase new
    memory.reactions[memory.userReaction]--;
    memory.reactions[type]++;
    memory.userReaction = type;
  }

  renderMemories();
}


function addComment(event, index) {
  const commentBox = event.target;
  const comment = commentBox.value.trim();
  if (comment) {
    memories[index].comments.push(comment);
    commentBox.value = '';
    renderMemories();
  }
}

function deleteMemory(index) {
  if (confirm('Are you sure you want to delete this memory?')) {
    memories.splice(index, 1);
    renderMemories();
  }
}

function editMemory(index) {
  const memory = memories[index];
  memoryText.value = memory.text;
  memoryDate.value = memory.date;
  memoryMood.value = memory.mood;
  previewImage.src = memory.image;
  previewImage.style.display = 'block';
  memories.splice(index, 1);
  renderMemories();
}
