//Questions
var questions = [
{
q:"A very useful tool used during development and debugging for printing content to the debugger is?",
choices: [{choice: '1. Javascript'}, {choice: '2.Terminal/Bash'}, {choice: '3.For Loops'}, {choice: '4.Console.log'}],
a: '1. Javascript'
},
{
q:"Commonly used data types DO NOT include:",
choices: [{choice: '1. Strings'}, {choice: '2. Booleans'}, {choice: '3.Alerts'}, {choice: '4.Numbers'}],
a: '3.Alerts'
},
{
q:"Arrays in Javascript can be used to store.",
choices: [{choice: '1.numbers and strings'}, {choice: '2.code'}, {choice: '3.booleans'}, {choice: '4.all the above'}],
a: '4.all the above'
},
{
q:"How do you call a function named myFunction?",
choices: [{choice: '1.call myFunction()'}, {choice:'2.call function'},{choice: '3.myFunction()'},{choice: '3.all myFunction'}],
a: '3.myFunction()'
},
{
q: "To see if two variables are equal in an if / else statement you would use ____.",
choices: [{choice: '1. ='},{choice: '2. =='},{choice: '3. debug'}, {choice: '4. !='}],
a: '2. =='
},
{
q:"The first index of an array is ____.",
choices: [{choice:'1. 0'},{choice:'2. 1'},{choice:'3. 8'},{choice:'4. any'}],
a: '1. 0'
},
{
q:"Questions 7 : How to write an IF statement in JavaScript?",
choices: [{choice:'1. if i == 5 then'}, {choice:'2.if i = 5 then'}, {choice: '3. if(i == 5)'}, {choice:'4. if i = 5'}],
a: '3. if(i == 5)'
},
{
q: "Which event occurs when the user clicks on an HTML element?",
choices: [{choice:'1. onclick'},{choice:'2. onchange'},{choice:'3. onmouseover'},{choice:'4. onmouseclick'}],
a: '1. onclick'
},
{
q: "String values must be enclosed within _____ when being assigned to variables.",
choices: [{choice: '1. commas'}, {choice:'2. curly brackets'},{choice:'3. quotes'},{choice: '4. parenthesis'}],
a: '3. quotes'
},
{
q:"How do you create a function in JavaScript",
choices: [{choice:'1. varfunction = myFunction()'},{choice:'2. function myFunction()'},{choice:'3. function:myFunction()'},{choice:'4. createMyFunction()'}],
a: '2. function myFunction()'
},
];
//Variables
var containerQuestionEl = document.getElementById("question-container");
var containerStartEl = document.getElementById("starter-container");
var containerEndEl = document.getElementById("end-container")
var containerScoreEl = document.getElementById("answer")
var formInitials = document.getElementById("initials-form")
var containerHighScoresEl = document.getElementById("high-score-container")
var ViewHighScoreEl = document.getElementById("high-scores")
var listHighScoreEl = document.getElementById("high-score-list")
var correctEl = document.getElementById("correct")
var wrongEl = document.getElementById("wrong")
var btnStartEl = document.querySelector("#start-game");
var btnGoBackEl = document.querySelector("#go-back")
var btnClearScoresEl = document.querySelector("#clear-high-scores")
var questionEl = document.getElementById("question")
var answerbuttonsEl = document.getElementById("answer-buttons")
var timerEl = document.querySelector("#timer");
var score = 0;
var timeleft;
var gameover
timerEl.innerText = 0;
var HighScores = [];
var arrayShuffledQuestions
var QuestionIndex = 0

//Go back on Score Page
var renderStartPage = function () {
    containerHighScoresEl.classList.add("hide")
    containerHighScoresEl.classList.remove("show")
    containerStartEl.classList.remove("hide")
    containerStartEl.classList.add("show")
    containerScoreEl.removeChild(containerScoreEl.lastChild)
    QuestionIndex = 0
    gameover = ""
    timerEl.textContent = 0 
    score = 0
    if (correctEl.className = "show") {
    correctEl.classList.remove("show");
    correctEl.classList.add("hide")
}
    if (wrongEl.className = "show") {
    wrongEl.classList.remove("show");
    wrongEl.classList.add("hide");
}
}
//Start quiz at 60 
var setTime = function () {
    timeleft = 60;
var timercheck = setInterval(function() {
    timerEl.innerText = timeleft;
    timeleft--
    if (gameover) {
    clearInterval(timercheck)}
    if (timeleft < 0) {
    showScore()
    timerEl.innerText = 0
    clearInterval(timercheck)
    }

    }, 1000)
}
//Start Quiz and shuffles questions
var startGame = function() {
    containerStartEl.classList.add('hide');
    containerStartEl.classList.remove('show');
    containerQuestionEl.classList.remove('hide');
    containerQuestionEl.classList.add('show');
    arrayShuffledQuestions = questions.sort(() => Math.random() - 0.5)
    setTime()
    setQuestion()
}
//Quiz order
var setQuestion = function() {
    resetAnswers()
    displayQuestion(arrayShuffledQuestions[QuestionIndex])
}
//Remove answer buttons
var resetAnswers = function() {
    while (answerbuttonsEl.firstChild) {
    answerbuttonsEl.removeChild(answerbuttonsEl.firstChild)
};
};
//display Questions
var displayQuestion = function(index) {
    questionEl.innerText = index.q
    for (var i = 0; i < index.choices.length; i++) {
var answerbutton = document.createElement('button')
    answerbutton.innerText = index.choices[i].choice
    answerbutton.classList.add('btn')
    answerbutton.classList.add('answerbtn')
    answerbutton.addEventListener("click", answerCheck)
    answerbuttonsEl.appendChild(answerbutton)
}
};
//To display Correct
var answerCorrect = function() {
    if (correctEl.className = "hide") {
    correctEl.classList.remove("hide")
    correctEl.classList.add("banner")
    wrongEl.classList.remove("banner")
    wrongEl.classList.add("hide")
    }
    }  
