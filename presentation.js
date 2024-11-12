// Array of quiz questions
const quizQuestions = [
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: 2 // Index of the correct answer
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: 1
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correct: 3
    }
];

// Current question index
let currentQuestionIndex = 0;

// Initialize score
let score = 0;

// Function to load the current question and answers
function loadQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const questionHeading = document.getElementById('quiz-question');
    const answerButtons = document.querySelectorAll('.answer-btn');

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
        // Optionally, you could reset the quiz or show a different message
        showEndMessage(); // Show the end message after the quiz finishes
    }
}
function showEndMessage() {
    // Hide the quiz and show the end message
    document.querySelector('.presentation').style.display = 'none';
    document.getElementById('end-message').style.display = 'block';
}
function goToHomePage() {
    window.location.href = 'index.html'; 
}
// Load the first question when the page loads
window.onload = loadQuestion;
