class BankingApp {
    constructor() {
        this.transactions = [];
        this.balance = 0.00;
    }

    checkBalance() {
        return this.balance;
    }

    deposit(amount, date) {
        this.balance += amount;
        this.transactions.push({
            amount: amount.toFixed(2),
            date: date,
            type: "deposit",
            balance: this.balance.toFixed(2)
        })
    }

    withdraw(amount, date) {
        this.balance -= amount;
        console.log(this.balance)
        if (this.balance < 0) {
            throw new Error("Cannot withdraw more money than you have");
        }
        this.transactions.push({
            amount: amount.toFixed(2),
            date: date,
            type: "withdraw",
            balance: this.balance.toFixed(2)
        })
    }

    printStatement () {
        console.log("date || credit || debit || total")
        this.transactions.reverse().map((transaction) => {
            if (transaction.type === "deposit") {
                console.log(`${transaction.date} || ${transaction.amount} || || ${transaction.balance}`)
            } else {
                console.log(`${transaction.date} || || ${transaction.amount} || ${transaction.balance}`)
            }
        })
    }
}

module.exports = BankingApp;