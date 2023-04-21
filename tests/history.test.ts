import { History } from "../classes/History/History";

describe("History", () => {
  let history: History;

  beforeEach(() => {
    history = new History();
  });

  it("should create an instance of History", () => {
    expect(history).toBeDefined();
  });

  it("should add new history to the list", () => {
    const newHistory: string = "Player chose Rock, Computer chose Paper";
    history.addHistory(newHistory);
    expect(history.getHistory()).toContain(newHistory);
  });

  it("should display all history", () => {
    const consoleSpy = jest.spyOn(console, "log");
    const history1: string = "Player chose Rock, Computer chose Scissors";
    history.addHistory(history1);
    history.displayHistory();
    expect(consoleSpy).toHaveBeenCalledWith(history1);
    consoleSpy.mockRestore();
  });
});
