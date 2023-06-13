const {
    commonLetter
} = require("../academy2023");

describe("CommonLetter", () => {
    test("Function returns an array", () => {
        const actual = commonLetter(["a", "b", "c"]);
        expect(Array.isArray(actual)).toBe(true);
    });
    test("Function passes first sample test, returning indexes of characters in matching positions, plus the position these characters are found in", () => {
        const input =  ["abc", "bca", "dbe"];
        const expected = [0, 2, 1];
        const actual = commonLetter(input);
        expect(actual).toEqual(expected);
    });
    test("Function passes small input hidden test of only two letters", () => {
        const input =  ["w", "w"];
        const expected = [0, 1, 0];
        const actual = commonLetter(input);
        expect(actual).toEqual(expected);
    });
    test("Function passes second sample test, four four letter words with one matching character", () => {
        const input =  ["zzzz", "ferz", "zdsr", "fgtd"];
        const expected = [0, 1, 3];
        const actual = commonLetter(input);
        expect(actual).toEqual(expected);
    });
    test("Function passes third sample test, three two letter words with no matching characters", () => {
        const input =  ["gr", "sd", "rg"];
        const expected = [];
        const actual = commonLetter(input);
        expect(actual).toEqual(expected);
    });
    test("Function passes fourth sample test, two five letter words", () => {
        const input =  ["bdafg", "ceagi"];
        const expected = [0, 1, 2];
        const actual = commonLetter(input);
        expect(actual).toEqual(expected);
    });
    test("Function passes second hidden test, array of matching one-letter strings", () => {
        const input =  ["x", "x", "x", "x", "x", "x", "x", "x", "x", "x"];
        const expected = [0, 1, 0];
        const actual = commonLetter(input);
        expect(actual).toEqual(expected);
    });
});