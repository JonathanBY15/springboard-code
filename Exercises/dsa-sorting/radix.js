/*
 * radixSort accepts an array of numbers and sorts them in ascending order.
 */
function getMax(arr) {
    return Math.max(...arr); // Get the maximum number in the array
}

function countingSortForRadix(arr, exp) {
    const n = arr.length;
    const output = new Array(n); // Output array
    const count = new Array(10).fill(0); // Count array for digits 0-9

    // Count occurrences of each digit
    for (let i = 0; i < n; i++) {
        const digit = Math.floor(arr[i] / exp) % 10; // Get the digit at the current place value
        count[digit]++;
    }

    // Change count[i] so that it now contains the actual position of this digit in output[]
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    // Build the output array
    for (let i = n - 1; i >= 0; i--) {
        const digit = Math.floor(arr[i] / exp) % 10;
        output[count[digit] - 1] = arr[i];
        count[digit]--;
    }

    // Copy the output array to arr[], so that arr[] now contains sorted numbers
    for (let i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}

function radixSort(arr) {
    const max = getMax(arr); // Get the maximum number to know the number of digits

    // Perform counting sort for every digit
    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        countingSortForRadix(arr, exp);
    }

    return arr; // Return the sorted array
}

module.exports = radixSort;
