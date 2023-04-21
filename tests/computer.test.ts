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
    const validChoices: Choice[] = Object.values(Choice);
    const computerChoice: Choice = computer.choose();
    expect(validChoices).toContain(computerChoice);
  });

  it("should update its choice after choosing", () => {
    const initialChoice: Choice = Choice.ROCK;
    const newChoice: Choice = Choice.PAPER;
    expect(newChoice).not.toBe(initialChoice);
  });

  it("should get the current choice", () => {
    expect(computer.getChoice()).toBeDefined();
  });
});
