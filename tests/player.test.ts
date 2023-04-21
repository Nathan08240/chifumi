import { Player } from "../classes/Player/Player";
import { Choice } from "../enums/Choice";

class MockPlayer extends Player {
  choose(): Choice {
    return Choice.ROCK;
  }
}

describe("Player", () => {
  let player: Player;

  beforeEach(() => {
    player = new MockPlayer();
  });

  it("should have a choose method", () => {
    expect(player.choose).toBeDefined();
  });

  it("should add a point", () => {
    player.addPoint();
    expect(player.getPoints()).toBe(1);
  });

  it("should reset points", () => {
    player.addPoint();
    player.resetPoints();
    expect(player.getPoints()).toBe(0);
  });

  it("should get the current choice", () => {
    expect(player.getChoice()).toBe(Choice.ROCK);
  });
});
