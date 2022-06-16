var highScoreEl = document.querySelector(".highScores");
var listEl = document.querySelector("#scoreList");
var backBtn = document.querySelector("#back");
var clearBtn = document.querySelector("#clearScore");


// View high scores
function init() {
    var storedRecord = JSON.parse(localStorage.getItem("record"));

    if (storedRecord !== null) {
        record = storedRecord;
    }

    viewScore();
}

function viewScore() {

    for (var j = 0; j < record.length; j++) {
        var line = record[j];

        var li = document.createElement("li");
        li.textContent = line;
        li.setAttribute("data-index", j);

        listEl.appendChild(li);
    }

}

viewScore();



backBtn.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "index.html";
})

clearBtn.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.clear();
    viewScore();
})