///To display Wrog
var answerWrong = function() {
    if (wrongEl.className = "hide") {
    wrongEl.classList.remove("hide")
    wrongEl.classList.add("banner")
    correctEl.classList.remove("banner")
    correctEl.classList.add("hide")
}
}
//Answer Check
var answerCheck = function(event) {
    var selectedanswer = event.target
    if (arrayShuffledQuestions[QuestionIndex].a === selectedanswer.innerText){
    answerCorrect()
    score = score + 5
}
    else {
    answerWrong()
    score = score - 5;
    timeleft = timeleft - 10;
};
//Questions order
QuestionIndex++
    if  (arrayShuffledQuestions.length > QuestionIndex + 1) {
    setQuestion()
    }   
    else {
    gameover = "true";
    showScore();
    }
}
//Show score
var showScore = function () {
    containerQuestionEl.classList.add("hide");
    containerEndEl.classList.remove("hide");
    containerEndEl.classList.add("show");
var scoreDisplay = document.createElement("p");
    scoreDisplay.innerText = ("Your final score is " + score + "!");
    containerScoreEl.appendChild(scoreDisplay);
}       
//High Score
var createHighScore = function(event) { 
    event.preventDefault() 
var initials = document.querySelector("#initials").value;
    if (!initials) {
    alert("Enter your intials!");
    return;
}
formInitials.reset();
var HighScore = {
    initials: initials,
    score: score
} 
//Sort Score
    HighScores.push(HighScore);
    HighScores.sort((a, b) => {return b.score-a.score});
while (listHighScoreEl.firstChild) {
    listHighScoreEl.removeChild(listHighScoreEl.firstChild)
}
for (var i = 0; i < HighScores.length; i++) {
var highscoreEl = document.createElement("li");
    highscoreEl.ClassName = "high-score";
    highscoreEl.innerHTML = HighScores[i].initials + " - " + HighScores[i].score;
    listHighScoreEl.appendChild(highscoreEl);
}
    saveHighScore();
    displayHighScores();
}
//Save high score
var saveHighScore = function () {
    localStorage.setItem("HighScores", JSON.stringify(HighScores))
}
//Load high schore
var loadHighScore = function () {
var LoadedHighScores = localStorage.getItem("HighScores")
    if (!LoadedHighScores) {
    return false;
}
LoadedHighScores = JSON.parse(LoadedHighScores);
LoadedHighScores.sort((a, b) => {return b.score-a.score})
 for (var i = 0; i < LoadedHighScores.length; i++) {
var highscoreEl = document.createElement("li");
    highscoreEl.ClassName = "high-score";
    highscoreEl.innerText = LoadedHighScores[i].initials + " - " + LoadedHighScores[i].score;
    listHighScoreEl.appendChild(highscoreEl);
    HighScores.push(LoadedHighScores[i]);
}
} 
var clearScores = function () {
    HighScores = [];
    while (listHighScoreEl.firstChild) {
    listHighScoreEl.removeChild(listHighScoreEl.firstChild);
}
    localStorage.clear(HighScores);
} 

loadHighScore()
//Event listeners-Click* to Start Game
btnStartEl.addEventListener("click", startGame)
//*Go back
btnGoBackEl.addEventListener("click", renderStartPage)
//*Submit button 
formInitials.addEventListener("submit", createHighScore)
//*High scores
ViewHighScoreEl.addEventListener("click", displayHighScores)
//Display HighScore
var displayHighScores = function() {
    containerHighScoresEl.classList.remove("hide");
    containerHighScoresEl.classList.add("show");
    gameover = "true"
//To show right or wrong
    if (containerEndEl.className = "show") {
    containerEndEl.classList.remove("show");
    containerEndEl.classList.add("hide");
}
    if (containerStartEl.className = "show") {
    containerStartEl.classList.remove("show");
    containerStartEl.classList.add("hide");
}
    if (containerQuestionEl.className = "show") {
    containerQuestionEl.classList.remove("show");
    containerQuestionEl.classList.add("hide");
}
    if (correctEl.className = "show") {
    correctEl.classList.remove("show");
    correctEl.classList.add("hide");
}
    if (wrongEl.className = "show") {
    wrongEl.classList.remove("show");
    wrongEl.classList.add("hide");
}
}


