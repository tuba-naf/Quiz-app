// Array of quiz questions for Research
const quizQuestions = [
    {
        question: "What is the primary goal of research?",
        answers: ["To test hypotheses", "To find definitive answers", "To publish papers", "To memorize data"],
        correct: 0 // Index of the correct answer
    },
    {
        question: "Which of the following is a key component of a research paper?",
        answers: ["Author's biography", "Experiment results", "A list of references", "Personal opinions"],
        correct: 2
    },
    {
        question: "What is a hypothesis in research?",
        answers: ["A proven fact", "An initial assumption", "A random guess", "An observation"],
        correct: 1
    },
    {
        question: "Which type of research relies on statistical analysis?",
        answers: ["Qualitative research", "Quantitative research", "Theoretical research", "Descriptive research"],
        correct: 1
    }
];

// Current question index
let currentQuestionIndex = 0;

// Initialize score
let score = 0;

// Function to load the current question and answers
function loadQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const questionHeading = document.querySelector('.quiz1 h1');
    const answerButtons = document.querySelectorAll('#answers-button .answer-btn');

    // Update question text
    questionHeading.innerText = currentQuestion.question;

    // Update answer button texts
    answerButtons.forEach((button, index) => {
        button.innerText = currentQuestion.answers[index];
        button.onclick = () => checkAnswer(index); // Assign click event to each button
    });
}

// Function to check the selected answer
function checkAnswer(selectedIndex) {
    const correctIndex = quizQuestions[currentQuestionIndex].correct;
    if (selectedIndex === correctIndex) {
        alert("Correct answer!");
        score++; // Increment score for a correct answer
    } else {
        alert("Wrong answer. Try again!");
    }

    // Move to the next question
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion(); // Load the next question
    } else {
        alert(`Quiz finished! Your score is ${score} out of ${quizQuestions.length}`);
        showEndMessage(); // Show the end message after the quiz finishes
}

    }
function showEndMessage() {
    // Hide the quiz and show the end message
    document.querySelector('.research').style.display = 'none';
    document.getElementById('end-message').style.display = 'block';
}
function goToHomePage() {
    window.location.href = 'index.html'; 
}
window.onload = loadQuestion;
