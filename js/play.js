var playState = {

    create: function() {

        game.add.image(0, 0, 'levelOneTilemap');

        var dogs = game.add.group();
        for (i = 0; i < 2; i++) {
            dog = dogs.create(getAndRemoveFromArray(levelOneLayout.dogXLayout), getAndRemoveFromArray(levelOneLayout.dogYLayout), 'dog');
            dog.animations.add('left', [3, 4, 5], 7, true);
            dog.animations.add('right', [6, 7, 8], 7, true);
            dog.animations.add('up', [9, 10, 11], 7, true);
            dog.animations.add('down', [0, 1, 2], 7, true);
            game.physics.arcade.enable(dog);

            var dogDirectionRandomizer = Math.ceil(Math.random() * 2);
            if (dogDirectionRandomizer === 1) {
                dog.body.velocity.x = 100;
                dog.play('right');
            } else {
                dog.body.velocity.y = 100;
                dog.play('down');
            }

            dog.body.collideWorldBounds = true;

            dogs.forEach(function (dog) {
                dog.scale.setTo(1.3, 1.3);
            });
            group = dogs;
        }

        var invisibleWalls = game.add.group();
        for(i = 0; i < 6; i++) {
            inviWall = invisibleWalls.create(i * 32, 288, 'invisibleWall');
            game.physics.enable(inviWall);
            inviWall.body.immovable = true;
            inviWall.collideWorldBounds = true;

            group2 = invisibleWalls;
        }
        for(i = 1; i <= 2; i++) {
            inviWall = invisibleWalls.create(160, 288 + (i * 32), 'invisibleWall');
            game.physics.enable(inviWall);
            inviWall.body.immovable = true;
            inviWall.collideWorldBounds = true;

            group2 = invisibleWalls;
        }
        for(i = 0; i < 5; i++) {
            inviWall = invisibleWalls.create(i * 32, 384, 'invisibleWall' );
            game.physics.enable(inviWall);
            inviWall.body.immovable = true;
            inviWall.collideWorldBounds = true;

            group2 = invisibleWalls;
        }
        for(i = 0; i < 3; i++) {
            inviWall = invisibleWalls.create(256 + (i * 32), 576 - (i * 32), 'invisibleWall' );
            game.physics.enable(inviWall);
            inviWall.body.immovable = true;
            inviWall.collideWorldBounds = true;

            group2 = invisibleWalls;
        }
        for(i = 0; i < 2; i++) {
            inviWall = invisibleWalls.create(320 + (i * 32), 480, 'invisibleWall' );
            game.physics.enable(inviWall);
            inviWall.body.immovable = true;
            inviWall.collideWorldBounds = true;

            group2 = invisibleWalls;
        }
        for(i = 0; i < 3; i++) {
            inviWall = invisibleWalls.create(384, 512 + (i * 32), 'invisibleWall' );
            game.physics.enable(inviWall);
            inviWall.body.immovable = true;
            inviWall.collideWorldBounds = true;

            group2 = invisibleWalls;
        }

        createEnvelope();

        randomRecRandomizer = Math.floor(Math.random() * 5);
        if (randomRecRandomizer === 0) {
            randomReceivent = game.add.sprite(getAndRemoveFromArray(levelOneLayout.playerXLayout), getAndRemoveFromArray(levelOneLayout.playerYLayout), 'darkman');
            randomReceivent.scale.setTo(1.2, 1.2);
            game.physics.arcade.enable(randomReceivent);
            randomReceivent.body.immovable = true;
        } else if (randomRecRandomizer === 1) {
            randomReceivent = game.add.sprite(getAndRemoveFromArray(levelOneLayout.playerXLayout), getAndRemoveFromArray(levelOneLayout.playerYLayout), 'nutcracker');
            randomReceivent.scale.setTo(1.2, 1.2);
            game.physics.arcade.enable(randomReceivent);
            randomReceivent.body.immovable = true;
        } else if (randomRecRandomizer === 2) {
            randomReceivent = game.add.sprite(getAndRemoveFromArray(levelOneLayout.playerXLayout), getAndRemoveFromArray(levelOneLayout.playerYLayout), 'tracker');
            randomReceivent.scale.setTo(1.2, 1.2);
            game.physics.arcade.enable(randomReceivent);
            randomReceivent.body.immovable = true;
        } else if (randomRecRandomizer === 3) {
            randomReceivent = game.add.sprite(getAndRemoveFromArray(levelOneLayout.playerXLayout), getAndRemoveFromArray(levelOneLayout.playerYLayout), 'warrior');
            randomReceivent.scale.setTo(1.2, 1.2);
            game.physics.arcade.enable(randomReceivent);
            randomReceivent.body.immovable = true;
        } else if (randomRecRandomizer === 4) {
            randomReceivent = game.add.sprite(getAndRemoveFromArray(levelOneLayout.playerXLayout), getAndRemoveFromArray(levelOneLayout.playerYLayout), 'youngWoman');
            randomReceivent.scale.setTo(1.2, 1.2);
            game.physics.arcade.enable(randomReceivent);
            randomReceivent.body.immovable = true;
        }

        player = game.add.sprite(getAndRemoveFromArray(levelOneLayout.playerXLayout), getAndRemoveFromArray(levelOneLayout.playerYLayout), 'player');

        player.animations.add('left', [4, 5, 6, 7], 7, true);
        player.animations.add('right', [8, 9, 10, 11], 7, true);
        player.animations.add('up', [12, 13, 14, 15], 7, true);
        player.animations.add('down', [1, 2, 3], 7, true);

        game.physics.arcade.enable(player);
        player.body.setSize(23, 17, 0, 26);

        cursors = game.input.keyboard.createCursorKeys();

        player.body.collideWorldBounds = true;

        player.scale.setTo(1.3, 1.3);

        scoreCounter = game.add.text(0, 0, "Score: 0", {font: '20px Arial', fill: '#ffffff'});
        envelopeNumberCounter = game.add.text(0, 25, "Envelopes: 0", {font: '20px Arial', fill: '#ffffff'});
        timeLeftCounter = game.add.text(680, 0, 'Time left: ' + 60, {font: '20px Arial', fill: '#ffffff'});
    },

    update: function() {
        game.physics.arcade.overlap(player, envelope, collectEnvelope, null, this);
        player.body.velocity.set(0);
        if (cursors.left.isDown) {
            player.body.velocity.x = -100 * envelopeBurden;
            player.play('left');
        }
        else if (cursors.right.isDown) {
            player.body.velocity.x = 100 * envelopeBurden;
            player.play('right');
        }
        else if (cursors.up.isDown) {
            player.body.velocity.y = -100 * envelopeBurden;
            player.play('up');
        }
        else if (cursors.down.isDown) {
            player.body.velocity.y = 100 * envelopeBurden;
            player.play('down');
        } else {
            player.animations.stop();
            player.frame = 0;
        }
        group.forEach(function (dog){
            game.physics.arcade.overlap(player, dog, killPlayer, null, this);
            if (dog.x === 758.4) {
                dog.body.velocity.x = -100;
                dog.play('left');
            } else if (dog.x === 0) {
                dog.body.velocity.x = 100;
                dog.play('right');
            }
            else if (dog.y === 558.4) {
                dog.body.velocity.y = -100;
                dog.play('up');
            }
            else if (dog.y === 0) {
                dog.body.velocity.y = 100;
                dog.play('down');
            }
        });
        group2.forEach(function (wall) {
           game.physics.arcade.collide(wall, player);
        });
        game.physics.arcade.collide(randomReceivent, player, giveInEnvelopes);
            if (player.exists === false) {
                game.state.start('lose');
            }
            if (envelope.exists === false) {
                createEnvelope();
                game.world.bringToTop(player);
                scoreValue += 10;
                envelopeValue += 1;
                scoreCounter.text = 'Score: ' + (scoreValue * scoreMultiplier).toFixed(0);
                scoreMultiplier += 0.2;
                envelopeNumberCounter.text = 'Envelopes: ' + envelopeValue;
                envelopeBurden -= 0.05;
                animationSpeedUp += 1;
            }
        }
};
var dogsGroup;
var scoreValue = 0;
var envelopeValue = 0;
var scoreMultiplier = 1;
var envelopeBurden = 1;
var animationSpeedUp = 0;

var levelOneLayout = {
    dogXLayout: [224, 416, 608],
    dogYLayout: [224, 416],
    playerXLayout: [128, 704],
    playerYLayout: [128, 512],
    envelopeXLayout: [320, 512],
    envelopeYLayout: [160, 320, 480]
};

function getAndRemoveFromArray(arr) {
    var itemIndex = Math.floor(Math.random() * arr.length);
    var itemValue = arr[itemIndex];
    arr.splice(itemIndex,1);
    return itemValue;
}

function killPlayer (player, dog) {
    player.kill();
}
function collectEnvelope(player, envelope) {
    envelope.kill();
}

function createEnvelope() {
    envelope = game.add.sprite(levelOneLayout.envelopeXLayout[Math.floor(Math.random() * 2)], levelOneLayout.envelopeYLayout[Math.floor(Math.random() * 3)], 'envelope');
    envelope.scale.setTo(0.6, 0.6);
    game.physics.arcade.enable(envelope);
}

function giveInEnvelopes() {
    envelopeValue = 0;
    envelopeBurden = 1;
    envelopeNumberCounter.text = 'Envelopes: ' + envelopeValue;
    scoreMultiplier = 1;
}