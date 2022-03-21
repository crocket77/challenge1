// TO DO
// DRY hide and show screens --> make a function to do that and call it

// START SCREEN
// reference Start Quiz <button> with id="start"
const startBtn = document.getElementById('start');
// reference start screen 
const startScreen = document.getElementById('start-screen');

// QUESTIONS SCREEN
// reference questions screen
const questionsScreen = document.getElementById('questions');
// reference location where questions will display
const questionText = document.getElementById('question-title');
// reference locations where answer choices will display
const choice1Text = document.getElementById('choice1');
const choice2Text = document.getElementById('choice2');
const choice3Text = document.getElementById('choice3');
const choice4Text = document.getElementById('choice4');

// END GAME SCREEN
const endScreen = document.getElementById('end-screen');
// empty array to hold each user input and final score
let users = [];
// reference submit button to save user score
const userSubmit = document.getElementById('submit');

// LOSE SCREEN
const loseScreen = document.getElementById('lose-screen');
// reference restart button to allow user to restart game
const quizRestart = document.getElementById('restart');
// reference home button to allow user to return to home screen
const goHome = document.getElementById('home');

// TIMER
let timerEl = document.getElementById('time');  
// declare timeInterval
let timeInterval;
// declare timer variable
let timerCount;
// reference -10sec when user get answer wrong
const deductEl = document.getElementById('deduct');

// QUESTIONS
let currQuestionIndex;

// questions array
const questionAnswer = [
    {
        question: 'which chihuahua is black?',
        choice1: 'pinky',
        choice2: 'mini',
        choice3: 'potato',
        choice4: 'timone',
        answer: 'mini'
    },
    {
        question: 'which chihuahua is tan?',
        choice1: 'mini',
        choice2: 'momo',
        choice3: 'jedi',
        choice4: 'flash',
        answer: 'flash'
    },
    {
        question: 'which chihuahua is white?',
        choice1: 'jedi',
        choice2: 'flash',
        choice3: 'winnie',
        choice4: 'tweety',
        answer: 'jedi'
    },
    {
        question: 'which chihuahua is brown?',
        choice1: 'flash',
        choice2: 'mini',
        choice3: 'tweety',
        choice4: 'peke',
        answer: 'peke'
    },
    {
        question: 'which chihuahua has a tiny white spot on their head?',
        choice1: 'peke',
        choice2: 'mini',
        choice3: 'poo-bear',
        choice4: 'jedi',
        answer: 'peke'
    },
    {
        question: 'which chihuahua has honey-colored eyes?',
        choice1: 'mini',
        choice2: 'speedy',
        choice3: 'flash',
        choice4: 'peke',
        answer: 'flash'
    },
    {
        question: 'which chihuahua is deaf but happiest with life?',
        choice1: 'jedi',
        choice2: 'rex',
        choice3: 'flash',
        choice4: 'mini',
        answer: 'jedi'
    },
    {
        question: 'which chihuahua weights the least?',
        choice1: 'peke',
        choice2: 'honey',
        choice3: 'mini',
        choice4: 'pumba',
        answer: 'mini'
    },
    {
        question: 'which chihuahua is the slowest?',
        choice1: 'flash',
        choice2: 'mini',
        choice3: 'chiquis',
        choice4: 'jedi',
        answer: 'flash'
    },
    {
        question: 'which chihuahua jumps the highest?',
        choice1: 'jedi',
        choice2: 'mini',
        choice3: 'cheese',
        choice4: 'peke',
        answer: 'peke'
    },
];

// function to start the quiz
function startQuiz() {

    // set timer time
    timerCount = 150;
    // set displayed time equal to starting time
    timerEl.textContent = timerCount;
    // start timer callback
    startTimer();

    // hide start screen
    startScreen.classList.remove('start');
    startScreen.classList.add('hide');

    // display questions screen
    questionsScreen.classList.remove('hide');
    questionsScreen.classList.add('start');

    // start with question 1
    currQuestionIndex = 0;
    // call showQuestions function to display questions
    displayQuestions();
};

// when start quiz button is clicked, run startQuiz
startBtn.addEventListener('click', startQuiz);

// start timer 
function startTimer() {

    // setInterval @ 1sec
    timeInterval = setInterval(function() {

        // deduct timerCount -1 after 1sec
        timerCount -= 1;

        // let the displayed time equal this value
        timerEl.textContent = timerCount;

        // if time is less than or equal to 0, run this
        if (timerCount <= 0) {

            // hide questions screen
            questionsScreen.classList.remove('start');
            questionsScreen.classList.add('hide');

            // show lose screen
            loseScreen.classList.remove('hide');
            loseScreen.classList.add('start');

            // set displayed time to 00
            timerEl.textContent = '00';

            // stop the timer
            clearInterval(timeInterval);
        }
    }, 1000);
};

