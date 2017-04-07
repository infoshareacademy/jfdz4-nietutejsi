/**
 * Created by arturfalborski on 26.03.17.
 */
var playState = {

    create: function() {

    game.stage.backgroundColor = '#124184';
    player = game.add.sprite((Math.random() * 777), (Math.random() * 557), 'player');

    player.animations.add('left', [4, 5, 6, 7], 7, true);
    player.animations.add('right', [8, 9, 10, 11], 7, true);
    player.animations.add('up', [12, 13, 14, 15], 7, true);
    player.animations.add('down', [1, 2, 3], 7, true);

    game.physics.arcade.enable(player);

    for (var i = 0; i < 1;) {
        dog = game.add.sprite((Math.random() * 768), (Math.random() * 568), 'dog');
        if (player.x - 32 < dog.x && dog.x < player.x + 23) {
            dog.kill();
            i = 0;
        } else if (player.y - 32 < dog.y && dog.y < player.y + 43) {
            dog.kill();
            i = 0;
        } else {
            i++;
        }
    }

    dog.animations.add('left', [3, 4, 5], 7, true);
    dog.animations.add('right', [6, 7, 8], 7, true);
    dog.animations.add('up', [9, 10, 11], 7, true);
    dog.animations.add('down', [0, 1, 2], 7, true);

    game.physics.arcade.enable(dog);

    envelope = game.add.sprite(((Math.random() * 714) + 50), ((Math.random() * 523) + 50), 'envelope');

    envelope.scale.setTo(0.6, 0.6);

    cursors = game.input.keyboard.createCursorKeys();

    player.body.collideWorldBounds = true;
},

update: function() {
}
};