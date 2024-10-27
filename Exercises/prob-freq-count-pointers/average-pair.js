function averagePair(arr, targetAvg) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const currentAvg = (arr[left] + arr[right]) / 2;

        if (currentAvg === targetAvg) {
            return true;
        } else if (currentAvg < targetAvg) {
            left++; // Move left pointer to increase the average
        } else {
            right--; // Move right pointer to decrease the average
        }
    }

    return false; // No pair found
}
