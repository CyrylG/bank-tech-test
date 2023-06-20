const BankingApp = require('./bankingApp');

describe("BankingApp class", () => {
    it("constructs with no transactions", () => {
        const account = new BankingApp();
        expect(account.transactions).toEqual([]);
    })

    it("shows balance of 0 with no deposits added", () => {
        const account = new BankingApp();
        expect(account.balance).toEqual(0);
    })

    it("deposits money using deposit method", () => {
        const account = new BankingApp();
        account.deposit(100);
        expect(account.balance).toEqual(100);
    })

    it("shows balance after 2 deposits", () => {
        const account = new BankingApp();
        account.deposit(100);
        account.deposit(300);
        expect(account.balance).toEqual(400);
    })

    it("shows balance after a deposit and withdrawal", () => {
        const account = new BankingApp();
        account.deposit(100);
        account.withdraw(50);
        expect(account.balance).toEqual(50);
    })
})