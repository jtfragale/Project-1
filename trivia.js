// Great to put all your JS functionality inside an IFFE,
// just be sure to indent all functions inside
// (whenever you need anything within a function indent the inside contents)
(function iffe() {

// Might want to rename this variable to be something more semantic (e.g. currentQuestionIndex)
let i = 0;

var gameQuestion = document.querySelector('.question')
var gameAnswerA = document.querySelector('.optionA')
var gameAsnwerB = document.querySelector('.optionB')
var gameAnswerC = document.querySelector('.optionC')
var gameAnswerD = document.querySelector('.optionD')
var gameButton = document.querySelector('button')
var answerButton = document.querySelector('.container-two')
var answerChoices = document.querySelectorAll('.answer')
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

// It would be more efficient to make one event listener on parent container 
// (div class "container two" - an element for which you've already made a variable)
answerButton.addEventListener('click', selectAnswer)
// Then pass the evt object into your selectAnswer function below to analyze the properties of the selected element to check for correct answer.

function selectAnswer (evt) {
    // the below conditional will ensure that you are only checking elements that have an "answer" class
    // (if they click in between the answer choices in "container two," nothing will happen)
    if (evt.target.classList.contains('answer')) {
        // The way you've set it up to check for the correct answer by assessing the chosen element's "innerHTML" works,
        // but I would suggest using the element's "data-index" attribute you set up in the HTML (instead of "innerHTML").
        // To access any HTML attributes called "data"-something, you can look at the dataset property of the element.
        // In this case, you case you can identify the attribute using: evt.target.dataset.index
        // Then, in your "trivia-data.js" question data, you could store the correct answer index, instead of correct answer text.
        // (See "trivia-data.js" for my suggestions there.)
        
        if (evt.target.dataset.index == gameQuestions[i].correctIndex) {
        // if (this.innerHTML === gameQuestions[i].correctAnswer) {
            alert('Correct!')
            i++   
            score += 1
            enterScore.innerText = score
        } else {
            alert('Try Again')
        }
        if( i < gameQuestions.length) {
            startGame()  
        } else {
            alert('Game Over!')
        }
    }
}
})()
