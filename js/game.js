/**
 * Created by arturfalborski on 26.03.17.
 */
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
    game.load.image('envelope', 'assets/sprites/envelope.png');
    game.load.image('horObstacle', 'assets/sprites/obstacleHorizontal.png');
    game.load.image('verObstacle', 'assets/sprites/obstacleVertical.png');
    game.load.spritesheet('dog', 'assets/sprites/dogsprite.png');
    game.load.spritesheet('player', 'assets/sprites/postman.png', 23, 43)
}

function create() {
    game.add.sprite(377, 300, 'player');
}

function update() {
}