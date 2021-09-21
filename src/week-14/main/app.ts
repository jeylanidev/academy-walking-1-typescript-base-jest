import { TransactionHistory } from "./history";

export class App {
  execute() {
    const history = new TransactionHistory();
    const bank = new Bank(0, history);
    console.log("Date || Amount || Balance");
    bank.deposit(1000);
    bank.withdraw(500);
    bank.printHistory();
  }
}

class Bank {
  private balance: number;
  private transactionHistory: TransactionHistory;

  constructor(amount: number = 0, history: TransactionHistory) {
    this.balance = amount;
    this.transactionHistory = history;
  }

  deposit(amount: number): number {
    this.balance += amount;
    this.transactionHistory.addTransactionToHistory({ date: "10/01/2021", amount: `${amount}`, balance: `${this.balance}` });
    return this.balance;
  }

  withdraw(amount: number): number {
    this.balance -= amount;
    this.transactionHistory.addTransactionToHistory({ date: "10/02/2021", amount: `-${amount}`, balance: `${this.balance}` })
    return this.balance;
  }

  printHistory(): void {
    const history = this.transactionHistory.getHistory();

    history.forEach(h => {
      console.log(`${h.date} || ${h.amount} || ${h.balance}`)
    })
  }
}


