var gameWidth = Math.round((window.innerWidth * 0.416666666667));
var gameWidthScale = gameWidth / 800;
var gameHeight = Math.round(((window.innerWidth * 0.416666666667) * 0.75));
var gameHeightScale = gameHeight / 600;

var game = new Phaser.Game(gameWidth, gameHeight, Phaser.AUTO, 'gameDiv');

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('instruction', instructionState);
game.state.add('instruction1', instructionState1);
game.state.add('instruction2', instructionState2);
game.state.add('instruction3', instructionState3);
game.state.add('play', playState);
game.state.add('win', winState);
game.state.add('lose', loseState);

game.state.start('boot');