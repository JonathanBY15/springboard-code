function isSubsequence(s1, s2) {
    let i = 0; // Pointer for s1
    let j = 0; // Pointer for s2

    while (j < s2.length) {
        // Check for a match
        if (s1[i] === s2[j]) {
            i++; // Move to the next character in s1
        }
        // If we've found all characters in s1, break early
        if (i === s1.length) {
            return true;
        }
        j++; // Always move to the next character in s2
    }

    return i === s1.length; // Return true if all characters in s1 were found
}
