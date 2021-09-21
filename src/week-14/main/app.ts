import { Bank } from "./bank";

export class App {
  private bank: Bank;
  constructor(bank: Bank) {
    this.bank = bank;
  }

  execute() {
    this.bank.printHistory();
  }
}




