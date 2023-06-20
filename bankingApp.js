class BankingApp {
    constructor() {
        this.transactions = [];
        this.balance = 0;
    }

    balance() {
        return this.balance;
    }

    deposit(amount, date) {
        this.balance += amount;
        this.transactions.push({
            amount: amount,
            date: date,
            type: "deposit",
            balance: this.balance
        })
    }

    withdraw(amount, date) {
        this.balance -= amount;
        this.transactions.push({
            amount: amount,
            date: date,
            type: "withdraw",
            balance: this.balance
        })
    }
}

module.exports = BankingApp;