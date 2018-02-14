/*
1. need some way of tracking which question we're on, which
will correlate to the index for the curent question in our
questions array.
2. event listener for the options that checks if the answer is correct,
updates the score, moves to next question (increment the index value and
fill in the page with the new question and answers)
3. make event listener for container-two and then target answer options
*/

// let currentQuestionIndex = i;
// var for score
let i = 0;

var gameQuestion = document.querySelector('.question')
var gameAnswerA = document.querySelector('.optionA')
var gameAsnwerB = document.querySelector('.optionB')
var gameAnswerC = document.querySelector('.optionC')
var gameAnswerD = document.querySelector('.optionD')
var gameButton = document.querySelector('button')
var answerButton = document.querySelector('.container-two')
var enterName = document.querySelector('.insert-name')
var enterScore = document.querySelector('.insert-score')

var name = prompt('Hello! Please Enter Your Name')
var score = 0

enterName.innerText = name

gameButton.addEventListener('click', startGame)

function startGame () {
    gameQuestion.innerHTML = gameQuestions[i].question
    gameAnswerA.innerHTML = gameQuestions[i].options[0]
    gameAsnwerB.innerHTML = gameQuestions[i].options[1]
    gameAnswerC.innerHTML = gameQuestions[i].options[2]
    gameAnswerD.innerHTML = gameQuestions[i].options[3]
}

gameAnswerA.addEventListener('click', selectAnswer)
gameAsnwerB.addEventListener('click', selectAnswer)
gameAnswerC.addEventListener('click', selectAnswer)
gameAnswerD.addEventListener('click', selectAnswer)

function selectAnswer () {
        // console.log(this.innerHTML)
        // console.log(gameQuestions[i].options)
        // console.log(gameQuestions[i].correctAnswer)
    if (this.innerHTML === gameQuestions[i].correctAnswer) {
        alert('Correct!')
        i++   
        score += 1
        enterScore.innerText = score
        // increase score
        // find score element, display current score
    } else {
        alert('Try Again')
    }
    if( i < gameQuestions.length) {
     startGame()  
    } else {
       alert('Game Over!')
    }
}
