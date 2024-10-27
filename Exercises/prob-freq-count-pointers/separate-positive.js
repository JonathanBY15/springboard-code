function separatePositive(arr) {
    let left = 0; // Pointer for placing positive numbers

    for (let right = 0; right < arr.length; right++) {
        if (arr[right] > 0) {
            // Swap if the current number is positive
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++; // Move the left pointer to the right
        }
    }

    return arr; // Return the modified array
}
