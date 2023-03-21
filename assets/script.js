// variable declarations

let timeLeft = document.querySelector('#time-left');
let gameStart = document.querySelector('#start-button');
let quizQuestions = document.querySelector('#quiz-questions');
let contentCard = document.querySelector('#content-card');


// array object to store questions and answers
var questions = [
    {
        question: "The condition in an if / else statement is enclosed within ____?",
        choices: ["curly brackets", "parenthesis", "square brackets", "quotes"],
        answer: "parenthesis"
    },
    {
        question: "A very useful tool for use during debugging to print content to the debugger is ____?",
        choices: ["JavaScript", "if / else", "for loops", "console.log"],
        answer: "console.log"
    },
    {
        question: "String Values must be enclosed within ____ when being assigned",
        choices: ["curly brackets", "quotes", "square brackets", "commas"],
        answer: "quotes"
    },
    {
        question: "Arrays in JavaScript can be used to store _____?",
        choices: ["other arrays", "numbers", "strings", "all of the above"],
        answer: "all of the above"
    },
    {
        question: "Commonly used data types do not include _____?",
        choices: ["strings", "alerts", "numbers", "booleans"],
        answer: "alerts"
    },
];

var questionObject = 0;

var timeRemaining = 0;

var timeInterval = 0;

var numCorrect = 0;

var penalty = 10;

var newUl = document.createElement("ul");

timeLeft.textContent = "Time: " + timeRemaining;

gameStart.addEventListener("click", function(){

    timeRemaining = 60;
    timeLeft.textContent = "Time: " + timeRemaining;

    if(timeInterval === 0) {
        timeInterval = setInterval(function() {
            timeRemaining--;
            timeLeft.textContent = "Time: " + timeRemaining;

            if (timeRemaining <= 0) {
                clearInterval(timeInterval);
                endQuiz();
                timeLeft.textContent = "Game Over!";
            }
        }, 1000);
    }
    displayQuestions(questionObject);
})

function displayQuestions(questionObject) {
    contentCard.innerHTML = "";
    newUl.innerHTML = "";

    //loop through the array
    for (var i = 0; i < questions.length; i++) {
        var userQuestion = questions[questionObject].question;
        var userChoices = questions[questionObject].choices;
        contentCard.textContent = userQuestion;
    }

    userChoices.forEach(function (newItem) {
        var listEl = document.createElement("li");
        listEl.textContent = newItem;
        contentCard.appendChild(newUl);
        newUl.appendChild(listEl);
        listEl.addEventListener("click", (checkAnswer));
    })

}

function checkAnswer(event) {
    var eventItem = event.target;

    if (eventItem.matches("li")) {
        var newDivEl = document.createElement("div");
        newDivEl.setAttribute("id", "newDivEl");

        if (eventItem.textContent == questions[questionObject].answer) {
            numCorrect++;
            newDivEl.textContent = "Correct!";
        } else {
            timeRemaining -= penalty;
            newDivEl.textContent = "Wrong!"; 
        }
    }

    questionObject++;

    if (questionObject >= questions.length) {
        endQuiz();
        newDivEl.textContent = "Game Over! You got: " + numCorrect + "/" + questions.length + " right!";
    } else {
        displayQuestions(questionObject);
    }
    contentCard.appendChild(newDivEl);
}

function endQuiz() {
    contentCard.innerHTML = "";
    timeLeft.innerHTML = " ";

    var newHeadEl = document.createElement("h1");
    newHeadEl.setAttribute("id", "newHeadEl");
    newHeadEl.textContent = "Game Over!";

    contentCard.appendChild(newHeadEl);

    var newPara = document.createElement("p");
    newPara.setAttribute("id", "newPara");

    contentCard.appendChild(newPara);

    if (timeRemaining >= 0) {
        var timeScore = timeRemaining;
        var newPara2 = document.createElement("p");
        clearInterval(timeInterval);
        newPara.textContent = "Your final score is: " + timeScore;

        contentCard.appendChild(newPara2);
    }

    // get user initials for the highscore page

    var newLabelEl = document.createElement("label");
    newLabelEl.setAttribute("id", "newLabelEl");
    newLabelEl.textContent = "Enter your initials: ";

    contentCard.appendChild(newLabelEl);

    // get user input

var newInputEl = document.createElement("input");
    newInputEl.setAttribute("type", "text");
    newInputEl.setAttribute("id", "initials");
    newInputEl.textContent = "";

    contentCard.appendChild(newInputEl);

    // new submit button 
    var newSubmitEl = document.createElement("button");
    newSubmitEl.setAttribute("type", "submit");
    newSubmitEl.setAttribute("id", "submit");
    newSubmitEl.textContent = "Submit";

    contentCard.appendChild(newSubmitEl);

    //event listener to store initials in local storage
    newSubmitEl.addEventListener("click", function() {
        var initials = newInputEl.value;

        if (initials === null) {
            console.log("No Initials entered");
        } else {
            var finalScore = {
                initials: initials,
                score: timeScore
            }
            console.log(finalScore);
            var totalScores = localStorage.getItem("totalScores");

            if (totalScores === null) {
                totalScores = [];
            } else {
                totalScores = JSON.parse(totalScores);
            }
            totalScores.push(finalScore);
            var highScore = JSON.stringify(totalScores);
            localStorage.setItem("totalScores", highScore);

            // goes to the highscores page
            window.location.replace("highscore.html");
        }
    });
}


