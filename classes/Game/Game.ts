import { Computer } from "../Player/Computer";
import { Choice } from "../../enums/Choice";
import { Player } from "../Player/Player";
import { History } from "../History/History";

const MAX_POINTS = 2;

class Game {
  private pointHistory = new History();
  private choiceHistory = new History();

  checkScore = (player1: Player, player2: Player): boolean => {
    return (
      player1.getPoints() === MAX_POINTS || player2.getPoints() === MAX_POINTS
    );
  };

  displayScore = (player1: Player, player2: Player) => {
    console.log(
      `Player 1: ${player1.getChoice()} `.bgRed.black +
        ` Player 2: ${player2.getChoice()}`.bgBlue.black
    );
    console.log(
      `Player 1: ${player1.getPoints()} `.bgRed.black +
        ` Player 2: ${player2.getPoints()}`.bgBlue.black
    );
    console.log("");
  };

  play() {
    console.log("Welcome to Rock Paper Scissors!".bgGreen.black.italic.bold);
    console.log("");

    const computerPlayer1 = new Computer();
    const computerPlayer2 = new Computer();

    while (!this.checkScore(computerPlayer1, computerPlayer2)) {
      const choice1: Choice = computerPlayer1.choose();
      const choice2: Choice = computerPlayer2.choose();

      if (choice1 === choice2) {
        console.log("It's a tie!".bgGreen.black.bold);
        this.choiceHistory.addHistory(
          `Player 1: ${computerPlayer1.getChoice()} | Player 2: ${computerPlayer2.getChoice()} -> Tie`
        );
      } else if (
        (choice1 === Choice.ROCK && choice2 === Choice.SCISSORS) ||
        (choice1 === Choice.SCISSORS && choice2 === Choice.PAPER) ||
        (choice1 === Choice.PAPER && choice2 === Choice.ROCK)
      ) {
        console.log("Player 1 wins!".bgRed.black.bold);
        computerPlayer1.addPoint();
        this.choiceHistory.addHistory(
          `Player 1: ${computerPlayer1.getChoice()} | Player 2: ${computerPlayer2.getChoice()} -> Winner: Player 1`
        );
      } else {
        console.log("Player 2 wins!".bgBlue.black.bold);
        computerPlayer2.addPoint();
        this.choiceHistory.addHistory(
          `Player 1: ${computerPlayer1.getChoice()} | Player 2: ${computerPlayer2.getChoice()} -> Winner: Player 2`
        );
      }

      this.pointHistory.addHistory(
        `Player 1: ${computerPlayer1.getPoints()} | Player 2: ${computerPlayer2.getPoints()}`
      );

      this.displayScore(computerPlayer1, computerPlayer2);
    }

    console.log("History of choices:".bgGreen.black.bold);
    this.choiceHistory.displayHistory();
    console.log("");

    console.log("History of points:".bgGreen.black.bold);
    this.pointHistory.displayHistory();
    console.log("");

    if (computerPlayer1.getPoints() === MAX_POINTS) {
      console.log("Player 1 wins the game!".bgRed.black);
    }

    console.log("Player 2 wins the game!".bgBlue.black);
  }
}

export { Game };
