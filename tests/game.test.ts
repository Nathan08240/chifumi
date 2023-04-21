import { Game } from "../classes/Game/Game";
import { Computer } from "../classes/Player/Computer";
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
    const result = game.play();
    expect(result).toMatch(/Player [1-2] wins the game!/);
  });
});
