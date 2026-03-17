"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BankAccount {
    id;
    accountName;
    _balance;
    constructor(id, accountName, balance) {
        this.id = id;
        this.accountName = accountName;
        this._balance = balance;
    }
    // Using getter
    get balance() {
        return this._balance;
    }
    set deposit(amount) {
        this._balance = this._balance + amount;
    }
}
const accountHolder1 = new BankAccount(1, "Akash Kumar Saha", 500);
accountHolder1.deposit = 150;
const myBalance = accountHolder1.balance; // using like property not function;
console.log(myBalance);
//# sourceMappingURL=getterAndSetter.js.map