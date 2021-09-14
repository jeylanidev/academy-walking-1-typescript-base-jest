import { History } from "./history";

export interface AccountService {
  deposit: (amount: number) => void;
  withdraw: (amount: number) => void;
  printStatement: () => void;
}

export class Bank implements AccountService{

  constructor(private transactionHistory: History) {

  }

  deposit(amount: number): void {
    throw new Error("");
  }

  withdraw(amount: number): void {
    throw new Error("");
  }
  printStatement() {
    console.log("Date || Amount || Balance");

    const history = this.transactionHistory.getHistory();

    history.forEach(h => {
      console.log(`${h.date} || ${h.amount} || ${h.balance}`)
    })
  }
}
