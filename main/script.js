function calculateFriendship() {
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();
    const resultDiv = document.getElementById("result");
    const progressBar = document.getElementById("progressBar");

    if (!name1 || !name2) {
        alert("Please enter both names!");
        return;
    }

    const formattedName1 = capitalize(name1);
    const formattedName2 = capitalize(name2);

    const type = getFriendshipType(name1, name2);
    const message = getMessageByType(type, formattedName1, formattedName2);

    // Show loading bar
    progressBar.classList.remove("hidden");
    resultDiv.classList.add("hidden");

    setTimeout(() => {
        const funFacts = [
            "Did you know? Laughing together strengthens bonds! 😂",
            "Friendship boosts your immune system. 🛡️",
            "Strong friendships can extend your lifespan. 💖",
            "Talking to a friend daily reduces stress. ☕",
            "Friends help you grow into your best self. 🌱",
            "True friends can finish each other's sentences. 🧠",
            "Hugging a friend releases oxytocin – the love hormone! 🤗",
            "Sharing memes improves friendship quality. 📱",
            "Friends can sync their heartbeats when they laugh together. ❤️",
            "Friendship improves memory and brain health. 🧠✨",
            "Best friends even affect your dreams. 🌙",
            "Friendship is the best therapy, and it’s free! 🛋️💬",
            "Playing games with friends increases trust. 🎮🤝",
            "You only need 3-5 close friends for a happier life. 😊",
            "Friends reduce the risk of depression. 🌤️",
            "People with strong friendships live 22% longer. ⏳",
            "Inside jokes are friendship magic. 🪄😂",
            "Old friends = gold. They boost your sense of identity. 👯‍♂️",
            "Making a new friend releases dopamine. 🚀",
            "Friendship is stronger than genetics — science says so! 🧬❤️",
            "Quality matters more than quantity in friendship. 🌟",
            "A good friend is like a four-leaf clover — hard to find, lucky to have! 🍀",
            "Friends who adventure together stay together. 🌍🧭",
            "Friendship is the only cement that will ever hold the world together. 🌎",
            "You don't just grow up, you grow with your friends. 🌳",
            "Friendship makes every silly moment a memory. 📸",
            "True friendship doesn't require daily conversation. It's about connection. 📶",
            "A real friend walks in when the world walks out. 🚪👣",
            "Friends are the family you choose. 🏡❤️",
            "Laughter shared with friends is laughter doubled. 😄➡️😄"
        ];
        const randomFact = funFacts.sort(() => 0.5 - Math.random())[0];        

        resultDiv.innerHTML = `
            <h2>${formattedName1} 💞 ${formattedName2}</h2>
            <h3>Friendship Type: <span style="color:#ff6f61">${type}</span></h3>
            <p>${message}</p>
            <div class="emoji-burst">🎉💖🤝✨</div>
            <p style="margin-top:10px;color:#888;"><em>${randomFact}</em></p>
        `;

        resultDiv.classList.remove("hidden");
        progressBar.classList.add("hidden");
        resultDiv.scrollIntoView({ behavior: "smooth" });
    }, 1500);
}



// Capitalize first letter
function capitalize(name) {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

// Determine "Friendship Type"
function getFriendshipType(name1, name2) {
    const combined = (name1 + name2).toLowerCase();
    const uniqueLetters = new Set(combined).size;
    const hash = combined.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);

    if (uniqueLetters > 15 || hash % 7 === 0) return "Cosmic Connection";
    if (hash % 5 === 0) return "Soul Buddies";
    if (hash % 3 === 0) return "Forever Friends";
    if (hash % 2 === 0) return "Trusty Team";
    return "Chill Companions";
}

// Sweet poetic messages
function getMessageByType(type, name1, name2) {
    switch (type) {
        case "Cosmic Connection":
            return `${name1} and ${name2}, your souls dance among the stars. You're bonded beyond lifetimes, a friendship forged in stardust. 🌌✨`;
        case "Soul Buddies":
            return `You two are puzzle pieces that just fit — ${name1} and ${name2}, your energy flows like music. 🎶💞`;
        case "Forever Friends":
            return `Whether it’s decades or days, ${name1} and ${name2} always find laughter, comfort, and connection. You’re meant to last. 🌈🤗`;
        case "Trusty Team":
            return `${name1} and ${name2}, you’ve got each other’s backs. Sidekicks for every mission, teammates for every challenge. 💪🚀`;
        case "Chill Companions":
            return `No drama, just vibes. ${name1} and ${name2}, you bring peace, warmth, and quiet joy to each other's lives. 🌿☕`;
        default:
            return `Your connection is unique and meaningful. ${name1} and ${name2}, your friendship is one of a kind! ✨`;
    }
}
