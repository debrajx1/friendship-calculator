function checkCompatibility() {
    const zodiacSign = document.getElementById("zodiacSign").value.trim().toLowerCase();
    const result = document.getElementById("compatibilityResult");

    if (zodiacSign === "aries") {
        result.innerHTML = "Your compatibility with Leo is off the charts! 🔥";
    } else {
        result.innerHTML = "Compatibility is still being calculated...";
    }

    result.classList.remove("hidden");
}
