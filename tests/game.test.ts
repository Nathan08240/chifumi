import { Game } from "../classes/Game/Game";
import * as colors from "colors";
colors.enable();

describe("Game", () => {
  let game: Game;

  beforeEach(() => {
    game = new Game();
  });

  it("should create an instance", () => {
    expect(game).toBeDefined();
  });

  it("should play a game", () => {
    const consoleSpy = jest.spyOn(console, "log");
    game.play();
    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });
});
