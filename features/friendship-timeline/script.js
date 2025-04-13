function addMilestone() {
    const date = document.getElementById("dateInput").value;
    const timeline = document.getElementById("timeline");

    const newMilestone = document.createElement("li");
    newMilestone.textContent = `Milestone reached on: ${date}`;
    timeline.appendChild(newMilestone);
}
