// Global Counter
let i = 1;

// Game Tracker
let gamePlayed = false;

// ************************START OF LEADERBOARD ELEMENTS********************************
// View High Scores navigation element
const navEl = document.getElementById("nav-el");

// Return to landing page
function goHome() {
  if (navEl.innerText === "Home") {
    window.location.reload();
  }
}

// Placeholder values for High Score table
const defaultArr = [
  ["KRK", 690],
  ["KRC", 420],
  ["RRC", 336],
  ["MEC", 180],
  ["FTW", 117],
];

// Retrieve scores from localStorage or use placeholder values
// ALWAYS [[returns an], [array made], [of arrays]]
const highScores =
  JSON.parse(localStorage.getItem("high scores")) ?? defaultArr;

// Displays High Score table
function viewHighScores() {
  // Changes 'View High Scores' button to 'Home'
  navEl.style.display = "inline";
  navEl.innerText = "Home";

  // Removes page content
  mainEl.textContent = "";

  // Uses question element to display leaderboard heading
  questionEl.style = "display:flex;";
  questionEl.textContent = "High Scores";

  // If score is higher than the lowest high score...
  if (score > highScores[4][1]) {
    // ...display an exciting message 🎊
    questionEl.textContent = "NEW HIGH SCORE!";
  }

  // Render it inside the recently emptied main page
  mainEl.appendChild(questionEl);

  //📋 Actual High score table creation
  const tbl = document.createElement("table");

  // Outer table styling
  tbl.style.border = "1px solid #edf4ed";
  tbl.style.borderRadius = "15px";
  tbl.style.width = "20rem";
  tbl.style.fontSize = "1.5em";

  //🤯 Simple "for loop-ception"
  // OUTER LOOP Creates 5 rows
  for (let i = 0; i < 5; i++) {
    // inserts and styles a row into our table
    const tr = tbl.insertRow();
    tr.style.height = "3rem";

    // INNER LOOP creates two cells per row
    for (let j = 0; j < 2; j++) {
      // inserts a cell into our row
      const td = tr.insertCell();

      // Creates a variable containing a reference to the high scores array
      // i will loop through each [[inner, array], [in, the], [highScores, array]]
      // j will select either the first or second element from the inner array
      const playerInit = document.createTextNode(highScores[i][j]);
      // appends the variable into the cell
      td.appendChild(playerInit);
      // styles the cell
      td.style.borderBottom = "3px solid #37312f";
      td.style.borderRight = "3px solid #37312f";
      td.style.borderRadius = "15px";
    }
  } //😵 end of loop-ception
  // Renders High score table underneath new heading
  mainEl.appendChild(tbl);

  // If the game has just ended...
  if (gamePlayed) {
    // update the startBtn to say "Try again?"
    startBtn.innerText = "Try again?";
    mainEl.appendChild(startBtn);

    // remove event listeners
    startBtn.removeEventListener("click", startQuiz);
    startBtn.removeEventListener("click", countdown);

    // take the user to the home page
    startBtn.addEventListener("click", goHome);
  }
}

// Navigation element event listeners
navEl.addEventListener("click", goHome);
navEl.addEventListener("click", viewHighScores);
// ************************END OF LEADERBOARD ELEMENTS********************************

// ************************START OF START-QUIZ ELEMENTS********************************
// Main Page Content
const mainEl = document.getElementById("page-content");

// Start Quiz button
const startBtn = document.getElementById("start-btn");

// Displays first question
function startQuiz() {
  // Empties main page content
  mainEl.innerHTML = "";

  // 🎉 Surprise! Hidden HTML elements display first question...
  questionEl.setAttribute(
    "style",
    "display:flex; margin: 1.8rem 0; font-size:1.8rem; line-height:1.4;"
  );
  // ...and her corresponding answer choices
  answerListEl.setAttribute("style", "display:flex;");
  // ...removes the 'View High Scores' button
  navEl.style.display = "none";

  // ...renders the newly "visible" elements into the main page content
  mainEl.appendChild(questionEl);
  mainEl.appendChild(answerListEl);
}

// Start Quiz event listener
startBtn.addEventListener("click", startQuiz);
startBtn.addEventListener("click", countdown);
// ************************END OF START-QUIZ ELEMENTS********************************

