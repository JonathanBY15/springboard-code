function countZeroes(arr) {
    let left = 0;
    let right = arr.length - 1;

    // Binary search to find the first occurrence of 0
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        // If mid is 0, move right to find the first 0
        if (arr[mid] === 0) {
            right = mid - 1;
        }
        // If mid is 1, move left
        else {
            left = mid + 1;
        }
    }

    // Number of zeroes is the index where the first 0 is found until the end of the array
    return arr.length - left;
}

module.exports = countZeroes