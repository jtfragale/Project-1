// Great job separating the question data out into its own file and using a robust data structure to organize it all
const gameQuestions = [
    {
        question: "Dory, or this type of fish, helped Marlin rescue Nemo in 'Finding Nemo', but probably doesn't remember.",
        options: [
            "Clownfish",
            "Blue Hippo Tang",
            "Shark",
            "Pufferfish"
        ],
        correctAnswer: "Blue Hippo Tang",
        // In my comments in "trivia.js," I suggest an even more efficient way to check for right answers
        // by storing a correctIndex, instead of correctAnswer
        correctIndex: 1
    },
    {
        question: "What is the largest living cartilaginous fish?",
        options: [
            "Whale Shark",
            "Blue Whale",
            "Great White Shark",
            "Giant Manta Ray"
        ],
        correctAnswer: "Whale Shark",
        correctIndex: 0
    },
    {
        question: "This type of fish has a beak that helps it grind up coral and coralline algae and as a result poops sand.",
        options: [
            "Squirrelfish",
            "Engineer Goby",
            "Parrotfish",
            "Jawfish"
    ],
        correctAnswer: "Parrotfish"
        // enter correctIndex
    },
    {
        question: "This fish forms a symbiotic relationship with sea anemones where it spends most of its life, and it's pretty hilarious.",
        options: [
            "Dracula Goby",
            "Cardinalfish",
            "Clownfish",
            "Squirrelfish"
    ],
        correctAnswer: "Clownfish"
        // enter correctIndex
    },
    {
        question: "What is the largest living bony fish?",
        options: [
            "Giant Squid",
            "Great White Shark",
            "Giant Trevally",
            "Sunfish"
    ],
        correctAnswer: "Sunfish"
        // enter correctIndex
    },
    {
        question: "This large, scaleless fish has a long bill that it uses to slash prey",
        options: [
            "Needle Nose Gar",
            "Hammerhead Shark",
            "Swordfish",
            "Grouper"
    ],
        correctAnswer: "Swordfish"
        // enter correctIndex
    },
    {
        question: "This fish has an elongated snout and is named after the four legged animal it resembles. They have a prehensile tail and make a 'snick' sound when feeding on prey.",
        options: [
            "Squirrelfish",
            "Seahorse",
            "Lionfish",
            "Goatfish"
    ],
        correctAnswer: "Seahorse"
        // enter correctIndex
    },
    {
        question: "This fish is able to quickly inflate its body to deter predators and also contains tetrodotoxin in case their first line of defense fails ",
        options: [
            "Pufferfish",
            "Grouper",
            "Damselfish",
            "Clownfish"
    ],
        correctAnswer: "Pufferfish"
        // enter correctIndex
    }
]