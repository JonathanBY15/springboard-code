function twoArrayObject(keys, values) {
    const result = {};

    // Loop through the keys array
    for (let i = 0; i < keys.length; i++) {
        // Assign value if available, otherwise assign null
        result[keys[i]] = values[i] !== undefined ? values[i] : null;
    }

    return result;
}
