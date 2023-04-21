import { Choice } from "../../enums/Choice";
import { Player } from "./Player";

export class Computer extends Player {
  private choice: Choice = Choice.ROCK;

  constructor() {
    super();
  }

  override choose(): Choice {
    const choices = Object.values(Choice);
    const randomIndex: number = Math.floor(Math.random() * choices.length);
    this.choice = choices[randomIndex];
    return this.choice;
  }

  override getChoice(): Choice {
    return this.choice;
  }
}
