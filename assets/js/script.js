// Select elements
var timeEl = document.querySelector("#time");
var quizEl = document.querySelector(".quiz");
var startBtn = document.querySelector("#start");
var introEl = document.querySelector(".intro");
var quizEl = document.querySelector(".quiz");
var questionEl = document.querySelector("#question");
var optionEl = document.querySelector("#option");
var answerEl = document.querySelector("#answer");
var endingEl = document.querySelector(".ending");
var scoreEl = document.querySelector("#score");
var initialEl = document.querySelector("#initials");
var submitBtn = document.querySelector("#submit")



// Hide questions, ending
quizEl.setAttribute("style", "display: none;");
endingEl.setAttribute("style", "display: none;");

// Questions
var quiz_1 = {
    question: "The Tag is used To Give Heading To The Table.",
    options: ["head", "td", "th", "Caption"],
    correct: "Caption"
}

var quiz_2 = {
    question: "If Button is clicked .......Event Handler is invoked.",
    options: ["OnSubmit()", "OnLoad()", "IsPostBack()", "Onclick()"],
    correct: "Onclick()"
}

var quiz_3 = {
    question: "JavaScript File Has An Extension of:",
    options: [".Java", ".Js", ".javascript", ".xml"],
    correct: ".Js"
}

var quiz_4 = {
    question: "A Function Associated With An object is Called:",
    options: ["Function", "Method", "Link", "None"],
    correct: "Method"
}

var quiz_5 = {
    question: "Method Prompt() Contain ........Number of Parameters.",
    options: ["One", "Two", "Three", "Zero"],
    correct: "Two"
}

var quiz_6 = {
    question: "Which Of The Dialog Box Display a Message And a Data Entry Field?",
    options: ["Alert()", "Prompt()", "Confirm()", "Msg()"],
    correct: "Prompt()"
}

var quiz_all = [quiz_1, quiz_2, quiz_3, quiz_4, quiz_5, quiz_6];

// Start Button
startBtn.addEventListener("click", function () {
    introEl.setAttribute("style", "display: none;");
    quizEl.setAttribute("style", "display: block;");
    setTime();
    postQuiz();
});



// Set a timer counting down 75s.
var secondsLeft = 75;

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;

        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            timeEl.textContent = "Time: 0";
            addList();
        }
    }, 1000)
}

var i = 0;
var pickedAnswer = "";
var score = 0;

// Post quiz question and options
function postQuiz() {
    questionEl.textContent = quiz_all[i]["question"];
    optionEl.children[0].textContent = quiz_all[i]["options"][0];
    optionEl.children[1].textContent = quiz_all[i]["options"][1];
    optionEl.children[2].textContent = quiz_all[i]["options"][2];
    optionEl.children[3].textContent = quiz_all[i]["options"][3];


    optionEl.children[0].addEventListener("click", function () { pickedAnswer = optionEl.children[0].textContent; evaluateQuiz(); });
    optionEl.children[1].addEventListener("click", function () { pickedAnswer = optionEl.children[1].textContent; evaluateQuiz(); });
    optionEl.children[2].addEventListener("click", function () { pickedAnswer = optionEl.children[2].textContent; evaluateQuiz(); });
    optionEl.children[3].addEventListener("click", function () { pickedAnswer = optionEl.children[3].textContent; evaluateQuiz(); });

}


// Evaluate the answers and add/minus time
function evaluateQuiz() {
    if (!pickedAnswer) {
        return;
    } else if (i < quiz_all.length-1) {
        optionEl.children[0].replaceWith(optionEl.children[0].cloneNode(true));
        optionEl.children[1].replaceWith(optionEl.children[0].cloneNode(true));
        optionEl.children[2].replaceWith(optionEl.children[0].cloneNode(true));
        optionEl.children[3].replaceWith(optionEl.children[0].cloneNode(true));

        // Pop up answers
        if (pickedAnswer === quiz_all[i]["correct"]) {
            answerEl.textContent = "Correct!";
            answerEl.setAttribute("style", "color:grey;border-top:1px solid grey;");
            pickedAnswer = "";
            score += 10;
        } else {
            answerEl.textContent = "Wrong!";
            answerEl.setAttribute("style", "color:grey;border-top:1px solid grey;");
            secondsLeft = secondsLeft - 20;
            pickedAnswer = "";
        }

        // Reset the answer to white after 1s. Make it "disappear"
        setTimeout(function(){
            answerEl.setAttribute("style", "color:white;border-top:1px solid white;");
        },1000)

        i += 1;
        postQuiz();

    } else {
        // Wait for one second
        setTimeout(function(){
            addList();
        },1000)

        

    }
}

// Add the score to the local storage. and navigate to highscore page.
function addList() {

    var storedRecord = JSON.parse(localStorage.getItem("records"));

    if (storedRecord !== null) {
        var record = storedRecord;
    } else {
        record = [];
    }

    quizEl.setAttribute("style", "display: none;");
    endingEl.setAttribute("style", "display: block;");
    scoreEl.textContent = "Your final score is " + score;

    submitBtn.addEventListener("click", function (event) {
        event.preventDefault();

        var highScores = {
            initials: initialEl.value,
            scores: score
        }

        var recordText = highScores.initials + " - " + highScores.scores;
        record.push(recordText);

        localStorage.setItem("records", JSON.stringify(record));

        window.location.href = "score.html";

    })
}