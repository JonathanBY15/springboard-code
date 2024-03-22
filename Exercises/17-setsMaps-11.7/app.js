// hasDuplicate([1,3,2,1]) // true
// hasDuplicate([1,5,-1,4]) // false


function hasDuplicate(arr) {
    const newSet = new Set(arr);
    return arr.length !== newSet.length;
}

// vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Colt') // Map { 'o' => 1 }

function vowelCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const vowelMap = new Map();
    for (let letter of str) {
        if (vowels.includes(letter)) {
            if (!vowelMap.has(letter)) {
                vowelMap.set(letter, 1);
            }
            else {
                vowelMap.set(letter, vowelMap.get(letter) + 1);
            }
        }
    }
    return vowelMap;
}

