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
        game.physics.arcade.enable(envelope);
        cursors = game.input.keyboard.createCursorKeys();

        player.body.collideWorldBounds = true;
    },

    update: function() {
        // game.physics.arcade.collide(player,dog);
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
        dog.x +=1;

    }
};


function killPlayer (player, dog) {
    player.kill();
}
function collectEnvelope(player, envelope) {
    envelope.kill();
}