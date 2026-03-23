class BankAccount {

    public readonly id: number;
    public name: string;
    private _balance: number;
    protected _balance2: number; // protected meaning only avilable in extends inheritence

    constructor (id: number, name: string, _balance: number) {
        this.id = id;
        this.name= name;
        this._balance= _balance;
        this._balance2 = _balance;
    }


    public getBalance () {
        return this._balance;
    }

    public addMoney (amount: number) {
        this._balance = this._balance + amount
    }

    private withdrawMoney (amount: number) {
        this._balance = this._balance - amount;
    }

    getHiddenMethod (a: number) {
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