// ************************START OF SCORE-TIMER ELEMENTS********************************
// Initialize score
let score = 0;

// Score counter element
const timerEl = document.getElementById("timer");

// Score Countdown function
function countdown() {
  // Sets score to 6000 (aka 60 seconds of time)
  score = 6000;

  // Updates score counter display
  timerEl.innerHTML = score;

  //⏲️ Actual countdown timer
  var timeInterval = setInterval(function () {
    // CONTINUOUSLY update score counter display
    timerEl.innerHTML = score;
    // IF the time OR questions have run out...
    if (score <= 0 || i === questionsArr.length + 1) {
      // ...STOP the timer...
      clearInterval(timeInterval);
      // ...IF score is a negative number...
      if (score < 0) {
        // ... make it zero
        score = 0;
      }
      // ...update the score counter with final score...
      timerEl.innerHTML = score;
      // ...stores it in the endgame message...
      endMsg.innerHTML = `Your final score is ${score}`;

      // ...go to endgame screen
      endQuiz();
    }
    // DECREMENT the score by 1 BEFORE the repeat delay
    --score;
    // REPEAT the function every 10 milliseconds
  }, 10);
}
// ************************END OF SCORE-TIMER ELEMENTS********************************

// ************************START OF QUESTION ELEMENTS********************************
// Question Element
const questionEl = document.querySelector(".question");

// Questions Array
const questionsArr = [
  "Commonly used data types DO NOT include:",
  "Which built-in method adds one or more elements to the end of an array and returns the new length of the array?",
  "Which of the following function of Boolean object returns the primitive value of the Boolean object?",
  "Which of the following function of String object is used to match a regular expression against a string?",
  "Which of the following function of Array object creates a new array with the results of calling a provided function on every element in this array?",
  "Inside the HTML document, where do you place your Javascript code?",
  "What operator is used to assign a value to a declared variable?",
  "Which of these is one of the six primitive data types in JavaScript?",
  "What is an object method?",
  "What are the two types of scope JavaScript uses?",
];

// Map each question to its correct answer
const quizMap = new Map();
quizMap.set(questionsArr[0], "d");
quizMap.set(questionsArr[1], "c");
quizMap.set(questionsArr[2], "b");
quizMap.set(questionsArr[3], "b");
quizMap.set(questionsArr[4], "d");
quizMap.set(questionsArr[5], "b");
quizMap.set(questionsArr[6], "d");
quizMap.set(questionsArr[7], "a");
quizMap.set(questionsArr[8], "a");
quizMap.set(questionsArr[9], "b");

// An iterator to loop through questions
const mapIter = quizMap[Symbol.iterator]();

// Loops through Questions and Answers
var answerHandler = function (event) {
  // Ensure iterator is on proper value
  console.log(i);

  // Bind the user's target inputs (mouse or touch) to an element
  var targetEl = event.target;

  // IF the target element hits an answer element
  // AND there are questions left in the questions array, then...
  if (targetEl.matches(".answer") && i < questionsArr.length) {
    // ...UPDATE to a new question element from the array, and...
    questionEl.textContent = questionsArr[i];
    // ...UPDATE the answer elements to the respective answer choices
    ansElA.textContent = answersArr[i][0];
    ansElB.textContent = answersArr[i][1];
    ansElC.textContent = answersArr[i][2];
    ansElD.textContent = answersArr[i][3];
    // log the user's selected answer
    console.log(targetEl.id);
  }

  // OTHERWISE IF the user selects an answer, and it's the last question
  else if (targetEl.matches(".answer") && i === questionsArr.length) {
    // THEN display the endgame screen
    endQuiz();
  }
  // increment the counter
  i++;

  // Check if the answer was correct or incorrect
  checkAnswer(targetEl);
};

