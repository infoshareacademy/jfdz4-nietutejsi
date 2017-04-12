var playState = {

    create: function() {

        game.stage.backgroundColor = '#124184';

        scoreCounter = game.add.text(0, 0, "Score: 0", {font: '20px Arial', fill: '#ffffff'});
        envelopeNumberCounter = game.add.text(0, 25, "Envelopes: 0", {font: '20px Arial', fill: '#ffffff'});
        timeLeftCounter = game.add.text(680, 0, 'Time left: ' + 60, {font: '20px Arial', fill: '#ffffff'});

        player = game.add.sprite(levelOneLayout.playerXLayout[Math.floor(Math.random() * 2)], levelOneLayout.playerYLayout[Math.floor(Math.random() * 2)], 'player');

        player.animations.add('left', [4, 5, 6, 7], 7 + animationBurden, true);
        player.animations.add('right', [8, 9, 10, 11], 7 + animationBurden, true);
        player.animations.add('up', [12, 13, 14, 15], 7 + animationBurden, true);
        player.animations.add('down', [1, 2, 3], 7 + animationBurden, true);

        game.physics.arcade.enable(player);
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

        createEnvelope();

        cursors = game.input.keyboard.createCursorKeys();

        player.body.collideWorldBounds = true;

        player.scale.setTo(1.3, 1.3);
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
        });
            if (player.exists === false) {
                game.state.start('lose');
            }
            if (envelope.exists === false) {
                createEnvelope();
                scoreValue += 10;
                envelopeValue += 1;
                scoreCounter.text = 'Score: ' + (scoreValue * scoreMultiplier).toFixed(0);
                scoreMultiplier += 0.2;
                envelopeNumberCounter.text = 'Envelopes: ' + envelopeValue;
                envelopeBurden -= 0.05;
                animationBurden += 1;
            }
        }
};
var dogsGroup;
var scoreValue = 0;
var envelopeValue = 0;
var scoreMultiplier = 1;
var envelopeBurden = 1;
var animationBurden = 0;

var levelOneLayout = {
    dogXLayout: [200, 400, 600],
    dogYLayout: [200, 400],
    playerXLayout: [100, 700],
    playerYLayout: [100, 500],
    envelopeXLayout: [300, 500],
    envelopeYLayout: [150, 250, 350, 450]
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