(function iffe() {
    
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

var name = prompt('Hello! Please Enter Your Name') || ''
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
    if (this.innerHTML === gameQuestions[i].correctAnswer) {
        alert('Correct!')
        i++   
        score += 1
        enterScore.innerText = score
        
        // add class to gamequestions[i] like `.is-correct`

    } else {
        alert('Try Again')
    }
    if( i < gameQuestions.length) {
        startGame()  
    } else {
        alert('Game Over!')
    }
}
})()