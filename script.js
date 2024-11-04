const quizData = [
    {
        question: "What does the '<em>' tag do in HTML?",
        options: ["Adds an image to the page", "Underlines the text", "Markes the text BOLD","Marks in the text italic" ],
        answer: "Marks in the text italic"
    },
    {
        question: "Which selector is useed to select an  element by its ID in CSS?",
        options: ["id", ".id", "*id", "#id"],
        answer: "#id"
    },
    {
        question: "Which attribute is used to make a link open in a new tab?",
        options: ["alt", "target_blank", "href=_new", "tab"],
        answer: "target_blank"
    },
    {
        question: "Which tag is used to create an ordered list in HTML?",
        options: ["<ul>", "<li>", "ol", "<ol>"],
        answer: "<ol>"
    },
    {
        question: "What does boolean return in js",
        options: ["true", "false", "true or false", "Yes or No"],
        answer: "true or false"
    },
    // Add more questions here...
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;

    optionsElement.innerHTML = "";
    question.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        optionsElement.appendChild(button);
        button.addEventListener("click", selectAnswer);
    });
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;

    if (selectedButton.innerText === answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        setTimeout(showQuestion, 1000)
        // showQuestion();
    } else {
        setTimeout(showResult, 3000);
        // showResult();
    }
}

function showResult() {
    quiz.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${score}/${quizData.length}</p>
    `;
}

showQuestion();