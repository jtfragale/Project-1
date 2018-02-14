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

const gameQuestions = [
    {
        question: "Dory, or this type of fish, helped Marlin rescue Nemo in 'Finding Nemo', but probably doesn't remember",
        options: [
            "Clownfish",
            "Blue Hippo Tang",
            "Shark",
            "Pufferfish"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the largest living cartilaginous fish?",
        options: [
            "Whale Shark",
            "Blue Whale",
            "Great White Shark",
            "Giant Manta Ray"
        ],
        correctAnswer: 0
    },
    {
        question: "This type of fish has a beak that helps it grind up coral and coralline algae and as a result poops sand",
        options: [
            "Squirrelfish",
            "Engineer Goby",
            "Parrotfish",
            "Jawfish"
    ],
        correctAnswer: 2
    },
    {
        question: "This fish forms a symbiotic relationship with sea anemones, where it spends most of its life. It's pretty hilarious ",
        options: [
            "Dracula Goby",
            "Cardinalfish",
            "Clownfish",
            "Squirrelfish"
    ],
        correctAnswer: 2
    },
    {
        question: "What is the largest living bony fish?",
        options: [
            "Giant Squid",
            "Great White Shark",
            "Giant Trevally",
            "Sunfish"
    ],
        correctAnswer: 3
    }
]

let currentQuestionIndex = 0;

var gameQuestion = document.querySelector('.question')
var gameAnswerA = document.querySelector('.optionA')
var gameAsnwerB = document.querySelector('.optionB')
var gameAnswerC = document.querySelector('.optionC')
var gameAnswerD = document.querySelector('.optionD')
var gameButton = document.querySelector('button')

gameButton.addEventListener('click', startGame)

function startGame () {
    gameQuestion.innerHTML = gameQuestions[currentQuestionIndex].question
    gameAnswerA.innerHTML = gameQuestions[currentQuestionIndex].options[0]
    gameAsnwerB.innerHTML = gameQuestions[currentQuestionIndex].options[1]
    gameAnswerC.innerHTML = gameQuestions[currentQuestionIndex].options[2]
    gameAnswerD.innerHTML = gameQuestions[currentQuestionIndex].options[3]
}