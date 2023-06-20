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