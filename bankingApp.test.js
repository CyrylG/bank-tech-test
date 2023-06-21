const BankingApp = require('./bankingApp');

describe("BankingApp class", () => {
    it("constructs with no transactions", () => {
        const account = new BankingApp();
        expect(account.transactions).toEqual([]);
    })

    it("shows balance of 0 with no deposits added", () => {
        const account = new BankingApp();
        expect(account.checkBalance()).toEqual(0);
    })

    it("deposits money using deposit method", () => {
        const account = new BankingApp();
        account.deposit(100);
        expect(account.checkBalance()).toEqual(100);
    })

    it("shows balance after 2 deposits", () => {
        const account = new BankingApp();
        account.deposit(100);
        account.deposit(300);
        expect(account.checkBalance()).toEqual(400);
    })

    it("shows balance after a deposit and withdrawal", () => {
        const account = new BankingApp();
        account.deposit(100);
        account.withdraw(50);
        expect(account.checkBalance()).toEqual(50);
    })

    it("throws error if balance goes below 0", () => {
        const account = new BankingApp();
        account.deposit(100);
        expect(() => account.withdraw(200)).toThrow("Cannot withdraw more money than you have");
    })

    it("date is added on deposit", () => {
        const account = new BankingApp();
        account.deposit(100, "2019-01-01");
        expect(account.transactions[0].date).toEqual("2019-01-01");
    })

    it("date is added on withdrawal", () => {
        const account = new BankingApp();
        account.deposit(100, "2018-01-01");
        account.withdraw(100, "2019-01-01");
        expect(account.transactions[1].date).toEqual("2019-01-01");
    })
})
