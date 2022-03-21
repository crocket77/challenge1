# Quizard's Coding Challenge 🧙‍♂️

Will you enter the Quizard's coding gauntlet?

Prove you have what it takes to climb to the top of the leaderboard among the few...

...or perish into obscurity among the many...

...your destiny awaits you.

## 📚 Table of Contents
- [🧙‍♂️ Quizard's Coding Challenge](#️-quizards-coding-challenge)
  - [📚 Table of Contents](#-table-of-contents)
  - [🧾 Features](#-features)
  - [💯 Additional Features](#-additional-features)
  - [📖 Developer Journey](#-developer-journey)
  - [🛠️ Installation](#️-installation)
  - [👨‍🏫 Usage](#-usage)
  - [🥂 Credits](#-credits)
  - [📇 License](#-license)
  - [👋 How to Contribute](#-how-to-contribute)

## 🧾 Features
- A timed quiz on JavaScript fundamentals
- Stores high scores
- Upon starting, the user is presented with a question
- Additional questions are presented as user answers them
- Incorrect answers subtract time from the clock
- Quiz ends when all questions are answered or timer reaches 0
- User can submit initials and save their score after quiz

## 💯 Additional Features
- Placeholder values in high score table on first visit
- View High Scores button disappears during game
- View High Scores button transforms to Home button at High Score screen
- High scores must be between 1 and 3 characters and will always render as uppercase letters
- Input is forced
- Correct answers add time to the clock
- Incorrect answers turn the score counter red for a brief moment
- Correct answers turn the score counter green for a brief moment
- Styling for both desktop and mobile users
- Input automatically focused after quiz end
- User highlighting prevented for better experience
- 'Try again' option at quiz end provides incentive for user to stay on site
- Negative score values converted to 0
- localStorage only stores top scores to prevent bloat

## 📖 Developer Journey

📓 This repo contains the MVP for a themed coding quiz challenge requested by an anonymous student at an anonymous coding boot camp and was created completely from scratch. Our client here was interested in taking a timed quiz on JavaScript fundamentals that stores high scores. They specifically wanted to be able to guage their progress compared to their peers, a not unreasonable goal when navigating with a group through one of the world's most popular, yet difficult to learn, coding languages: JavaScript.

I was thrilled to be contacted for this project, and right away I got started creating the boilerplate (Thank you, emmet shortcut html:5!) I started with a basic structure of header, main, and footer, not unlike our recent module practice.<sup>[1](#footnote1)</sup>

🎨 I knew I would have a hard time staying motivated if the project I was working on was unpleasant to look at, so I took a head-on approach to styling early on and decided to use a color palette from coolers.co combined with flexbox for mobile-responsiveness.<sup>[2](#footnote2)</sup>

From there, it was relatively simple to continue styling and adding media queries as I progressed, but just for added efficiency and further compartmentalizing styling out of my way, I migrated the project to Sass early. Explaining Sass is much outside the scope of this readme, but if you're not familiar with it, I strongly urge you to go check it out. Their documentation is a true learning experience. For this project, I decided to experiment with two additional Sass features I had never used before: folder-structured components with the _underscore prefix,<sup>[3](#footnote3)</sup> and mixins.<sup>[4](#footnote4)</sup>

With stylesheets mostly out of the way, came lots of javascript styling using setAttribute, the .style method, and even the occasional html inline styling (I now understand why that's sometimes easier to do that on the fly!) I created the countdown timer using a simple setInterval method, at 10 milliseconds. I knew I wanted a faster ticker that counts multiple decimal places beyond seconds to increase intensity and fun.

🗺️ The next problem was to begin dynamically rendering questions and answers. I wanted to use pseudo-classes to style the elements, but wasn't able to with javascript at my level, so I chose to hide them in the HTML, style them in the scss, and then display them dynamically. From there I created an array of questions that I mapped to strings with the correct letter answer. By giving each answer choice, div a unique id of "a" through "d" I simply created a conditional statement that checked if the value of the events target method matched the letter mapped to that specific question element. This allowed me to log correct and incorrect answers to the console.

By then using a querySelectorAll on the .answer class of all the answer choice elements I was also able to listen for clicks on incorrect answers to move the iterator along to the next set of question and answers. By this point, I had created another array which was actually made of up smaller arrays that were the answer choices to each question.<sup>[5](#footnote5)</sup>

💡 The endGame message became much simpler once I remembered that a form element can tie your input elements together. I used an alert, text-transform, min and maxlength, border-bottom, caret-color transparent, and other styling techniques to create a gamified initials submission. Perhaps the biggest headache was figuring out how I wished to store the player's information and call it back from localstorage.

The answer was simply another array of arrays. I would create a default placeholder array to store some data for rendering on first page visit without logging anything into localstorage. Upon playing the quiz, if the user scores higher than the lowest score, they are able to save their score, and see it rendered on the screen along with a NEW HIGH SCORE! message displayed on the screen.<sup>[6](#footnote6)</sup>

👩‍🍳 The saveScore function does the legwork here and takes in two arguments (score, highScores). It essentially pushes an array made up of the user's initials(forced toUpperCase once again), and their score counter at the end of the quiz, into the placeholder array. The array is then sorted by score, from highest to lowest, and spliced at 5 items. The finished array is then stringified and set into localStorage.

The viewHighScores function simply retrieves either the parsed version of the stored array, or upon first visit, the default array and takes advantage of a nested for loop in conjunction with the html table element to create a 2 column, 5 row table of stored high scores. The more a user plays, the more their initials/scores will populate the leaderboard.

🦟 The application also fixes several bugs regarding switching between viewing high scores and returning to the home page in a non-browser-intensive manner, as well as removing navigation functionality during gameplay. I finished by fixing small final bugs, re-writing the instructions, and reorganizing the codebase based on components of the page such as: leaderboard, start-quiz functionality, timer, questions, answers, and endgame elements.

<sub><a name="footnote1">1</a>: Initially I tried to base it entirely off the taskinator project to save time on styling, but that idea was quickly thwarted by its own untenable nature. This project deserved the ground-up treatment. Doing so, was not only incredibly satisfying, but actually much easier, as I took ownership of my own desicion-making.</sub>

<sub><a name="footnote2">2</a>: I **absolutely** did not want styling to overshadow the functionality we were going to have to create during this project, and I'm glad I made it a priority because I really loved the color palette I ended up with. The richness of the not-abyssal black background coupled with the honey-yellow monospace hacker text has truly kept my heart beating strong through some of the harder challenges of this project.</sub>

<sub><a name="footnote3">3</a>: The first was restructuring scss files into folder-structured components with the _underscore prefix. This ensures that only one css file is generated from my combined stylsheet in which I import the other separate .scss components using the '@use' at-rule. The result was extremely organized short, concise, and descriptive stylsheets and only one http request from the browser on page load.</sub>

<sub><a name="footnote4">4</a>: The other Sass feature I used for the first time was the '@mixin' at-rule. I created my own mixin made up of a few regular css properties to, in a more concise manner, created centered flex containers with centered text on the inside, using the '@include' at-rule to insert the styling in multiple places.</sub>

<sub><a name="footnote5">5</a>: Eventually, I was able to implement styling for touch screen users on the answer choices, and also create the function for adding/subtracting time(simply adding 1000 to the score which added 10 seconds to the "timer"), as well as a neat effect that turns the score-timer green for a brief moment on correct answers and red on incorrect ones to let the user know how they are doing.</sub>

<sub><a name="footnote6">6</a>: The functionality for this is quite elegant and I surely cannot take credit for how I've manhandled it in my own neanderthal way to work for this project.</sub>

🔥 TL;DR It's a really badass coding quiz. 🚒

## 🛠️ Installation
Locate the dropdown menu labeled 'Code' to the left of the About section in the main page of this repository. From there, select your preferred cloning method from HTTPS, SSH, or the GitHub CLI. For this demonstration, we will be using the SSH method. Copy the link and head to your terminal. From the command line you should enter:

    git clone <INSERT_SSH_KEY_HERE>

Replacing the above placeholder with the link copied from GitHub. This will clone the repository into a local directory on your machine. And that's it! Happy Hacking! 🚀

## 👨‍🏫 Usage
This code is strictly for use in the International Coding Quizard's Gauntlet of Sorcerers and Sorcery 🧙‍♂️ and is only provided as material for study and otherwise double-checking implementation of various javascript and Web API functionality. Any violations of these use cases will see the offender flogged in the streets, held in the stocks for a brief period, and sent to a life in the cells of the black dungeon shortly thereafter. Screenshots of original mockup are included.

   ![Mockup of Quizard's Coding Challenge.](./assets/images/mockup.gif)

Mobile-responsive version

**Supports most major touchscreen devices**

  ![Mobile version mockup of Quizard's Coding Challenge.](./assets/images/responsive-mockup.gif)

## 🥂 Credits
UT Austin Coding Boot Camp https://techbootcamps.utexas.edu/coding/

Kyle Ferguson https://github.com/kferguson52

Stack Overflow https://stackoverflow.com/

W3 Schools https://www.w3schools.com/

MDN Web Docs https://developer.mozilla.org/en-US/

Michael Karén https://michael-karen.medium.com/how-to-save-high-scores-in-local-storage-7860baca9d68

## 📇 License
MIT License

Copyright (c) 2021 Keenan R. Chiasson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## 👋 How to Contribute
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

See the [Contributor Covenant](https://www.contributor-covenant.org/) for details on how to contribute
