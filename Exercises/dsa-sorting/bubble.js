function bubbleSort(arr) {
    const n = arr.length;
    let swapped;

    // Loop to control the number of passes
    for (let i = 0; i < n - 1; i++) {
        swapped = false; // Reset swapped flag for this pass

        // Loop through the array, comparing adjacent elements
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap the elements if they are in the wrong order
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true; // Set the swapped flag
            }
        }

        // If no elements were swapped, the array is sorted
        if (!swapped) break;
    }

    return arr;
}

module.exports = bubbleSort;
