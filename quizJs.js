const questions = [
    {
        question: "What is the main difference between HTTP and HTTPS?",
        answers: [
            { text: "HTTPS is always faster than HTTP", correct: false },
            { text: "HTTPS uses encryption to secure data", correct: true },
            { text: "HTTP does not require an internet connection", correct: false },
            { text: "HTTPS cannot be used with modern browsers", correct: false },
        ]
    },
    {
        question: "What is the role of JavaScript in web development?",
        answers: [
            { text: "Controlling only the structure and content of a page", correct: false },
            { text: "Adding interactivity and animations to a website", correct: true },
            { text: "Writing server-side code only", correct: false },
            { text: "Creating databases", correct: false },
        ]
    },
    {
        question: "What does Responsive Design mean?",
        answers: [
            { text: "Designing websites to respond to user questions", correct: false },
            { text: "Designing websites to adapt to all screen sizes", correct: true },
            { text: "Designing websites that work without the internet", correct: false },
            { text: "Designing password-protected websites", correct: false },
        ]
    },
    {
        question: "What is the difference between Frontend and Backend in web development?",
        answers: [
            { text: "Backend is for design, Frontend is for data processing", correct: false },
            { text: "Frontend is for design, Backend is for data processing", correct: true },
            { text: "Both terms mean the same thing", correct: false },
            { text: "Frontend is for database management, Backend is for design", correct: false },
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
