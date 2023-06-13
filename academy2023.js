exports.commonLetter = (S) => {
    let indexOne = null;
    let indexTwo = null;
    let matchLetter = "";
    let position = null;
    let matchObj = {};
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    alphabet.forEach((letter) => {
        matchObj[letter] = [];
    })
    for (let i = 0; i < S.length; i++) {
        let string = S[i];
        let strArray = string.split("");
        for (let j = 0; j < strArray.length; j++) {
            matchObj[strArray[j]].push(j);
        }
    }
    for (const letter in matchObj) {
        let iArray = matchObj[letter];
        let findDuplicates = arr => arr.filter((item, index) => {
            return arr.indexOf(item) !== index;
        });
        if (findDuplicates(iArray).length > 0) {
            matchLetter = letter;
            position = findDuplicates(iArray)[0];
        };
    }
    if (position === null) return [];
    let i = 0;
    while (indexOne === null && i < S.length) {
        let string = S[i];
        if (string[position] === matchLetter) {
            S.splice(i, 1);
            indexOne = i;
        }
        i++;
    }
    let j = 0;
    while (indexTwo === null && j < S.length) {
        let string = S[j];
        if (string[position] === matchLetter) {
            indexTwo = j + 1;
        }
        j++;
    }
    return [indexOne, indexTwo, position];
};

exports.checkRectangle = (moves) => {
    const pointObj = {
        "<": 0,
        ">": 0,
        "^": 0,
        "v": 0
    }
    const strArr = moves.split("");
    let changeDirection = 0;
    for (let i = 0; i < strArr.length; i++) {
        pointObj[strArr[i]]++;
        if (strArr[i] !== strArr[i + 1]) changeDirection++;
    }
    if (changeDirection < 3 || changeDirection > 5) return false;
    return pointObj["<"] === pointObj[">"] && pointObj["^"] === pointObj["v"];
};