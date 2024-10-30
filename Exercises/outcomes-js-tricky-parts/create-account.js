function createAccount(pin, amount) {
    let currentPin = pin;
    let balance = amount;

    function validatePin(inputPin) {
        return inputPin === currentPin;
    }

    return {
        checkBalance(inputPin) {
            if (!validatePin(inputPin)) return "Invalid PIN.";
            return `Current balance: $${balance}.`;
        },
        
        deposit(inputPin, depositAmount) {
            if (!validatePin(inputPin)) return "Invalid PIN.";
            balance += depositAmount;
            return `Successfully deposited $${depositAmount}. Current balance: $${balance}.`;
        },
        
        withdraw(inputPin, withdrawalAmount) {
            if (!validatePin(inputPin)) return "Invalid PIN.";
            if (withdrawalAmount > balance) {
                return "Withdrawal amount exceeds account balance. Transaction cancelled.";
            }
            balance -= withdrawalAmount;
            return `Successfully withdrew $${withdrawalAmount}. Current balance: $${balance}.`;
        },
        
        changePin(inputPin, newPin) {
            if (!validatePin(inputPin)) return "Invalid PIN.";
            currentPin = newPin;
            return "PIN successfully changed!";
        }
    };
}

module.exports = { createAccount };
