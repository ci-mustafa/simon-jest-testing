const { markAsUntransferable } = require("worker_threads");

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
    let randomTurn = Math.floor(Math.random() * game.choices.length);
    game.currentGame.push(randomTurn);
}

let showScore = () => {document.getElementById("score").innerText = game.score}



module.exports = {game, newGame};