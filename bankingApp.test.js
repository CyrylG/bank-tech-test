const BankingApp = require('./bankingApp');

describe("BankingApp class", () => {
    it("constructs with no transactions", () => {
        const account = new BankingApp();
        expect(account.transactions).toEqual([]);
    })

    it("deposits money using ", () => {
        const account = new BankingApp();
        account.deposit(100);
        expect(account.balance).toEqual(100);
    })
})