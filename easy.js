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

exports.firstUnique = (A) => {
    if (A.length === 1) return A[0];
    let first = -1;
    let itemCounts = {};
    let uniqueIndexes = [];
    for (let i = 0; i < A.length; i++) {
        if (!itemCounts.hasOwnProperty(A[i])) {
            itemCounts[A[i]] = [i]
        } else {
            itemCounts[A[i]].push(i);
        }
    }
    for (item in itemCounts) {
        if (itemCounts[item].length === 1) {
            uniqueIndexes.push(itemCounts[item][0]);
        }
    }
    if (uniqueIndexes.length > 0) {
        uniqueIndexes.sort(function(a,b){return a - b})
        first = A[uniqueIndexes[0]];
    }
    return first;
};

exports.strSymmetryPoint = (S) => {
    if (S.length === 1) return 0;
    
    let noIndex = -1;
    if (S.length % 2 === 0) return noIndex;

    const midIndex = Math.floor(S.length / 2);
    for (let i = midIndex - 1; i >= 0; i--) {
        let checkOne = i;
        let checkTwo = S.length - 1 - i;
        if (S.charAt(checkOne) !== S.charAt(checkTwo)) return noIndex;
    }
    return midIndex;
};