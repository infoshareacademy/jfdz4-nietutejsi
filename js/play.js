var playState = {

    create: function() {

        game.stage.backgroundColor = '#124184';
        player = game.add.sprite(levelOneLayout.playerXLayout[Math.floor(Math.random() * 2)], levelOneLayout.playerYLayout[Math.floor(Math.random() * 2)], 'player');

        player.animations.add('left', [4, 5, 6, 7], 7, true);
        player.animations.add('right', [8, 9, 10, 11], 7, true);
        player.animations.add('up', [12, 13, 14, 15], 7, true);
        player.animations.add('down', [1, 2, 3], 7, true);

        game.physics.arcade.enable(player);

        dog = game.add.sprite(levelOneLayout.dogXLayout[Math.floor(Math.random() * 3)], levelOneLayout.dogYLayout[Math.floor(Math.random() * 2)], 'dog');

        dog.animations.add('left', [3, 4, 5], 7, true);
        dog.animations.add('right', [6, 7, 8], 7, true);
        dog.animations.add('up', [9, 10, 11], 7, true);
        dog.animations.add('down', [0, 1, 2], 7, true);

        game.physics.arcade.enable(dog);

        envelope = game.add.sprite(levelOneLayout.envelopeXLayout[Math.floor(Math.random() * 2)], levelOneLayout.envelopeYLayout[Math.floor(Math.random() * 3)], 'envelope');

        envelope.scale.setTo(0.6, 0.6);
        game.physics.arcade.enable(envelope);

        cursors = game.input.keyboard.createCursorKeys();

        player.body.collideWorldBounds = true;
        dog.body.collideWorldBounds = true;
        dog.body.velocity.x = 100;
        dog.play('right');

        player.scale.setTo(1.3, 1.3);
        dog.scale.setTo(1.3, 1.3);
    },

    update: function() {
        game.physics.arcade.overlap(player, dog, killPlayer, null, this);
        game.physics.arcade.overlap(player, envelope, collectEnvelope, null, this);
        player.body.velocity.set(0);
        if (cursors.left.isDown) {
            player.body.velocity.x = -100;
            player.play('left');
        }
        else if (cursors.right.isDown) {
            player.body.velocity.x = 100;
            player.play('right');
        }
        else if (cursors.up.isDown) {
            player.body.velocity.y = -100;
            player.play('up');
        }
        else if (cursors.down.isDown) {
            player.body.velocity.y = 100;
            player.play('down');
        } else {
            player.animations.stop();
            player.frame = 0;
        }

        if (dog.x === 758.4) {
            dog.body.velocity.x = -100;
            dog.play('left');
        } else if (dog.x === 0) {
            dog.body.velocity.x = 100;
            dog.play('right');
        }
    }
};

var levelOneLayout = {
    dogXLayout: [200, 400, 600],
    dogYLayout: [200, 400],
    playerXLayout: [100, 700],
    playerYLayout: [100, 500],
    envelopeXLayout: [300, 500],
    envelopeYLayout: [150, 250, 350, 450]
};

function killPlayer (player, dog) {
    player.kill();
}
function collectEnvelope(player, envelope) {
    envelope.kill();
}
