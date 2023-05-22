const {
    longestPassword,
    firstUnique,
    strSymmetryPoint
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

let largeArr = [];
for (let i = 0; i < 50000; i++) {
    largeArr.push(i);
    largeArr.push(i);
}
largeArr.splice(50000, 1);

describe("FirstUnique", () => {
    test("Function returns a number", () => {
        const actual = firstUnique([1, 1]);
        const expected = -1;
        expect(actual).toBe(expected);
    });
    test("Function returns index of only unique in array", () => {
        const actual = firstUnique([1, 1, 2, 3, 3]);
        const expected = 2;
        expect(actual).toBe(expected);
    });
    test("Function returns lowest indexed number from multiple uniques", () => {
        const actual = firstUnique([1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9]);
        const expected = 4;
        expect(actual).toBe(expected);
    });
    test("Function works with large arrays", () => {
        const actual = firstUnique(largeArr);
        const expected = 25000;
        expect(actual).toBe(expected);
    });
    test("Function works with single arrays", () => {
        const actual = firstUnique([6]);
        const expected = 6;
        expect(actual).toBe(expected);
    });
});

describe("StrSymmetryPoint", () => {
    test("Function returns a number", () => {
        const actual = strSymmetryPoint([1, 2]);
        const expected = -1;
        expect(actual).toBe(expected);
    });
    test("Function returns 0 for single letter string", () => {
        const actual = strSymmetryPoint("N");
        const expected = 0;
        expect(actual).toBe(expected);
    });
    test("Function returns -1 for even length string", () => {
        const actual = strSymmetryPoint("No");
        const expected = -1;
        expect(actual).toBe(expected);
    });
    test("Function returns symmetry index in symmetrical strings", () => {
        let actual = strSymmetryPoint("racecar");
        let expected = 3;
        expect(actual).toBe(expected);
        actual = strSymmetryPoint("saippuakivikauppias");
        expected = 9;
        expect(actual).toBe(expected);
    });
    test("Function returns -1 if string is not symmetrical", () => {
        let actual = strSymmetryPoint("abc");
        let expected = -1;
        expect(actual).toBe(expected);
        actual = strSymmetryPoint("saippuakivikauppiax")
        expected = -1;
        expect(actual).toBe(expected);
    });
});