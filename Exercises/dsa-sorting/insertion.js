function insertionSort(arr) {
    // Start from the second element
    for (let i = 1; i < arr.length; i++) {
        const currentValue = arr[i]; // Element to be inserted
        let j = i - 1; // Pointer for the sorted portion

        // Move elements of the sorted portion that are greater than currentValue
        while (j >= 0 && arr[j] > currentValue) {
            arr[j + 1] = arr[j]; // Shift element to the right
            j--;
        }

        // Place currentValue in its correct position
        arr[j + 1] = currentValue;
    }
    
    return arr;
}

module.exports = insertionSort;
