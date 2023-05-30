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
const questions = document.getElementById ('questions')
const answerOne = document.getElementById ('answerone')
const answerTwo = document.getElementById ('answertwo')
const answerThree = document.getElementById ('answerthree')
const submitButton = document.getElementById ('submit')
let currentIndex = 0
let score = 0
loadQuizData()

function loadQuizData() {
  const currentQuizData = quizContent[currentIndex]
  questions.innerHTML = currentQuizData.question
  answerOne.innerHTML = currentQuizData.ans1
  answerTwo.innerHTML = currentQuizData.ans2
  answerThree.innerHTML = currentQuizData.ans3
}