//✔️ CHECK ANSWER function
function checkAnswer(event) {
  // IF the event targets an answer with an id,
  // that matches the value mapped to the question
  // AND there are still questions left in the array, then...
  if (event.id === mapIter.next().value[1] && i < questionsArr.length + 2) {
    // ...respond by immediately turning the score-timer GREEN
    let response = setTimeout(function () {
      timerEl.style.color = "green";
    });
    // after 1000 milliseconds (1 second) turn the score-timer back to CREAM
    let clear = setTimeout(function () {
      clearTimeout(response);
      timerEl.style.color = "#edf4ed";
    }, 1000);
    // log the answer as CORRECT
    console.log("CORRECT");
    // Give the user 1000 points (10 more seconds)
    score += 1000;
  }
  // OTHERWISE...
  else {
    // turn the score RED
    let response = setTimeout(function () {
      timerEl.style.color = "red";
    });
    // and back to CREAM after 1 second
    let clear = setTimeout(function () {
      clearTimeout(response);
      timerEl.style.color = "#edf4ed";
    }, 1000);
    // log the answer was INCORRECT
    console.log("INCORRECT");
    // Reduce time by 10 seconds (1000 points)
    score -= 1000;
  }
}
// ************************END OF QUESTION ELEMENTS********************************

// ************************START OF ANSWER ELEMENTS********************************
// Answer choice elements
const answerListEl = document.querySelector(".answer-wrapper");
const answersEl = document.querySelectorAll(".answer");
const ansElA = document.getElementById("a");
const ansElB = document.getElementById("b");
const ansElC = document.getElementById("c");
const ansElD = document.getElementById("d");

// Answer Choices Array
const answersArr = [
  ["A. Array", "B. String", "C. Boolean", "D. Alert"],
  ["A. last()", "B. put()", "C. push()", "D. pop()"],
  ["A. toSource()", "B. valueOf()", "C. toString()", "D. toNumber()"],
  ["A. concat()", "B. match()", "C. search()", "D. replace()"],
  ["A. push()", "B. join()", "C. pop()", "D. map()"],
  ["A. <head>", "B. <script>", "C. <link>", "D. <footer>"],
  [
    "A. Colon (:)",
    "B. Double-equal (==)",
    "C. Question mark (?)",
    "D. Equal sign (=)",
  ],
  ["A. bigInt", "B. truthy", "C. falsy", "D. float"],
  [
    "A. A function on an object",
    "B. An array",
    "C. An object's key number",
    "D. A function argument",
  ],
  [
    "A. Surrounding and inner",
    "B. Global and local",
    "C. Abroad and local",
    "D. Outside and inside",
  ],
];

// Answer Choice event listeners
answersEl.forEach(function (item) {
  // Adds functionality and styling to each answer choice
  item.addEventListener("click", answerHandler);
  // Provides UX for touchscreen users
  item.addEventListener("touchstart", function (event) {
    event.target.style.transform = "translateY(2px)";
    event.target.style.backgroundColor = "#f6ab13";
    event.target.style.color = "#11151c";
  });
  item.addEventListener("touchend", function (event) {
    event.target.style.transform = "translateY(-2px)";
    event.target.style.backgroundColor = "#11151c";
    event.target.style.color = "#f6ab13";
    event.target.style.boxShadow = "none";
  });
});
// ************************END OF ANSWER ELEMENTS********************************

// ************************START OF ENDGAME ELEMENTS********************************
// Endgame Message
const endMsg = document.createElement("p");
endMsg.setAttribute("style", "color:#edf4ed");

// Displays endgame message
function endQuiz() {
  // Change gamePlayed state to true
  gamePlayed = true;

  // Use question element to inform player game is over
  questionEl.textContent = "All Done!";
  // Hide answer elements
  answerListEl.setAttribute("style", "display:none;");

  // Displays endgame message (Final score is: X)
  mainEl.appendChild(endMsg);
  // Displays form element (Submit initials)
  mainEl.appendChild(formEl);

  // Focuses the user to the input for quicker initials entries
  initialInput.focus();

  // Listens to the 'enter' key or clicking the submit button to submit the score
  initialInput.addEventListener("submit", submitScore);
}

// Create and style submit initials form
const formEl = document.createElement("form");
formEl.style.height = "12rem";
formEl.style.display = "flex";
formEl.style.flexDirection = "column";
formEl.style.justifyContent = "space-between";

// Create divs to hold form elements
const labelDiv = document.createElement("div");
const inputDiv = document.createElement("div");
const submitDiv = document.createElement("div");

// "Enter your Initials" Input Label
const inputLabel = document.createElement("label");
inputLabel.textContent = "Please enter your initials: ";
inputLabel.setAttribute("for", "initial-input");
inputLabel.setAttribute("style", "font-size:1.4rem;");

