function trackMood() {
    const moodInput = document.getElementById("moodInput").value.trim();
    const moodResult = document.getElementById("moodResult");
    const emojiDisplay = document.getElementById("emojiDisplay");
    const moodMessage = document.getElementById("moodMessage");

    if (!moodInput) {
        moodMessage.innerText = "Please tell us how you're feeling! 😌";
        emojiDisplay.innerHTML = "🤔";
        moodResult.classList.add("hidden");
        return;
    }

    // Generate mood result
    const mood = generateMood(moodInput);

    // Show appropriate result
    moodResult.classList.remove("hidden");
    emojiDisplay.innerHTML = mood.emoji;
    emojiDisplay.className = `emoji ${mood.emojiClass}`;  // Add dynamic animation class
    moodMessage.innerText = mood.message;
}

function trackMood() {
    const moodInput = document.getElementById("moodInput").value.trim();
    const moodResult = document.getElementById("moodResult");
    const emojiDisplay = document.getElementById("emojiDisplay");
    const moodMessage = document.getElementById("moodMessage");

    if (!moodInput) {
        moodMessage.innerText = "Please tell us how you're feeling! 😌";
        emojiDisplay.innerHTML = "🤔";
        moodResult.classList.add("hidden");
        return;
    }

    // Generate mood result
    const mood = generateMood(moodInput);

    // Show appropriate result
    moodResult.classList.remove("hidden");
    emojiDisplay.innerHTML = mood.emoji;
    emojiDisplay.className = `emoji ${mood.emojiClass}`;  // Add dynamic animation class
    moodMessage.innerText = mood.message;
}

function generateMood(moodInput) {
    const moodResult = document.getElementById("moodResult");
    const emoji = document.getElementById("emoji");
    const moodMessage = document.getElementById("moodMessage");

    // Convert the input mood to lowercase to make comparisons easier
    const mood = moodInput.toLowerCase();

    // Default message and emoji
    let message = "That's an interesting mood!";
    let emojiClass = "";  // Default class

    // Determine the emoji and message based on the mood input
    if (mood.includes("happy")) {
        message = "You're feeling amazing today! Shine on and spread that positivity! ✨";
        emojiClass = "happy bounce";  // Bouncing emoji
        emoji.innerHTML = "😊";  // Happy emoji
    } else if (mood.includes("sad")) {
        message = "You're feeling a little down... Remember, tomorrow is a new day! 🌅";
        emojiClass = "sad wobble";  // Wobbling emoji
        emoji.innerHTML = "😔";  // Sad emoji
    } else if (mood.includes("neutral")) {
        message = "You're in a zen state of mind—balanced and peaceful. 🌿";
        emojiClass = "neutral pulse";  // Pulsing emoji
        emoji.innerHTML = "😐";  // Neutral emoji
    } else if (mood.includes("excited")) {
        message = "You're bursting with energy and enthusiasm! Keep that excitement flowing! ⚡";
        emojiClass = "excited shake";  // Shaking emoji
        emoji.innerHTML = "😆";  // Excited emoji
    } else if (mood.includes("angry")) {
        message = "Take a deep breath, you're in control. Let's find that calm together! 🧘";
        emojiClass = "angry shake";  // Shaking emoji
        emoji.innerHTML = "😡";  // Angry emoji
    } else if (mood.includes("stressed")) {
        message = "Feeling overwhelmed? Take a moment for yourself, breathe, and reset. 🌸";
        emojiClass = "stressed spin";  // Spinning emoji
        emoji.innerHTML = "😰";  // Stressed emoji
    } else if (mood.includes("hopeful")) {
        message = "The future is bright, and you're ready for it! Stay hopeful and keep going! 🌟";
        emojiClass = "hopeful pulse";  // Pulsing emoji
        emoji.innerHTML = "🌈";  // Hopeful emoji
    } else if (mood.includes("grateful")) {
        message = "You're feeling grateful! Appreciate the small things, they make life beautiful! 🌷";
        emojiClass = "grateful spin";  // Spinning emoji
        emoji.innerHTML = "🙏";  // Grateful emoji
    } else if (mood.includes("confident")) {
        message = "You're exuding confidence! Walk into the world with your head held high! 💪";
        emojiClass = "confident bounce";  // Bouncing emoji
        emoji.innerHTML = "😎";  // Confident emoji
    } else if (mood.includes("inspired")) {
        message = "You're feeling inspired! The world is your canvas, create something amazing! 🎨";
        emojiClass = "inspired pulse";  // Pulsing emoji
        emoji.innerHTML = "🔥";  // Inspired emoji
    } else if (mood.includes("romantic")) {
        message = "You're feeling romantic! Let love fill the air! 💕";
        emojiClass = "romantic shake";  // Shaking emoji
        emoji.innerHTML = "💘";  // Romantic emoji
    } else if (mood.includes("bored")) {
        message = "You're feeling bored... Time to spice things up with something new! 🎮";
        emojiClass = "bored wobble";  // Wobbling emoji
        emoji.innerHTML = "😒";  // Bored emoji
    } else if (mood.includes("energetic")) {
        message = "You're full of energy! Let's conquer the world! ⚡";
        emojiClass = "energetic bounce";  // Bouncing emoji
        emoji.innerHTML = "🤩";  // Energetic emoji
    } else if (mood.includes("silly")) {
        message = "You're feeling silly! Laughter is the best medicine, enjoy the moment! 😜";
        emojiClass = "silly shake";  // Shaking emoji
        emoji.innerHTML = "😂";  // Silly emoji
    } else if (mood.includes("curious")) {
        message = "You're feeling curious! Explore, learn, and discover new things! 🔍";
        emojiClass = "curious pulse";  // Pulsing emoji
        emoji.innerHTML = "🧐";  // Curious emoji
    } else if (mood.includes("motivated")) {
        message = "You're motivated and ready to take on any challenge! Let's do this! 💥";
        emojiClass = "motivated shake";  // Shaking emoji
        emoji.innerHTML = "💥";  // Motivated emoji
    } else if (mood.includes("confused")) {
        message = "You're feeling a bit confused... Take your time, clarity will come! 🤔";
        emojiClass = "confused wobble";  // Wobbling emoji
        emoji.innerHTML = "😕";  // Confused emoji
    } else {
        message = "Hmm, that's a unique mood! Embrace it and go with the flow. 🌊";
        emojiClass = "thinking bounce";  // Bouncing emoji
        emoji.innerHTML = "🤔";  // Thinking emoji
    }

    // Apply the corresponding class to the emoji
    emoji.className = `emoji ${emojiClass}`;

    // Show the result
    moodMessage.innerText = message;
    moodResult.classList.remove("hidden");
}
