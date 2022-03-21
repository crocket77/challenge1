// SCORES ELEMENTS
const highScoresEl = document.getElementById('highscores');

// NO SCORES CONTAINER
const noScoresEl = document.getElementById('no-scores');

// reference clear button 
const clearBtn = document.getElementById('clear');

// load scores saved onto local storage
function loadsScores() {

    // get scores from local storage
    let savedScores = localStorage.getItem('highScores');
       
    // if there are no scores to display, return out of function
    if (!savedScores) {

        // hide ol list
        highScoresEl.classList.remove('start');
        highScoresEl.classList.add('hide');

        // show no scores yet screen
        noScoresEl.classList.remove('hide');
        noScoresEl.classList.add('start');
        
        // return to remove error
        return;
    }

    // turn loaded scores into array
    savedScores = JSON.parse(savedScores);

    // sort object by high score
    savedScores.sort((a, b) => b.score - a.score);

    // iterate through the savedScores array
    for (var i = 0; i < savedScores.length; i++) {
        
        // set user doggo name to a variable to loop through
        let userName = savedScores[i].user;
        // set user score to a variable to loop through
        let userScore = savedScores[i].score;

        // create li element for each user
        const listScoreEl = document.createElement('li');

        // inner html to created li element
        listScoreEl.innerHTML = 'User: ' + userName + '&nbsp;&nbsp; | &nbsp; Score: ' + userScore;

        // append each li element created to the parent ol
        highScoresEl.appendChild(listScoreEl);
    }
};
loadsScores();

// clear scores from local storage
function clearScores(event) {

    // make button clicked out of focus to return 
    event.target.blur();

    // clear local storage
    localStorage.clear();

    // hide ol list
    highScoresEl.classList.remove('start');
    highScoresEl.classList.add('hide');

    // show no scores yet container
    noScoresEl.classList.remove('hide');
    noScoresEl.classList.add('start');
};

// when submit button is clicked, save score
clearBtn.addEventListener('click', clearScores);