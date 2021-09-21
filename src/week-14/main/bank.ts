import { History } from "./history";

export class Bank {
  private balance: number;
  private transactionHistory: History;

  constructor(amount: number = 0, history: History) {
    this.balance = amount;
    this.transactionHistory = history;
  }

  deposit(amount: number): number {
    this.balance += amount;
    this.transactionHistory.addTransactionToHistory({
      date: "10/01/2021",
      amount: `${amount}`,
      balance: `${this.balance}`,
    });
    return this.balance;
  }

  withdraw(amount: number): number {
    this.balance -= amount;
    this.transactionHistory.addTransactionToHistory({
      date: "10/02/2021",
      amount: `-${amount}`,
      balance: `${this.balance}`,
    });
    return this.balance;
  }

  printHistory(): void {
    const history = this.transactionHistory.getHistory();
    let fullHistory: string = "Date || Amount || Balance\n";
    if (history) {
      history.reverse();
      history.forEach((h) => {
        fullHistory += `${h.date} || ${h.amount} || ${h.balance}\n`;
      });
    }
    console.log(fullHistory);
  }
}
