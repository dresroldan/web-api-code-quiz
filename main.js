var startButton = document.querySelector("#startButton");
var answerChoices = document.getElementById("answers");
var timerEl = document.getElementById("timer");
var questionSpace = document.getElementById("question-space");
var secondsLeft = 90;
var questionNumber = -1;
var currentQuestionIndex = 0;
var answer;



var questions = [{

        question: "Commonly used data types DO NOT INCLUDE:",
        choices: ["strings", "alerts", "booleans", "numbers"],
        answer: "alerts",
    },

    {
        question: "The condition in an if/else statement is enclosed with",
        choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        answer: "curly brackets",
    },

    {
        question: "Arrays can be used to store",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above",
    },
    {
        question: "Arrays can be used to store",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above",
    },

    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        choices: ["commas", "curly brackets ", "quotes", "parentheses"],
        answer: "curly brackets",
    },

    {
        question: "A very useful tool during development and debugging for printing content to the debugger is ",
        choices: ["Javascript", "Terminal/Bash ", " Google Chrome", "Console.log"],
        answer: "console.log",
    },

];





function startGame() {

    // hides home page
    document.getElementById("home").classList.add("d-none")

    // displays questions
    document.getElementById("quiz").classList.remove("d-none")

    // starts timer function
    startTimer();

    nextQuestion();

}


function startTimer() {

    var countdown = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = "Time : " + secondsLeft

        // when seconds=0  display submit page  
        if (secondsLeft <= 0) {
            clearInterval(countdown);

            if (secondsLeft === 0 || questionNumber === questions.length) {
                clearInterval(countdown);
                setTimeout(displayScore, 500);
            }



            document.getElementById("quiz").classList.add("d-none")
            document.getElementById("submit-score").classList.remove("d-none")

        }



    }, 1000)

}



function nextQuestion() {


    questionNumber++;
    answer = questions[questionNumber].answer

    questionSpace.textContent = questions[questionNumber].question;

    answerChoices.innerHTML = "";

    var choices = questions[questionNumber].choices;

    for (var q = 0; q < choices.length; q++) {
        var nextChoice = document.createElement("button");

        nextChoice.textContent = choices[q]
        answerBtn = answerChoices.appendChild(nextChoice).setAttribute("class", "p-3 m-1 btn btn-dark btn-block");
    }


}


function answerButtons() {

    var feedbackDisplay = document.getElementsByClassName("feedback")[0]


    if (answer === event.target.textContent) {
        feedbackDisplay.innerHTML = "Correct!";
        setTimeout(hideFeedback, 1000);
        showFeedback();
        nextQuestion();
    } else {
        feedbackDisplay.innerHTML = "Sorry, that's incorrect.";
        setTimeout(hideFeedback, 1000);
        secondsLeft = secondsLeft - 10;
        showFeedback();
        nextQuestion();
    }





}


function hideFeedback() {
    var pEl = document.getElementsByClassName("feedback")[0]
    pEl.style.display = 'none'
}

function showFeedback() {
    var pEl = document.getElementsByClassName("feedback")[0]
    pEl.removeAttribute('style');
}



function displayScore() {
    document.getElementById("quiz").classList.add('d-none');
    document.getElementById("submit-score").classList.remove('d-none');

}







answerChoices.addEventListener("click", answerButtons);
startButton.addEventListener("click", startGame);