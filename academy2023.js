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
    if (position !== null) {
        return [indexOne, indexTwo, position];
    } else {
        return []
    }
};