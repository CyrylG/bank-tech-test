# bank-tech-test

# Setup our environment to use node latest version:

$ nvm use node

# Initilaise the NPM project:

$ npm init -y

# Add jest package to our project:

$ npm add jest

# Run our tests:

$ jest

# To run using REPL follos these lines of code:

node

const BankingApp = require('./BankingApp');

const account = new BankingApp();

account.deposit(1000, "10/01/2023");

account.deposit(2000, "13/01/2023");

account.withdraw(500, "14/01/2023");

account.printStatement();
