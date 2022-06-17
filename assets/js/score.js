var highScoreEl = document.querySelector(".highScores");
var listEl = document.querySelector("#scoreList");
var backBtn = document.querySelector("#back");
var clearBtn = document.querySelector("#clearScore");


// View high scores
function viewScore() {

    var storedRecord = JSON.parse(localStorage.getItem("records"));

    if (storedRecord !== null) {
        var records = storedRecord;
    } else {
        return;
    }

   

    for (var j = 0; j < records.length; j++) {
        var line = records[j];

        var li = document.createElement("li");
        li.textContent = line;
        li.setAttribute("data-index", j);

        listEl.appendChild(li);
    }
    

}

viewScore()

backBtn.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "index.html";
})

clearBtn.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.clear();
    window.location.href="score.html";

})
