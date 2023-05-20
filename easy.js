exports.longestPassword = (S) => {
    let longest = -1;
    let wordArr = S.split(" ");
    if (!wordArr) wordArr = [S];
    wordArr.forEach((word) => {
        if (/^[a-zA-Z0-9]*$/.test(word) && word.length > longest) {
            let numbers = word.match(/[0-9]/g);
            let letters = word.match(/[a-zA-Z]/g);
            if (numbers && numbers.length % 2 === 1) {
                if (!letters) {
                    longest = word.length;
                } else if (letters.length % 2 === 0) {
                    longest = word.length;
                };
            };
        };
    });
    return longest;
};