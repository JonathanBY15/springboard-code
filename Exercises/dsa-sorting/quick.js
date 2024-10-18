/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/
function pivot(arr, start = 0, end = arr.length - 1) {
    const pivotValue = arr[start]; // Choose the first element as the pivot
    let leftIndex = start + 1; // Start from the second element
    let rightIndex = end; // Start from the last element

    while (leftIndex <= rightIndex) {
        // Move leftIndex to the right until a value greater than the pivot is found
        while (leftIndex <= rightIndex && arr[leftIndex] <= pivotValue) {
            leftIndex++;
        }
        // Move rightIndex to the left until a value less than the pivot is found
        while (leftIndex <= rightIndex && arr[rightIndex] > pivotValue) {
            rightIndex--;
        }
        // If leftIndex is still less than rightIndex, swap the elements
        if (leftIndex < rightIndex) {
            [arr[leftIndex], arr[rightIndex]] = [arr[rightIndex], arr[leftIndex]];
        }
    }

    // Swap the pivot value with the rightIndex element
    [arr[start], arr[rightIndex]] = [arr[rightIndex], arr[start]];

    return rightIndex; // Return the index of the pivot
}

/*
quickSort accepts an array, left index, and right index
*/
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        // Call pivot to partition the array
        const pivotIndex = pivot(arr, left, right);
        // Recursively sort the left and right subarrays
        quickSort(arr, left, pivotIndex - 1); // Sort the left side
        quickSort(arr, pivotIndex + 1, right); // Sort the right side
    }
    return arr; // Return the sorted array
}

module.exports = quickSort;
