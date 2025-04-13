function updateFriendshipMeter() {
    const score = document.getElementById("compatibilityScore").value;
    const meter = document.getElementById("friendshipMeter");

    meter.style.width = score + '%';
    meter.style.backgroundColor = score > 50 ? '#ff6f61' : '#fcb69f';
}
