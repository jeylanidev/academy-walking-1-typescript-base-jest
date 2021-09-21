export class App {
  execute() {
    const bank = new Bank();
    console.log("Date || Amount || Balance");
    console.log(`10/01/2021 || 1000 || ${bank.deposit(1000)}`);
  }
}

class Bank {
  private balance: number;
  constructor(amount: number = 0) {
    this.balance = amount;
  }
  deposit(amount: number): number {
    this.balance += amount;
    return this.balance;
  }
}
