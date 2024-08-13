/**
 * @jest-environment jsdom
 */




const {game, newGame} = require("../game");




beforeAll(() => {
    const fs = require("fs");
    let htmlPageContent = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(htmlPageContent);
    document.close();

});

describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
    test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true);
    });
    test("playerMove key exists", () => {
        expect("playerMove" in game).toBe(true);
    });
    test("choices key exists", () => {
        expect("choices" in game).toBe(true);
    });
    test("choices array should contains correct ids", () => {
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
    });
});


describe("newGame function works correctly", () => {
    beforeAll(() => {
        game.score = 40;
        game.playerMove = ["move1", "move2"];
        game.currentGame = ["firstgame", "secondgame"];
        document.getElementById("score").innerText = "10";
        newGame();
    });
    test("should reset score to 0", () => {
        expect(game.score).toBe(0);
    });
    test("should clear playerMove array", () => {
        expect(game.playerMove.length).toBe(0);
    });
    test("should be one element in currentGame array", () => {
        expect(game.currentGame.length).toBe(1);
    });
    test("should display zero for the element with id 'score' ", () => {
        expect(document.getElementById("score").innerText).toEqual(0);
    });
})

