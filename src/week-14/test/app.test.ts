import { App } from "../main/app";


describe("Bank", () => {
  const consoleLog = jest.spyOn(console, "log").mockImplementation();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should print off the header with the correct titles", () => {
    const app = new App();
    app.execute();
    expect(consoleLog).toHaveBeenCalledWith("Date || Amount || Balance");
  });

  it("should make initial desposit and print balance", () => {
    const app = new App();
    app.execute();

    expect(consoleLog).toHaveBeenCalledWith("10/01/2012 || 1000 || 1000");
  });
});
