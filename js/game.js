var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game-handler');

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