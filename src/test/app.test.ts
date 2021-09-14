import { App } from "../main/app";
import { History } from "../main/history";
import { Bank } from "../main/bank";

describe("App", () => {
  const consoleLog = jest.spyOn(console, "log").mockImplementation();
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("when the class is invoked", () => {
    it("display the headers with the correct titles", () => {
      const app = new App();
      app.execute();
      expect(consoleLog).toHaveBeenCalledWith("Date || Amount || Balance");
    });

    it("should display the history of transactions", () => {
      const mockTransactionHistory: History = {
        getHistory: jest
          .fn()
          .mockReturnValue([
            { date: "10/01/2012", amount: 1000, balance: 1000 },
          ]),
        addTransactionToHistory: jest.fn(),
      };

      const bank = new Bank(mockTransactionHistory);
      bank.printStatement();
      expect(consoleLog).toHaveBeenCalledWith("10/01/2012 || 1000 || 1000");
    });
  });

  describe("when the user deposits cash", () => {
    it("should display the transaction history including the deposit and leftover amount", () => {
      const app = new App();
      app.execute();

      expect(consoleLog).toHaveBeenLastCalledWith("10/01/2012 || 1000 || 1000");
      expect(consoleLog).toHaveBeenLastCalledWith("11/01/2012 || 2000 || 3000");
    });
  });
});
