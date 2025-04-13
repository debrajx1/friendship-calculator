// Variables to track quiz progress and responses
let currentQuestion = 1;
const totalQuestions = 1; // Update with the total number of questions if more are added
let answers = [];

const quizForm = document.getElementById('quizForm');
const resultCard = document.getElementById('result');
const progressBar = document.getElementById('quiz-progress-bar');
const progressFill = document.querySelector('.quiz-fill');

// Event listener for quiz form submission
quizForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the user's answer to the current question
    const userAnswer = document.getElementById(`question${currentQuestion}`).value.trim();
    
    if (userAnswer === '') {
        alert('Please enter an answer!');
        return;
    }

    // Store the answer
    answers.push(userAnswer);

    // Hide the current question
    document.getElementById(`question${currentQuestion}`).closest('label').style.display = 'none';
    document.getElementById(`question${currentQuestion}`).style.display = 'none';

    // Show the result or next question if there's more
    if (currentQuestion < totalQuestions) {
        currentQuestion++;
        document.getElementById(`question${currentQuestion}`).closest('label').style.display = 'block';
        document.getElementById(`question${currentQuestion}`).style.display = 'block';
        updateProgress();
    } else {
        showResult();
    }
});

// Update progress bar based on quiz progress
function updateProgress() {
    const progressPercentage = (currentQuestion / totalQuestions) * 100;
    progressFill.style.width = `${progressPercentage}%`;
}

// Show the final result based on answers
function showResult() {
    let resultMessage = '🎉 Congratulations! You completed the quiz.';

    // Basic logic to simulate the result based on answers (you can expand this)
    if (answers[0].toLowerCase() === 'blue') {
        resultMessage += ' Your friendship is as cool as the ocean!';
    } else {
        resultMessage += ' Your friendship is unique and special!';
    }

    // Show result card
    resultCard.classList.remove('hidden');
    resultCard.innerHTML = `
        <h3>Quiz Results:</h3>
        <p>${resultMessage}</p>
        <button class="quiz-button reset" onclick="resetQuiz()">🔄 Try Again</button>
    `;
}

// Reset the quiz and hide result
function resetQuiz() {
    currentQuestion = 1;
    answers = [];
    resultCard.classList.add('hidden');
    document.getElementById('question1').closest('label').style.display = 'block';
    document.getElementById('question1').style.display = 'block';
    updateProgress();
}

// Initialize progress bar
updateProgress();


// script.js
document.getElementById("startForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    
    // Get the value of the entered name
    const userName = document.getElementById("userName").value;
    
    // Save the name to localStorage so it can be accessed later on the main page
    if (userName) {
        localStorage.setItem("userName", userName);
    }

    // Redirect to the main index.html page
    window.location.href = "index.html";
});
