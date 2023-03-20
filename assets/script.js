
let timeRemaining = document.querySelector('#timeRemaining');
let startQuiz = document.querySelector('.start-button');
let gameStartPage = document.querySelector('#start-game');
let response = document.querySelector('#response');
let question1 = document.querySelector('#question1');
let question2 = document.querySelector('#question2');
let question3 = document.querySelector('#question3');



let btn1 = document.querySelector('.ans1');
let btn2 = document.querySelector('.ans2');
let btn3 = document.querySelector('.ans3');
let btn4 = document.querySelector('.ans4');
let btn5 = document.querySelector('.ans5');
let btn6 = document.querySelector('.ans6');
let btn7 = document.querySelector('.ans7');
let btn8 = document.querySelector('.ans8');
let btn9 = document.querySelector('.ans9');
let endGame = document.querySelector('#game-over');


let secondsRemaining = 0;
let timerInterval;


timeRemaining.value = secondsRemaining;
timeRemaining.textContent = secondsRemaining;

startQuiz.addEventListener('click', startGame);



function end() {
    clearInterval(timerInterval);
    question1.style.display = "none";
    question2.style.display = "none";
    question3.style.display = "none";
    endGame.style.display = "block";

}

function startGame() {
    secondsRemaining = 30;
    timeRemaining.value = secondsRemaining;
    timeRemaining.textContent = secondsRemaining;

    timerInterval = setInterval(timerDown, 1000);

function timerDown() {
    secondsRemaining--;
    timeRemaining.textContent = secondsRemaining;

    if (secondsRemaining <= 0) {
        end();
    }

}

    gameStartPage.style.display = "none";

    if (secondsRemaining <= 0) {
        endGame.style.display = 'initial';
    }   else
        question1.style.display = "initial";

        btn1.addEventListener('click', answerWrong);
        btn2.addEventListener('click', answerWrong);
        btn3.addEventListener('click', answerCorrect);

        



function answerCorrect() {
    response.textContent = "Correct!";
    question1.style.display = "none";
    question2.style.display = "initial";

    btn1.addEventListener('click', answerWrong2);
    btn2.addEventListener('click', answerCorrect2);
    btn3.addEventListener('click', answerWrong2);

    function answerCorrect2() {
        response.textContent = "Correct!";
        question2.style.display = "none";
        question3.style.display = "initial";
    
        btn1.addEventListener('click', answerCorrect3);
        btn2.addEventListener('click', answerWrong3);
        btn3.addEventListener('click', answerWrong3);

        function answerCorrect3() {
            end();
        }

        function answerWrong3() {
            end();
        }
    }

    function answerWrong2 () {
        response.textContent = "Wrong!";
        secondsRemaining -= 10;
        timeRemaining.textContent = secondsRemaining;


        question2.style.display = "none";
        question3.style.display = "initial";
    
        btn1.addEventListener('click', answerCorrect3);
        btn2.addEventListener('click', answerWrong3);
        btn3.addEventListener('click', answerWrong3);

        function answerCorrect3() {
            end();
        }

        function answerWrong3() {
            end();
        }
    }



    
}

function answerWrong() {
    response.textContent = "Wrong!";
    secondsRemaining -= 10;
    timeRemaining.textContent = secondsRemaining;

    response.textContent = "wrong!";
    question1.style.display = "none";
    question2.style.display = "initial";

    btn1.addEventListener('click', answerWrong2);
    btn2.addEventListener('click', answerCorrect2);
    btn3.addEventListener('click', answerWrong2);

    function answerCorrect2() {
        response.textContent = "Correct!";
        question2.style.display = "none";
        question3.style.display = "initial";
    
        btn1.addEventListener('click', answerCorrect3);
        btn2.addEventListener('click', answerWrong3);
        btn3.addEventListener('click', answerWrong3);

        function answerCorrect3() {
            end();
        }

        function answerWrong3() {
            end();
        }
    }

    function answerWrong2 () {
        response.textContent = "Wrong!";
        secondsRemaining -= 10;
        timeRemaining.textContent = secondsRemaining;

        
        question2.style.display = "none";
        question3.style.display = "initial";
    
        btn1.addEventListener('click', answerCorrect3);
        btn2.addEventListener('click', answerWrong3);
        btn3.addEventListener('click', answerWrong3);

        function answerCorrect3() {
            end();
        }

        function answerWrong3() {
            end();
        }
    }
}


    
}


