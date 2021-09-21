import { App } from "../main/app";
import { History } from "../main/history";
import { Bank } from "../main/bank";

describe("Bank", () => {
  const consoleLog = jest.spyOn(console, "log").mockImplementation();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should print off the header with the correct titles", () => {
    const mockTransactionHistory: History = {
      getHistory: jest.fn(),
      addTransactionToHistory: jest.fn()
    };

    const app = new App(new Bank(0, mockTransactionHistory));
    app.execute();
    expect(consoleLog).toHaveBeenCalledWith(expect.stringContaining("Date || Amount || Balance"));
  });

  it("should make initial deposit and print balance", () => {
    const mockTransactionHistory: History = {
      getHistory: jest.fn().mockReturnValue([
        { date: "10/01/2021", amount: "1000", balance: "1000"}
      ]),
      addTransactionToHistory: jest.fn()
    };

    const app = new App(new Bank(0, mockTransactionHistory));
    app.execute();

    expect(consoleLog).toHaveBeenCalledWith(expect.stringContaining("10/01/2021 || 1000 || 1000"));
  });

  it("should add transaction to history when deposit is made", () => {
    const mockAddTransactionToHistory = jest.fn();
    const mockTransactionHistory: History = {
      getHistory: jest.fn().mockReturnValue([
        { date: "10/01/2021", amount: "1000", balance: "1000"}
      ]),
      addTransactionToHistory: mockAddTransactionToHistory
    };

    const app = new App(new Bank(0, mockTransactionHistory));
    app.execute();

    expect(mockAddTransactionToHistory).toBeCalled();
  });

  it("should make withdrawal and print leftover balance", () => {
    const mockTransactionHistory: History = {
      getHistory: jest.fn().mockReturnValue([
        { date: "10/02/2021", amount: "-500", balance: "500"}
      ]),
      addTransactionToHistory: jest.fn()
    };

    const app = new App(new Bank(0, mockTransactionHistory));
    app.execute();

    expect(consoleLog).toHaveBeenCalledWith(expect.stringContaining("10/02/2021 || -500 || 500"));
  });

  it("should add transaction to history when withdraw is made", () => {
    const mockAddTransactionToHistory = jest.fn();
    const mockTransactionHistory: History = {
      getHistory: jest.fn().mockReturnValue([
        { date: "10/01/2021", amount: "1000", balance: "1000"}
      ]),
      addTransactionToHistory: mockAddTransactionToHistory
    };

    const app = new App(new Bank(0, mockTransactionHistory));
    app.execute();

    expect(mockAddTransactionToHistory).toBeCalled();
  });
});
