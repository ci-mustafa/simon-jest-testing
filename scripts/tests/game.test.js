/**
 * @jest-environment jsdom
 */

const {game} = require("../game")


beforeAll(() => {
    const fs = require("fs");
    let htmlPageContent = fs.appendFileSync("index.html", "utf-8");
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
});

