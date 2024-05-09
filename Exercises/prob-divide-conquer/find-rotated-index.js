function findRotatedIndex(arr, num) {
    // Function to find the index of the smallest element (pivot)
    function findPivot(arr) {
        let left = 0;
        let right = arr.length - 1;

        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] > arr[right]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        return left;
    }

    // Function to perform binary search on rotated array
    function binarySearch(arr, target, start, end) {
        let left = start;
        let right = end;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] === target) {
                return mid;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return -1;
    }

    // Find the pivot point
    const pivot = findPivot(arr);

    // If the target is greater than or equal to the first element, search left side of the pivot
    if (num >= arr[0]) {
        return binarySearch(arr, num, 0, pivot - 1);
    } else { // Otherwise, search right side of the pivot
        return binarySearch(arr, num, pivot, arr.length - 1);
    }
}

module.exports = findRotatedIndex