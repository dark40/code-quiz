// Select elements
var timeEl=document.querySelector("#time");
var quizEl=document.querySelector(".quiz");
var startBtn=document.querySelector("#start");
var introPg=document.querySelector(".intro");

// Hide questions
quizEl.setAttribute("style", "display: none;");

// Start Button
startBtn.addEventListener("click",function() {
    introPg.setAttribute("style", "display: none;");
    quizEl.setAttribute("style", "display: block;");
    setTime()
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
