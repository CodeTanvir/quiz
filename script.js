const questions = [

    {
        question: "which is the largest animal",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue whale", correct: true},
            {text: "Elephent", correct: false},
            {text: "Giraffe", correct: false},
        ]
    },
    {
        question: "which is the smallest animal",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue whale", correct: false},
            {text: "Elephent", correct: false},
            {text: "ant", correct: true},
        ]
    },
    {
        question: "which is the largest continent",
        answers: [
            {text: "Asia", correct: true},
            {text: "Africa", correct: false},
            {text: "America", correct: false},
            {text: "Australia", correct: false},
        ]
    },
    {
        question: "which is the largest country",
        answers: [
            {text: "America", correct: false},
            {text: "Bangladesh", correct: false},
            {text: "Israel", correct: false},
            {text: "Russia", correct: true},
        ]
    },
    {
        question: "When the World War-II happend? ",
        answers: [
            {text: "1947", correct: true},
            {text: "1971", correct: false},
            {text: "1915", correct: false},
            {text: "1930", correct: false},
        ]
    },
    {
        question: "What is the formula of (a+b)^2",
        answers: [
            {text: "a^2 + b^2", correct: false},
            {text: "a^2 + b^2 + 2ab", correct: true},
            {text: "a^2 - b^2", correct: false},
            {text: "a^2 + b^2 - 2ab", correct: false},
        ]
    },

    {
        question: "who invent algebra?",
        answers: [
            {text: "Shakespear", correct: false},
            {text: "Jafor Iqbal", correct: false},
            {text: "Bhor", correct: false},
            {text: "Al jaber", correct: true},
        ]
    },

    {
        question: "What is the value of gravity?",
        answers: [
            {text: "9.8 m/s^2", correct: true},
            {text: "9.8 m/s^1", correct: false},
            {text: "9.5 m/s^2", correct: false},
            {text: "9.2 m/s^2", correct: false},
        ]
    },

    {
        question: "Which is glucose here?",
        answers: [
            {text: "C2-H2-O2", correct: false},
            {text: "C6-O6-H12", correct: true},
            {text: "C2-H4-O2", correct: false},
            {text: "C5-H5-05", correct: false},
        ]
    },

    {
        question: "What is the formula of a^2 - b^2",
        answers: [
            {text: "a^2 + b^2", correct: false},
            {text: "(a+b)(a-b)", correct: true},
            {text: "(a+b)(a+b)", correct: false},
            {text: "a^2 + b^2 - 2ab", correct: false},
        ]
    },


];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "next";
    showQuestion()
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })

}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct") 
    score++;
    }
   else{
        selectedBtn.classList.add("lof");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
    showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();