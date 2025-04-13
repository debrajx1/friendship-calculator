function trackMood() {
    const mood = document.getElementById("moodInput").value;
    const moodResult = document.getElementById("moodResult");

    moodResult.innerHTML = `Your mood today is: ${mood}`;
    moodResult.classList.remove("hidden");
}
