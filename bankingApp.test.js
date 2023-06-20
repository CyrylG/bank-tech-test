const BankingApp = require('./bankingApp');

describe("BankingApp class", () => {
    it("constructs with no transactions", () => {
        const app = new BankingApp();
        expect(app.transactions).toEqual([]);
    })
})