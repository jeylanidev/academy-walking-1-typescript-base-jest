import { App } from "../main2/app";

const consoleLog = jest.spyOn(console, "log").mockImplementation();

describe("Bank", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should print off the header with the correct titles", () => {
    const app = new App();
    app.execute();
    expect(consoleLog).toHaveBeenCalledWith("Date || Amount || Balance");
  });
});