// insert label into div and append it into the form
labelDiv.appendChild(inputLabel);
formEl.appendChild(labelDiv);

// Input form for entering initials
const initialInput = document.createElement("input");
// must be text
initialInput.setAttribute("type", "text");
initialInput.setAttribute("id", "initial-input");
initialInput.setAttribute("name", "initial-input");
// is required to continue
initialInput.setAttribute("required", "required");
// must be at least one character in length
initialInput.setAttribute("minlength", "1");
// may not exceed three characters in length
initialInput.setAttribute("maxlength", "3");
// input field size
initialInput.setAttribute("size", "1");
// styling removes blinking caret, transforms text uppercase, etc
initialInput.setAttribute(
  "style",
  "caret-color: transparent; text-transform: uppercase; text-align:center; font-size:2rem; color: #f6ab13; outline:none; background-color: #11151c; border: none; border-bottom:2px solid #6da34d;"
);

// inserts input field to its own div and appends it inside form
inputDiv.appendChild(initialInput);
formEl.appendChild(inputDiv);

// Submit High Score button
const submitBtn = document.createElement("input");
submitBtn.id = "submit-btn";
submitBtn.type = "submit";
submitBtn.value = "Submit";
// styling removes default appearance, prevents highlighting, etc
submitBtn.setAttribute(
  "style",
  "user-select: false; font-size: 1.3rem; appearance:none; border:none; border-radius:10px; padding:10px 20px; color:#edf4ed; background: #37312f; cursor:pointer;"
);
// insert button into own div
submitDiv.appendChild(submitBtn);
// append to form
formEl.appendChild(submitDiv);

// Checks if score made the leaderboard
function submitScore() {
  // If initials input is empty...
  if (!initialInput.value) {
    // ALERT user
    window.alert(
      "🧙‍♂️ Whoa, whoa, whoa! Not so fast! Please enter your initials!"
    );
    // Re-run endquiz
    endQuiz();
  }
  // Otherwise...
  else {
    // Retrieve lowest score from high scores (if nothing then return 0)
    const lowestScore = highScores[highScores.length - 1]?.score ?? 0;

    // if user score is greater
    if (score > lowestScore) {
      // save to high scores
      saveScore(score, highScores);
    }
    // otherwise just show high scores
    else {
      viewHighScores();
    }
  }
}

// Adds player score and initials to localStorage
function saveScore(score, highScores) {
  // Stores user's initials as uppercase letters
  let newInitials = initialInput.value.toUpperCase();
  // Creates an array with the user's initials and score
  let newHighScore = [newInitials, score + 1];
  // Push the new score into the high scores array
  highScores.push(newHighScore);
  // Organize arrays in descending order of second values of each array
  highScores.sort((a, b) => b[1] - a[1]);
  // Select the new array (trim any extra leftover arrays)
  highScores.splice(5);
  console.log(highScores);

  // Save new high scores array into localStorage as a string
  localStorage.setItem("high scores", JSON.stringify(highScores));
  // Reset the global counter to 1
  i = 1;
  // Display the high scores table
  viewHighScores();
}

// (STYLING) Submit Button event listeners (STYLING)
submitBtn.addEventListener("mouseover", function (event) {
  event.target.style.color = "#f6ab13";
  event.target.style.transform = "translateY(-2px)";
  event.target.style.boxShadow = "0px 2px #6da34d";
});
submitBtn.addEventListener("mouseout", function (event) {
  event.target.style.color = "#edf4ed";
  event.target.style.transform = "translateY(2px)";
  event.target.style.boxShadow = "none";
});
submitBtn.addEventListener("mousedown", function (event) {
  event.target.style.transform = "translateY(2px)";
  event.target.style.boxShadow = "none";
});
submitBtn.addEventListener("mouseup", function (event) {
  event.target.style.transform = "translateY(-2px)";
  event.target.style.boxShadow = "0px 2px #6da34d";
});
submitBtn.addEventListener("touchstart", function (event) {
  event.target.style.transform = "translateY(2px)";
  event.target.style.boxShadow = "none";
});
submitBtn.addEventListener("touchend", function (event) {
  event.target.style.transform = "translateY(-2px)";
});

// Submit score event listener
submitBtn.addEventListener("click", submitScore);
// ************************END OF ENDGAME ELEMENTS********************************
