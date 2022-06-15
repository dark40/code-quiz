var highScoreEl = document.querySelector(".highScores");
var listEl = document.querySelector("#scoreList");
var backBtn = document.querySelector("#back");
var clearBtn = document.querySelector("#clearScore");


// View high scores
function viewScore() {

    backBtn.addEventListener("click", function (event) {
        event.preventDefault();

        highScoreEl.setAttribute("style", "display: none;");
        introEl.setAttribute("style", "display: block;");

    })

    clearBtn.addEventListener("click", function (event) {
        event.preventDefault();
        localStorage.clear("highScores");
    });
}
