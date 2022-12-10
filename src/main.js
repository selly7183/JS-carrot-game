"use strict";
import PopUp from "./popup.js";
import GameBuilder, { Reason } from "./game.js";

const gameFinishBanner = new PopUp();

const game = new GameBuilder()
	.widthGameDuration(10)
	.widthCarrotCount(10)
	.widthBugCount(10)
	.build();

game.setGameStopListener((reason) => {
	let message;
	switch (reason) {
		case Reason.cancel:
			message = "REPLAY❓";
			break;
		case Reason.win:
			message = "YOU WON 😆";
			break;
		case Reason.lose:
			message = "YOU LOST 😭";
			break;
		default:
			throw new Error("not valid reason");
	}
	gameFinishBanner.showWidthText(message);
});

gameFinishBanner.setClickListener(() => {
	game.start();
});
