function selectionSort(arr) {
    const n = arr.length;

    // Loop through each element in the array
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i; // Assume the minimum is the first element in the unsorted portion

        // Find the index of the smallest element in the unsorted portion
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j; // Update minIndex if a smaller element is found
            }
        }

        // Swap the found minimum element with the first element of the unsorted portion
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Swap elements
        }
    }

    return arr;
}

module.exports = selectionSort;
