function sameFrequency(num1, num2) {
    const countDigits = (num) => {
        const freq = {};
        const strNum = num.toString();
        
        for (let char of strNum) {
            freq[char] = (freq[char] || 0) + 1;
        }
        
        return freq;
    };

    const freq1 = countDigits(num1);
    const freq2 = countDigits(num2);

    // Compare frequency objects
    const keys1 = Object.keys(freq1);
    const keys2 = Object.keys(freq2);

    if (keys1.length !== keys2.length) return false; // Different number of unique digits

    for (let key of keys1) {
        if (freq1[key] !== freq2[key]) return false; // Mismatched frequencies
    }

    return true; // Frequencies match
}
