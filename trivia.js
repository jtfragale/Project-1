// console.log('hello world') test to make sure js linked properly
let currentQuestionIndex = 0;

var gameQuestion = document.querySelector('.question')
var gameAnswerA = document.querySelector('.optionA')
var gameAsnwerB = document.querySelector('.optionB')
var gameAnswerC = document.querySelector('.optionC')
var gameAnswerD = document.querySelector('.optionD')
var gameButton = document.querySelector('button')



/*
1. need some way of tracking which question we're on, which
will correlate to the index for the curent question in our
questions array.
2. event listener for the options that checks if the answer is correct,
updates the score, moves to next question (increment the index value and
fill in the page with the new question and answers)
3. make event listener for container-two and then target answer options
*/

// function startGame () {}

// test to see if button is working
// function startGame () {
//     console.log('game started')
// } 

gameButton.addEventListener('click', startGame)

function startGame () {
    gameQuestion.innerHTML = gameQuestions[currentQuestionIndex].question
    gameAnswerA.innerHTML = gameQuestions[currentQuestionIndex].options[0]
    gameAsnwerB.innerHTML = gameQuestions[currentQuestionIndex].options[1]
    gameAnswerC.innerHTML = gameQuestions[currentQuestionIndex].options[2]
    gameAnswerD.innerHTML = gameQuestions[currentQuestionIndex].options[3]
}


const gameQuestions = [
    {
        question: "",
        options: [
            "1",
            "2",
            "3",
            "4"
        ],
        correctAnswer: 3
    }
]