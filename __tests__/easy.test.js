const {
    longestPassword
} = require("../easy");

// it has to contain only alphanumerical characters (a−z, A−Z, 0−9);
// there should be an even number of letters;
// there should be an odd number of digits.
describe("LongestPassword", () => {
    test("Function returns a number", () => {
        const actual = longestPassword("t3st");
        const expected = -1;
        expect(actual).toBe(expected);
    });
    test("Function checks the only word in single-word array for password validity", () => {
        let actual = longestPassword("Nook314");
        let expected = 7;
        expect(actual).toBe(expected);
        actual = longestPassword("Nooka415");
        expected = -1;
        expect(actual).toBe(expected);
    });
    test("Function checks all words in multi-word array and returns longest valid password", () => {
        let actual = longestPassword("T3sting N0oka");
        let expected = 7;
        expect(actual).toBe(expected);
        actual = longestPassword("You 3re g1ven a str1ng S Ccons1sting of N characters.");
        expected = 11;
        expect(actual).toBe(expected);
    });
    test("Function accepts words with no letters", () => {
        let actual = longestPassword("0")
        let expected = 1;
        expect(actual).toBe(expected);
        actual = longestPassword("3141 592 653589793");
        expected = 9;
        expect(actual).toBe(expected);
    });
});