const question = document.getElementById("question");
const choices = document.getElementsByClassName("choice-text");

let currentQuestion = {};
let acceptingAnswer = true;
let score = 0;
let questionCounter = 0;
let availableQuestion = [];

let questions = [
  {
    question: "What is full form of HTML?",
    choice1: "hyper-text-markup-language",
    choice2: "hype-touch-markup-language",
    choice3: "hygin-touch-makeup-language",
    choice4: "hash-text-markup-language",
    answer: 1,
  },

  {
    question: "What is correct extenstion of javascript?",
    choice1: ".jk",
    choice2: ".java",
    choice3: ".js",
    choice4: ".jdk",
    answer: 3,
  },

  {
    question: "fullform od CSS",
    choice1: "cascading style sheet",
    choice2: "caste style sheet",
    choice3: "coz style sheet",
    choice4: "cascading style shot",
    answer: 1,
  },
];

const CURRECT_MARKS = 10;
const MAX_QUESTION = 3;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestion = [...questions];
  console.log(availableQuestion);
  getNewQuestion();
};

getNewQuestion = () => {
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestion.length);
  currentQuestion = availableQuestion[questionIndex];
  question.innerText = currentQuestion.question;
};

startGame();
