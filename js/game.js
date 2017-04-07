/**
 * Created by Goat on 2017-04-07.
 */
var game = new Phaser.Game(800, 600, Phaser.AUTO, '');

game.state.add('boot', bootState);
game.state.add('preload', preloadState);
game.state.add('menu', menuState);
game.state.add('play', playState);

game.state.start('boot');