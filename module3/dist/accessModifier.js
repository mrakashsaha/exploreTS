"use strict";
// Access Modifier
Object.defineProperty(exports, "__esModule", { value: true });
class BackAccount {
    id;
    name;
    balance;
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    addMoney(amount) {
        this.balance = this.balance + amount;
    }
    withdrawMoney(amount) {
        this.balance = this.balance - amount;
    }
    getBalance() {
        return this.balance;
    }
}
const accountHolder1 = new BackAccount(1, "Akash", 5);
accountHolder1.addMoney(500);
accountHolder1.withdrawMoney(20);
console.log(accountHolder1.getBalance());
//# sourceMappingURL=accessModifier.js.map