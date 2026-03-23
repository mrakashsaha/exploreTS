"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BankAccount {
    id;
    name;
    _balance;
    _balance2; // protected meaning only avilable in extends inheritence
    constructor(id, name, _balance) {
        this.id = id;
        this.name = name;
        this._balance = _balance;
        this._balance2 = _balance;
    }
    getBalance() {
        return this._balance;
    }
    addMoney(amount) {
        this._balance = this._balance + amount;
    }
    withdrawMoney(amount) {
        this._balance = this._balance - amount;
    }
    getHiddenMethod(a) {
        return this.withdrawMoney(a);
    }
}
class StudentAccount extends BankAccount {
    test() {
        // this._balance2 here avilable
    }
}
const bankUser1 = new BankAccount(1, "Akash", 45);
const value = bankUser1.getBalance();
console.log(value);
bankUser1.addMoney(50);
bankUser1.getHiddenMethod(100);
// bankUser1._balance2 not avialable due to protected
console.log(bankUser1.getBalance());
//# sourceMappingURL=encapsulation.js.map