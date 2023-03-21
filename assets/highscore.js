var highScore = document.querySelector("#high-scores");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#go-back");

clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

var totalScores = localStorage.getItem("totalScores");
totalScores = JSON.parse(totalScores);

if (totalScores !== null) {
    for (var i = 0; i < totalScores.length; i++) {
        var newLiEl = document.createElement("li");
        newLiEl.textContent = totalScores[i].initials + " " + totalScores[i].score;
        highScore.appendChild(newLiEl);
    }
}

goBack.addEventListener("click", function() {
    window.location.replace("index.html");
})