const {
    commonLetter,
    checkRectangle
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

describe("CheckRectangle", () => {
    test("Function returns a boolean", () => {
        const actual = checkRectangle("v");
        expect(typeof(actual)).toBe("boolean");
    });
    test("Function returns true if robot makes one of each move", () => {
        const actual = checkRectangle("v>^<");
        const expected = true;
        expect(actual).toBe(expected);
    });
    test("Function passes sample test one, returning true for a four by five rectangle", () => {
        const actual = checkRectangle("^^^<<<<vvv>>>>");
        const expected = true;
        expect(actual).toBe(expected);
    });
    test("Function passes sample test two, returning true for a two by three rectangle", () => {
        const actual = checkRectangle("<vvv>>^^^<");
        const expected = true;
        expect(actual).toBe(expected);
    });
    test("Function passes sample test three, returning false if rectangle is two moves short", () => {
        const actual = checkRectangle("<^^^>v");
        const expected = false;
        expect(actual).toBe(expected);
    });
    test("Function fails if robot makes less than three turns", () => {
        const actual = checkRectangle("<<>>");
        const expected = false;
        expect(actual).toBe(expected);
    });
    test("Function fails if robot makes more than five turns", () => {
        const actual = checkRectangle(">>vv>v<<^<^^");
        const expected = false;
        expect(actual).toBe(expected);
    });
});