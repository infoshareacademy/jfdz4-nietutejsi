/**
 * Created by arturfalborski on 26.03.17.
 */
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
    game.load.image('envelope', 'assets/sprites/envelope.png');
    game.load.image('horObstacle', 'assets/sprites/obstacleHorizontal.png');
    game.load.image('verObstacle', 'assets/sprites/obstacleVertical.png');
    game.load.spritesheet('dog', 'assets/sprites/dogsprite.png', 32, 32);
    game.load.spritesheet('player', 'assets/sprites/postman.png', 23, 43);

    var player;
    var cursors;
    var dog;
    var envelope;
}

function create() {
    game.stage.backgroundColor = '#124184';
    player = game.add.sprite(377, 300, 'player');

    player.animations.add('left', [4, 5, 6, 7], 7, true);
    player.animations.add('right', [8, 9, 10, 11], 7, true);
    player.animations.add('up', [12, 13, 14, 15], 7, true);
    player.animations.add('down', [1, 2, 3], 7, true);

    game.physics.arcade.enable(player);

    dog = game.add.sprite(0, 0, 'dog');

    dog.animations.add('left', [3, 4, 5], 7, true);
    dog.animations.add('right', [6, 7, 8], 7, true);
    dog.animations.add('up', [9, 10, 11], 7, true);
    dog.animations.add('down', [0, 1, 2], 7, true);

    game.physics.arcade.enable(dog);

    envelope = game.add.sprite(750, 0, 'envelope');

    cursors = game.input.keyboard.createCursorKeys();

    player.body.collideWorldBounds = true;
}

function update() {
}