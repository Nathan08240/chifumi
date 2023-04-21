import * as colors from "colors";
import { Game } from "./classes/Game/Game";

colors.enable();
const game = new Game();
console.log(game.play());
