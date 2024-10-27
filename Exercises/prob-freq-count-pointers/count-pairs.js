// add whatever parameters you deem necessary
function countPairs(arr, target) {
    const seen = new Set();
    let count = 0;

    for (let num of arr) {
        const complement = target - num;
        if (seen.has(complement)) {
            count++; // A valid pair found
        }
        seen.add(num); // Add the current number to the set
    }

    return count;
}

