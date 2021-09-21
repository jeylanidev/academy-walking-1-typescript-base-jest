import { Bank } from "./bank";

export class App {
  private bank: Bank;
  constructor(bank: Bank) {
    this.bank = bank;
  }

  execute() {
    this.bank.deposit(1000);
    this.bank.withdraw(500);
    this.bank.printHistory();
  }
}




