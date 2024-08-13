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
}

let showScore = () => {document.getElementById("score").innerText = game.score}



module.exports = {game, newGame};