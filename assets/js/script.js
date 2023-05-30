const quizContent = [
    {
        question: "What is a group of lions called?",
        ans1 : "A flock",
        ans2 : "A pride",
        ans3 : "A herd",
        correct: "ans2",
    },
    {
        question: "Which bird is sometimes called a flying rat?",
        ans1: "A sparrow",
        ans2: "A pigeon",
        ans3: "A gull",
        correct: "ans2",
    },
    {
        question: "Which animal recognizes itself in the mirror?",
        ans1: "A cat",
        ans2: "A horse",
        ans3: "A chimpanzee",
        correct: "ans3",
    },
    
];

const quiz = document.getElementById ('quiz')
const question = document.getElementById ('question')
const answerOne = document.getElementById ('answer1')
const answerTwo = document.getElementById ('answer2')
const answerThree = document.getElementById ('answer3')
const submitButton = document.getElementById ('submit')