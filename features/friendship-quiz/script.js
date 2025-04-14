const maxQuestions = 5;
let questionCount = 0;

const questionContainer = document.getElementById('questionContainer');
const addQuestionBtn = document.getElementById('addQuestionBtn');
const quizCreatorForm = document.getElementById('quizCreatorForm');
const quizTakerForm = document.getElementById('quizTakerForm');
const quizContainer = document.getElementById('quizContainer');
const resultCard = document.getElementById('resultCard');
const resultText = document.getElementById('resultText');
const quizTakerSection = document.getElementById('quiz-taker');
const quizCreatorSection = document.getElementById('quiz-creator');

// Add a new question input set
addQuestionBtn.addEventListener('click', () => {
    if (questionCount >= maxQuestions) {
        alert('You can only add up to 5 questions.');
        return;
    }

    const qDiv = document.createElement('div');
    qDiv.className = 'quiz-question-set';

    qDiv.innerHTML = `
        <label>❓ Question ${questionCount + 1}</label>
        <input type="text" class="quiz-input question-text" placeholder="Enter question..." required />
        <div class="quiz-options">
            <div class="quiz-option">
                <input type="radio" name="correct-${questionCount}" value="0" required />
                <input type="text" class="quiz-input option" placeholder="Option A" required />
            </div>
            <div class="quiz-option">
                <input type="radio" name="correct-${questionCount}" value="1" />
                <input type="text" class="quiz-input option" placeholder="Option B" required />
            </div>
            <div class="quiz-option">
                <input type="radio" name="correct-${questionCount}" value="2" />
                <input type="text" class="quiz-input option" placeholder="Option C" required />
            </div>
            <div class="quiz-option">
                <input type="radio" name="correct-${questionCount}" value="3" />
                <input type="text" class="quiz-input option" placeholder="Option D" required />
            </div>
        </div>
    `;

    questionContainer.appendChild(qDiv);
    questionCount++;
});

// Save the quiz (with answers hidden for the friend)
quizCreatorForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const questions = [];
    const sets = document.querySelectorAll('.quiz-question-set');

    sets.forEach((set, index) => {
        const qText = set.querySelector('.question-text').value;
        const options = Array.from(set.querySelectorAll('.option')).map(o => o.value);
        const correct = set.querySelector(`input[name="correct-${index}"]:checked`).value;

        questions.push({ question: qText, options, answer: parseInt(correct) });
    });

    // Save quiz to localStorage
    localStorage.setItem('friendshipQuiz', JSON.stringify(questions));
    alert('✅ Quiz saved successfully!');

    // Switch to take quiz form
    quizCreatorSection.classList.add('hidden');
    quizTakerSection.classList.remove('hidden');
    loadQuiz();
});

// Load the quiz to take the quiz
function loadQuiz() {
    const storedQuiz = localStorage.getItem('friendshipQuiz');
    if (!storedQuiz) return;

    const questions = JSON.parse(storedQuiz);
    quizContainer.innerHTML = '';

    questions.forEach((q, i) => {
        const qBlock = document.createElement('div');
        qBlock.innerHTML = `<p><strong>${i + 1}. ${q.question}</strong></p>`;

        q.options.forEach((opt, idx) => {
            const id = `q${i}_opt${idx}`;
            qBlock.innerHTML += `
                <div class="quiz-option">
                    <input type="radio" name="q${i}" id="${id}" value="${idx}" required />
                    <label for="${id}">${opt}</label>
                </div>
            `;
        });

        quizContainer.appendChild(qBlock);
    });
}

// Handle quiz submission (check answers without revealing correct answers)
quizTakerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const storedQuiz = JSON.parse(localStorage.getItem('friendshipQuiz'));
    if (!storedQuiz) return;

    let score = 0;

    storedQuiz.forEach((q, i) => {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected && parseInt(selected.value) === q.answer) {
            score++;
        }
    });

    resultText.textContent = `🎉 You got ${score} out of ${storedQuiz.length} correct! ${
        score === storedQuiz.length ? "You're true besties! 💖" : "Not bad! Keep bonding! 😄"
    }`;

    resultCard.classList.remove('hidden');
});
