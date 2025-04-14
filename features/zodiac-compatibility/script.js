// Mapping of Zodiac signs to their compatibility results and colors
const zodiacData = {
    Aries: { compatibleSigns: ['Leo', 'Sagittarius', 'Aries'], color: '#ff6f61', icon: '♈', emoji: '🔥' },
    Taurus: { compatibleSigns: ['Virgo', 'Capricorn', 'Taurus'], color: '#ff9a9e', icon: '♉', emoji: '🌱' },
    Gemini: { compatibleSigns: ['Libra', 'Aquarius', 'Gemini'], color: '#ffd700', icon: '♊', emoji: '🌬️' },
    Cancer: { compatibleSigns: ['Scorpio', 'Pisces', 'Cancer'], color: '#c4e1c1', icon: '♋', emoji: '🌊' },
    Leo: { compatibleSigns: ['Aries', 'Sagittarius', 'Leo'], color: '#ff6f61', icon: '♌', emoji: '👑' },
    Virgo: { compatibleSigns: ['Taurus', 'Capricorn', 'Virgo'], color: '#8b7f7f', icon: '♍', emoji: '🌸' },
    Libra: { compatibleSigns: ['Gemini', 'Aquarius', 'Libra'], color: '#a9a9a9', icon: '♎', emoji: '⚖️' },
    Scorpio: { compatibleSigns: ['Cancer', 'Pisces', 'Scorpio'], color: '#9b4d96', icon: '♏', emoji: '🦂' },
    Sagittarius: { compatibleSigns: ['Aries', 'Leo', 'Sagittarius'], color: '#ff7f50', icon: '♐', emoji: '🏹' },
    Capricorn: { compatibleSigns: ['Taurus', 'Virgo', 'Capricorn'], color: '#484848', icon: '♑', emoji: '🐐' },
    Aquarius: { compatibleSigns: ['Gemini', 'Libra', 'Aquarius'], color: '#00bcd4', icon: '♒', emoji: '🌌' },
    Pisces: { compatibleSigns: ['Cancer', 'Scorpio', 'Pisces'], color: '#c1e4fd', icon: '♓', emoji: '🐟' }
};

// Function to check compatibility based on zodiac signs
function checkCompatibility() {
    // Get the selected zodiac signs from the dropdown menus
    const zodiacSign1 = document.getElementById('zodiacSign1').value.trim();
    const zodiacSign2 = document.getElementById('zodiacSign2').value.trim();

    // Check if both signs are selected
    if (!zodiacSign1 || !zodiacSign2) {
        alert('Please select both zodiac signs!');
        return;
    }

    // Check if the selected zodiac signs are valid
    if (!zodiacData[zodiacSign1] || !zodiacData[zodiacSign2]) {
        alert('Invalid zodiac sign selected!');
        return;
    }

    // Get the data for each zodiac sign
    const zodiac1 = zodiacData[zodiacSign1];
    const zodiac2 = zodiacData[zodiacSign2];

    // Check compatibility based on the signs
    const resultCard = document.getElementById('compatibilityResult');
    const isCompatible = zodiac1.compatibleSigns.includes(zodiacSign2);

    // Set the background color based on the first zodiac sign
    resultCard.style.backgroundColor = zodiac1.color;

    // Generate the result message
    let resultMessage = '';
    if (isCompatible) {
        resultMessage = `Your friendship compatibility is strong! 💫 You both share a natural bond.`;
    } else {
        resultMessage = `Your friendship compatibility might need work, but every bond is unique! 🌱`;
    }

    // Update the result card with zodiac icon, emoji, and stars
    resultCard.innerHTML = `
        <h3>${zodiac1.icon} & ${zodiac2.icon} Compatibility</h3>
        <div class="zodiac-icon">${zodiac1.icon} & ${zodiac2.icon}</div>
        <p>${resultMessage}</p>
        <div class="result-stars">
            ${isCompatible ? '🌟🌟🌟' : '🌟🌟'}
        </div>
        <p>${zodiac1.emoji} & ${zodiac2.emoji} energy vibes</p>
    `;

    // Reveal the result card
    resultCard.classList.remove('hidden');
}
