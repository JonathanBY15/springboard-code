function sortedFrequency(arr, target) {
    function findBound(arr, target, isFirst) {
        let left = 0;
        let right = arr.length - 1;
        let result = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] === target) {
                result = mid;
                if (isFirst) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    }

    const firstIndex = findBound(arr, target, true);
    const lastIndex = findBound(arr, target, false);

    if (firstIndex === -1 || lastIndex === -1) {
        return -1;
    }

    return lastIndex - firstIndex + 1;
}

module.exports = sortedFrequency