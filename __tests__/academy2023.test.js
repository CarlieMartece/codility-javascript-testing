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
    test("Function passes small input test of only two letters", () => {
        const input =  ["w", "w"];
        const expected = [0, 1, 0];
        const actual = commonLetter(input);
        expect(actual).toEqual(expected);
    });
});