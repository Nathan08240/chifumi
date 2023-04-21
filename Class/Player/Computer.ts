import { Choice } from "../../Enum/Choice";
import { Player } from "./Player";

export class Computer extends Player {
  private choice: Choice = Choice.ROCK;

  constructor() {
    super();
  }

  choose(): Choice {
    const choices = Object.values(Choice);
    const randomIndex = Math.floor(Math.random() * choices.length);
    this.choice = choices[randomIndex];
    return this.choice;
  }

  override getChoice(): Choice {
    return this.choice;
  }
}
