import { Choice } from "../enums/Choice";
import { Computer } from "../classes/Player/Computer";

describe("Computer", () => {
  let computer: Computer;

  beforeEach(() => {
    computer = new Computer();
  });

  it("should create an instance", () => {
    expect(computer).toBeDefined();
  });

  it("should have a choice", () => {
    expect(computer.choose).toBeDefined();
  });

  it("should choose a valid option", () => {
    const validChoices = Object.values(Choice);
    const computerChoice = computer.choose();
    expect(validChoices).toContain(computerChoice);
  });

  it("should update its choice after choosing", () => {
    const initialChoice = computer.getChoice();
    computer.choose();
    const newChoice = computer.getChoice();
    expect(newChoice).not.toBe(initialChoice);
  });
});
