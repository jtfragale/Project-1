// console.log('hello world') test to make sure js linked properly

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

// const gameQuestions = [
//     {
//         question: "Dory, or this type of fish, helped Marlin rescue Nemo in 'Finding Nemo', but probably doesn't remember",
//         options: [
//             "Clownfish",
//             "Blue Hippo Tang",
//             "Shark",
//             "Pufferfish"
//         ],
//         correctAnswer: "Blue Hippo Tang"
//     },
//     {
//         question: "What is the largest living cartilaginous fish?",
//         options: [
//             "Whale Shark",
//             "Blue Whale",
//             "Great White Shark",
//             "Giant Manta Ray"
//         ],
//         correctAnswer: "Whale Shark"
//     },
//     {
//         question: "This type of fish has a beak that helps it grind up coral and coralline algae and as a result poops sand",
//         options: [
//             "Squirrelfish",
//             "Engineer Goby",
//             "Parrotfish",
//             "Jawfish"
//     ],
//         correctAnswer: "Parrotfish"
//     },
//     {
//         question: "This fish forms a symbiotic relationship with sea anemones, where it spends most of its life. It's pretty hilarious.",
//         options: [
//             "Dracula Goby",
//             "Cardinalfish",
//             "Clownfish",
//             "Squirrelfish"
//     ],
//         correctAnswer: "Clownfish"
//     },
//     {
//         question: "What is the largest living bony fish?",
//         options: [
//             "Giant Squid",
//             "Great White Shark",
//             "Giant Trevally",
//             "Sunfish"
//     ],
//         correctAnswer: "Sunfish"
//     }
// ]

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
        // increase score
        // find score element, display current score
    } else {
        alert('Try Again')
    }
    startGame()
    // increase i
    // startGame()
}
