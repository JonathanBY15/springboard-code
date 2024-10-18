// Function to merge two sorted arrays
function merge(arr1, arr2) {
    const merged = [];
    let i = 0; // Pointer for arr1
    let j = 0; // Pointer for arr2

    // Merge the two arrays
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }

    // If there are remaining elements in arr1, add them
    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }

    // If there are remaining elements in arr2, add them
    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }

    return merged;
}

// Function to perform merge sort
function mergeSort(arr) {
    // Base case: an array of zero or one element is sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Find the midpoint of the array
    const mid = Math.floor(arr.length / 2);
    // Recursively sort the left half and right half
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    // Merge the sorted halves
    return merge(left, right);
}

// Exporting the functions
module.exports = { merge, mergeSort };
