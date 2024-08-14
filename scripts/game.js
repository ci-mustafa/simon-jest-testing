

let game = {
    "score": 0,
    "currentGame": [],
    "playerMove": [],
    "choices": ["button1", "button2", "button3", "button4"],
}

function newGame() {
    game.score = 0;
    game.playerMove = [];
    game.currentGame = [];
    showScore();
    addTurn();
}

function addTurn() {
    game.playerMove = [];
    game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]);
}

let showScore = () => {document.getElementById("score").innerText = game.score}

function lightsOn(circ) {
    document.getElementById(circ).classList.add("light");
    setTimeout(function () {
        document.getElementById(circ).classList.remove("light");
    }, 400);
}


module.exports = {game, newGame, lightsOn, addTurn, showScore};