const question = [
    {
        question: "Which is larget animal in the world? ",
        answers: [
            { text: "shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        question: "Which is smallet country in the world? ",
        answers: [
            { text: "Vatican City", correct: true },
            { text: "Bhutan", correct: false },
            { text: "Nepal", correct: false },
            { text: "Shri lanka", correct: false },
        ]
    },
    {
        question: "Which is largest desert in the world? ",
        answers: [
            { text: "Kalahari", correct: false },
            { text: "Sahara", correct: false },
            { text: "Nepal", correct: false },
            { text: "Shri lanka", correct: true },
        ]
    },
    {
        question: "Which is smallet continet in the world? ",
        answers: [
            { text: "Asia", correct: false },
            { text: "Australia", correct: true },
            { text: "Arctic", correct: false },
            { text: "Africa", correct: false },
        ]
    },
]

const questionElement = document.getElementById('question');
const answereButtons = document.getElementById('anser-button');
const nextButton = document.getElementById('next-btn');
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
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answereButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none"
    while (answereButtons.firstChild) {
        answereButtons.removeChild(answereButtons.firstChild);
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
    Array.from(answereButtons.children).forEach(button=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");

        }
        button.disabled = true;
    });
    nextButton.style.display ="block";
}


function showScore(){
    resetState();
    questionElement.innerHTML =`Your scored ${score} out of ${question.length}!`;
    nextButton.innerHTML= "Play Again";
    nextButton.style.display ="blcok";
    
}


function handalNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < question.length){
        showQuestion();

    }else{
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < question.length){
        handalNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();