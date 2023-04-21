import * as colors from "colors";
import { Game } from "./Class/Game/Game";

colors.enable();
const game = new Game();
console.log(game.play());
