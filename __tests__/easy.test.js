const {
    longestPassword
} = require("../easy");

describe("LongestPassword", () => {
    test("Function returns a number", () => {
        const actual = longestPassword();
        const expected = -1;
        expect(actual).toBe(expected);
    })
});