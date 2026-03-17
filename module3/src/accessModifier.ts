// Access Modifier

class BackAccount {
    public readonly id: number;
    public name: string;
    private _balance: number;  // convention if we use private property then variable name should start with _


    constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this._balance = balance;

    }

    addMoney (amount: number) {
        this._balance = this._balance + amount;
    }

    withdrawMoney (amount: number) {
        this._balance = this._balance - amount;
    }

    getBalance () {
        return this._balance;
    }


}


const accountHolder1 = new BackAccount(1, "Akash", 5);

accountHolder1.addMoney(500);
accountHolder1.withdrawMoney(20);

console.log(accountHolder1.getBalance());

