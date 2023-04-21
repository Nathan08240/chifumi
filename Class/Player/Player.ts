import { Choice } from "../../Enum/Choice";

export abstract class Player {
  abstract choose(): Choice;
  protected point: number = 0;

  public addPoint(): void {
    this.point++;
  }

  public getPoints(): number {
    return this.point;
  }

  public resetPoints(): void {
    this.point = 0;
  }

  public getChoice(): Choice {
    return this.choose();
  }
}