// display questions
function displayQuestions() {

    // set question of current index
    let currQuestion = questionAnswer[currQuestionIndex];

    // display current question 
    questionText.innerText = currQuestion.question;

    // set answer choices of current index
    let currChoice1 = questionAnswer[currQuestionIndex];
    let currChoice2 = questionAnswer[currQuestionIndex];
    let currChoice3 = questionAnswer[currQuestionIndex];
    let currChoice4 = questionAnswer[currQuestionIndex];

    // display answer choices
    choice1Text.innerText = currQuestion.choice1;
    choice2Text.innerText = currQuestion.choice2;
    choice3Text.innerText = currQuestion.choice3;
    choice4Text.innerText = currQuestion.choice4;
};

// get value from clicked button and compare to correct answer
function clickedAnswer(event) {

    // let userAnswer = the text of the button the user clicked
    let userAnswer = event.target.innerText;
    
    // make button clicked out of focus to return 
    event.target.blur();

    // if userAnswer = the answer to the current question show next question
    if (userAnswer === questionAnswer[currQuestionIndex].answer) {

        // if the current question is the last question, end the game
        if (currQuestionIndex === 9) {
            endGame();
        }
        // else, go to the next question
        else {
            currQuestionIndex++;
            displayQuestions();
        }
    } 
    // if the question is incorrect, subtract 10 secs and move onto next question or end game
    else {

        // deduct by 10sec
        timerCount-=10;

        // turn button clicked with wrong answer red
        event.target.classList.remove('btn-info');
        event.target.classList.add('btn-danger');

        // display -10 
        deductEl.classList.remove('hide');
        deductEl.classList.add('start');

        // delay removal of -10sec display
        setTimeout(function () {
            // remove -10 
            deductEl.classList.remove('start');
            deductEl.classList.add('hide');
        }, 1000);

        if (currQuestionIndex === 9 && userAnswer != questionAnswer[currQuestionIndex].answer) {
            // delay display of end screen
            setTimeout(function () {
                // turn button clicked back to blue
                event.target.classList.remove('btn-danger');
                event.target.classList.add('btn-info');
                
                // end the game
                endGame();
            }, 1000);

        }
        else {
            // delay display of next question 
            setTimeout(function () {
                // turn button clicked back to blue
                event.target.classList.remove('btn-danger');
                event.target.classList.add('btn-info');

                // go to next question
                currQuestionIndex++;
                displayQuestions();
            }, 1000);
        }
    }
};

// displays endScreen once last question has been asked AND user answered it correctly
function endGame() {
    // stop the time
    clearInterval(timeInterval);

    // hide questions screen
    questionsScreen.classList.remove('start');
    questionsScreen.classList.add('hide');

    // show end game screen
    endScreen.classList.remove('hide');
    endScreen.classList.add('start');

    // grab the time left as a score and display it on the screen
    let displayedScore = document.getElementById('final-score');
    displayedScore.innerText = timerCount;
};

// loads scores from local storage, if any, to save into users empty array first
function loadScores() {

    // load saved scores
    let savedScores = localStorage.getItem('highScores');
    // turn savedScores into an array
    savedScores = JSON.parse(savedScores);

    // if there are no scores to display, do nothing
    if (savedScores === null) {
        return;
    }
    // else there are scores to display, add them to the users []; empty array
    else {
        users = savedScores;
    }
};
loadScores();

// get the users doggo-name and score and save it to local storage
function saveScore() {

    // get users input value
    let userDoggo = document.getElementById('doggo-name').value;

    // set user score to time remaining
    let userScore = timerCount;

    // if user enters valid response, save info, else alert
    if (userDoggo.length > 0) {

        alert("Your score has been saved!");

        // push the input name and score into empty array
        users.push ({
            user: userDoggo,
            score: userScore
        });
    }
    else {
        alert("Please enter a valid response!")
        return;
    }

    // save users array to local storage but stringify first
    localStorage.setItem('highScores', JSON.stringify(users));

    // hide end screen
    endScreen.classList.remove('start');
    endScreen.classList.add('hide');

    // show start game screen
    startScreen.classList.remove('hide');
    startScreen.classList.add('start');

    // reset timer text
    timerEl.textContent = 150;
};

// when submit button is clicked, save score
userSubmit.addEventListener('click', saveScore);

// if enter key is pressed after doggo name input, save score as well
function enterKeyPressed(event) {
    if (event.keyCode == 13) {
       saveScore();
    }
};

// if the user loses, give option to restart quiz
function restartQuiz() {
    // hide end screen
    loseScreen.classList.remove('start');
    loseScreen.classList.add('hide');

    // display questions screen
    questionsScreen.classList.remove('hide');
    questionsScreen.classList.add('start');

    // restart quiz from beginning
    startQuiz();
};

// when  button is clicked, save score
quizRestart.addEventListener('click', restartQuiz);

// if the user loses, give option to go back to home screen
function homeScreen() {
    // hide end screen
    loseScreen.classList.remove('start');
    loseScreen.classList.add('hide');

    // display start screen
    startScreen.classList.remove('hide');
    startScreen.classList.add('start');

    // reset timer text
    timerEl.textContent = 150;
};

// when  button is clicked, save score
goHome.addEventListener('click', homeScreen);

