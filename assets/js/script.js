// Select elements
var timeEl=document.querySelector("#time");
var quizEl=document.querySelector(".quiz");
var startBtn=document.querySelector("#start");
var introEl=document.querySelector(".intro");
var quizEl=document.querySelector(".quiz");
var questionEl=document.querySelector("#question");
var optionEl=document.querySelector("#option");
var answerEl=document.querySelector("#answer");


// Hide questions
quizEl.setAttribute("style", "display: none;");

// Questions
var quiz_1 = {
    question: "What tag is used to define the metadata about an HTML document, and must always be included inside the element?",
    options: ["<meta>", "<div>", "<img>", "<table>"],
    correct: "<meta>"
}

var quiz_2 = {
    question: "What tag is used to render or transform text into an emphasized (italics) version?",
    options: ["<strong>", "<blockquote>", "<a>", "<em>"],
    correct: "<em>"
}

var quiz_3 = {
    question: "What tag is required in all HTML documents, and is used to define the title?",
    options: ["<title></title>", "<br></br>", "<body></body>", "<head></head>"],
    correct: "<title></title>"
}

var quiz_4 = {
    question: "What tag is used to define the bottom section (footer) of an HTML document?",
    options: ["<td>", "<h1> to <h6>", "<footer>", "<button>"],
    correct: "<footer>"
}

var quiz_5 = {
    question: "What tag is used to define a table or image notation (caption)?",
    options: ["<!DOCTYPE>", "<caption>", "<embed>", "<code>"],
    correct: "<caption>"
}

var quiz_6 = {
    question: "What tag can be used to insert a line break or blank line in an HTML document?",
    options: ["<body></body>", "<head></head>", "<br></br>", "<title></title>"],
    correct: "<br></br>"
}

var quiz_all = [quiz_1, quiz_2, quiz_3, quiz_4, quiz_5, quiz_6];

// Start Button
startBtn.addEventListener("click",function() {
    introEl.setAttribute("style", "display: none;");
    quizEl.setAttribute("style", "display: block;");
    setTime();
    postQuiz();
});



// Set a timer counting down 75s.
var secondsLeft = 75;

function setTime () {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000)
}

var i = 0;

// Post quiz question and options
function postQuiz() {
        questionEl.textContent = quiz_all[i]["question"];
        optionEl.children[0].textContent = quiz_all[i]["options"][0];
        optionEl.children[1].textContent = quiz_all[i]["options"][1];
        optionEl.children[2].textContent = quiz_all[i]["options"][2];
        optionEl.children[3].textContent = quiz_all[i]["options"][3];

        optionEl.addEventListener("click", evaluateQuiz);
    }  


// Evaluate the answers and add/minus time
function evaluateQuiz(event) {
    event.preventDefault();

    var pickedAnswer = event.target;

    if (pickedAnswer === quiz_all[i]["correct"]) {
        answerEl.textContent = "Correct";
        score = score + 10; 
    } else {
        answerEl.textContent = "Wrong";
        secondsLeft = secondsLeft - 10;
    }

    if (i<6) {
        i++;
        postQuiz();
    } else {

    }

}