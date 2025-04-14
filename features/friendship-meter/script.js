function calculateFriendship() {
    const name1 = document.getElementById("friendName1").value.trim();
    const name2 = document.getElementById("friendName2").value.trim();
    const resultContainer = document.getElementById("friendshipResult");

    // Ensure both names are entered
    if (!name1 || !name2) {
        resultContainer.className = "result-card show";
        resultContainer.innerHTML = "⚠️ Please enter both names to calculate the friendship score.";
        return;
    }

    // Generate a professional, meaningful friendship score
    const score = generateFriendshipScore(name1, name2);
    const message = getMessage(score);
    const emoji = getEmoji(score);
    const stars = getStars(score);

    // Display the results professionally
    resultContainer.className = "result-card show";
    resultContainer.innerHTML = `
        <div class="zodiac-icon">${emoji}</div>
        <p class="score"><strong>Friendship Score:</strong> ${score}%</p>
        <div class="result-stars">${stars}</div>
        <p class="message">${message}</p>
    `;
}

function generateFriendshipScore(name1, name2) {
    // Normalize the names (lowercase and remove non-alphabetical characters)
    const normalized1 = name1.toLowerCase().replace(/[^a-z]/g, "");
    const normalized2 = name2.toLowerCase().replace(/[^a-z]/g, "");

    // Calculate the common characters between both names
    let commonCharacters = 0;
    for (let char of normalized1) {
        if (normalized2.includes(char)) {
            commonCharacters++;
        }
    }

    // Adjust score based on length difference, this time using a more precise factor
    const lengthDifference = Math.abs(name1.length - name2.length);
    const nameMatchScore = Math.min(commonCharacters / Math.max(name1.length, name2.length), 1);

    // Combine these to generate the final score, adding sophistication
    const rawScore = Math.floor((nameMatchScore * 100) - (lengthDifference / 2));

    // Ensure score stays between 0 and 100
    return Math.max(0, Math.min(100, rawScore));
}

function getMessage(score) {
    if (score >= 90) return "🌟 Your connection is extraordinary. True soulmates!";
    if (score >= 75) return "💫 You have an amazing bond — true friendship goals!";
    if (score >= 50) return "😊 A solid, reliable connection — a great friendship!";
    if (score >= 30) return "🙂 There's good potential here — nurture this bond!";
    return "🤔 This connection might need more shared moments to strengthen.";
}

function getEmoji(score) {
    if (score >= 90) return "👯‍♂️";
    if (score >= 75) return "💞";
    if (score >= 50) return "🤝";
    if (score >= 30) return "🌱";
    return "📉";
}

function getStars(score) {
    const filled = Math.round(score / 20); // 0–5 stars, based on score
    const empty = 5 - filled;

    let stars = "";

    // Add filled stars (full yellow stars)
    for (let i = 0; i < filled; i++) {
        stars += '<i class="fas fa-star" style="color: #FFD700;"></i>';
    }

    // Add empty stars (empty outline stars)
    for (let i = 0; i < empty; i++) {
        stars += '<i class="far fa-star" style="color: #FFD700;"></i>';
    }

    return stars;
}
