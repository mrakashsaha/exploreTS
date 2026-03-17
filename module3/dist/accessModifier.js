"use strict";
// Access Modifier
Object.defineProperty(exports, "__esModule", { value: true });
class BackAccount {
    id;
    name;
    _balance; // convention if we use private property then variable name should start with _
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    addMoney(amount) {
        this._balance = this._balance + amount;
    }
    withdrawMoney(amount) {
        this._balance = this._balance - amount;
    }
    getBalance() {
        return this._balance;
    }
}
const accountHolder1 = new BackAccount(1, "Akash", 5);
accountHolder1.addMoney(500);
accountHolder1.withdrawMoney(20);
console.log(accountHolder1.getBalance());
//# sourceMappingURL=accessModifier.js.map