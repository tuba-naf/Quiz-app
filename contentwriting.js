// Array of quiz questions for Content Writing
const quizQuestions = [
    {
        question: "What is the main purpose of content writing?",
        answers: ["To entertain", "To inform and engage", "To confuse", "To sell products"],
        correct: 1 // Index of the correct answer
    },
    {
        question: "Which of the following is an essential skill for a content writer?",
        answers: ["Graphic design", "Data analysis", "Research skills", "Programming"],
        correct: 2
    },
    {
        question: "What does SEO stand for in content writing?",
        answers: ["Search Engine Optimization", "Search Enhanced Organization", "Standard Engagement Order", "Structured Editorial Output"],
        correct: 0
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
        // Optionally, you could reset the quiz or show a different message
        showEndMessage();
    }
}
 // Function to show the end message
 function showEndMessage() {
    document.querySelector('.content-writing').style.display = 'none'; // Hide the quiz
    document.getElementById('end-message').style.display = 'block'; // Show the end message
}

// Function to go back to the home page
function goToHomePage() {
    window.location.href = 'index.html'; // Replace with your actual home page URL
}
// Load the first question when the page loads
window.onload = loadQuestion;
