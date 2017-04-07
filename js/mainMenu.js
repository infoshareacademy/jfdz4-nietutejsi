/**
 * Created by Goat on 2017-04-07.
 */
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
    game.load.image('title', 'assets/sprites/title.png');
    game.load.image('helpButton', 'assets/sprites/helpbutton.png');
    game.load.image('playButton', 'assets/sprites/playbutton.png');
}

function create() {
}

function update() {
}