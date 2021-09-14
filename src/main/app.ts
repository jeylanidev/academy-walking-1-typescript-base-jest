import { Bank } from "./bank";
import {TransactionHistory} from "./history";

export class App {

  bank: Bank;

  constructor() {
    const transactionHistory = new TransactionHistory();
    this.bank = new Bank(transactionHistory);
  }

  execute() {
    this.bank.printStatement();
  }
}
