function constructNote(message, letters) {
    const messageFreq = {};
    const lettersFreq = {};

    // Count frequency of characters in the message
    for (let char of message) {
        messageFreq[char] = (messageFreq[char] || 0) + 1;
    }

    // Count frequency of characters in the letters
    for (let char of letters) {
        lettersFreq[char] = (lettersFreq[char] || 0) + 1;
    }

    // Check if we have enough letters to build the message
    for (let char in messageFreq) {
        if (!lettersFreq[char] || lettersFreq[char] < messageFreq[char]) {
            return false;
        }
    }

    return true;
}
