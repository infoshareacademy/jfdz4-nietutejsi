var playState = {

    create: function() {

        levelOneTilemap = game.add.image(0, 0, 'levelOneTilemap');
        levelOneTilemap.scale.setTo(gameWidthScale, gameHeightScale);

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
                dog.body.velocity.x = 150 * gameWidthScale;
                dog.play('right');
            } else {
                dog.body.velocity.y = 150 * gameWidthScale;
                dog.play('down');
            }

            dog.body.collideWorldBounds = true;

            dogs.forEach(function (dog) {
                dog.scale.setTo((gameWidthScale * 1.3), (gameHeightScale * 1.3));
            });
            group = dogs;
        }

        var invisibleWalls = game.add.group();
        for(i = 0; i < 6; i++) {
            inviWall = invisibleWalls.create((i * ((gameWidth * 0.04))), (gameHeight * 0.48), 'invisibleWall');
            game.physics.enable(inviWall);
            inviWall.scale.setTo(gameWidthScale,gameHeightScale);
            inviWall.body.immovable = true;
            inviWall.collideWorldBounds = true;

            group2 = invisibleWalls;
        }
        for(i = 1; i <= 2; i++) {
            inviWall = invisibleWalls.create(((gameWidth * 0.2)), ((gameHeight * 0.48) + (i * (gameHeight * 0.05333333333))), 'invisibleWall');
            game.physics.enable(inviWall);
            inviWall.scale.setTo(gameWidthScale,gameHeightScale);
            inviWall.body.immovable = true;
            inviWall.collideWorldBounds = true;

            group2 = invisibleWalls;
        }
        for(i = 0; i < 5; i++) {
            inviWall = invisibleWalls.create(((i * (gameWidth * 0.04))), ((gameHeight * 0.64)), 'invisibleWall' );
            game.physics.enable(inviWall);
            inviWall.scale.setTo(gameWidthScale,gameHeightScale);
            inviWall.body.immovable = true;
            inviWall.collideWorldBounds = true;

            group2 = invisibleWalls;
        }
        for(i = 0; i < 3; i++) {
            inviWall = invisibleWalls.create(((gameWidth * 0.32) + (i * (gameWidth * 0.04))), ((gameHeight * 0.96) - (i * (gameHeight * 0.05333333333))), 'invisibleWall' );
            game.physics.enable(inviWall);
            inviWall.scale.setTo(gameWidthScale,gameHeightScale);
            inviWall.body.immovable = true;
            inviWall.collideWorldBounds = true;

            group2 = invisibleWalls;
        }
        for(i = 0; i < 2; i++) {
            inviWall = invisibleWalls.create(((gameWidth * 0.4) + (i * (gameWidth * 0.04))), (gameHeight * 0.8), 'invisibleWall' );
            game.physics.enable(inviWall);
            inviWall.scale.setTo(gameWidthScale,gameHeightScale);
            inviWall.body.immovable = true;
            inviWall.collideWorldBounds = true;

            group2 = invisibleWalls;
        }
        for(i = 0; i < 3; i++) {
            inviWall = invisibleWalls.create((gameWidth * 0.48), ((gameHeight * 0.85333333333) + (i * (gameHeight * 0.05333333333))), 'invisibleWall' );
            game.physics.enable(inviWall);
            inviWall.scale.setTo(gameWidthScale,gameHeightScale);
            inviWall.body.immovable = true;
            inviWall.collideWorldBounds = true;

            group2 = invisibleWalls;
        }

        createEnvelope();

        player = game.add.sprite(levelOneLayout.playerXLayout[Math.floor(Math.random() * levelOneLayout.playerXLayout.length)], levelOneLayout.playerYLayout[Math.floor(Math.random() * levelOneLayout.playerYLayout.length)], 'player');

        player.animations.add('left', [4, 5, 6, 7], 7, true);
        player.animations.add('right', [8, 9, 10, 11], 7, true);
        player.animations.add('up', [12, 13, 14, 15], 7, true);
        player.animations.add('down', [1, 2, 3], 7, true);

        game.physics.arcade.enable(player);
        player.body.setSize((gameWidth * 0.02875), (gameHeight * 0.02833333333), 0, (gameHeight * 0.04333333333));

        cursors = game.input.keyboard.createCursorKeys();

        player.body.collideWorldBounds = true;

        player.scale.setTo((gameWidthScale * 1.3), (gameHeightScale * 1.3));
        
        createRandomReceivent();

        game.world.bringToTop(player);
        scoreCounter = game.add.text(0, 0, "Punkty: 0", {font: '20px Arial', fill: '#ffffff'});
        scoreCounter.scale.setTo(gameWidthScale, gameHeightScale);
        envelopeNumberCounter = game.add.text(0, Math.round(gameHeight * 0.04166666666), "Koperty: 0", {font: '20px Arial', fill: '#ffffff'});
        envelopeNumberCounter.scale.setTo(gameWidthScale, gameHeightScale);
        timeLeftCounter = game.add.text(Math.round(gameWidth * 0.85), 0, 'Czas: ' + seconds, {font: '20px Arial', fill: '#ffffff'});
        timeLeftCounter.scale.setTo(gameWidthScale, gameHeightScale);

        envelopeSound = game.add.audio('collectEnvelopeSound');
        startGameTimer();
    },

    update: function() {
        game.physics.arcade.overlap(player, envelope, collectEnvelope, null, this);
        player.body.velocity.set(0);
        if (cursors.left.isDown) {
            player.body.velocity.x = -150 * envelopeBurden * gameWidthScale;
            player.play('left');
        }
        else if (cursors.right.isDown) {
            player.body.velocity.x = 150 * envelopeBurden * gameWidthScale;
            player.play('right');
        }
        else if (cursors.up.isDown) {
            player.body.velocity.y = -150 * envelopeBurden * gameWidthScale;
            player.play('up');
        }
        else if (cursors.down.isDown) {
            player.body.velocity.y = 150 * envelopeBurden * gameWidthScale;
            player.play('down');
        } else {
            player.animations.stop();
            player.frame = 0;
        }
        group.forEach(function (dog){
            game.physics.arcade.overlap(player, dog, killPlayer, null, this);
            if (dog.x === (gameWidth * 0.948)) {
                dog.body.velocity.x = -150 * gameWidthScale;
                dog.play('left');
            } else if (dog.x === 0) {
                dog.body.velocity.x = 150 * gameWidthScale;
                dog.play('right');
            }
            else if (dog.y > parseFloat((gameHeight * 0.920666666667).toFixed(1))) {
                dog.body.velocity.y = -150 * gameWidthScale;
                dog.play('up');
            }
            else if (dog.y === 0) {
                dog.body.velocity.y = 150 * gameWidthScale;
                dog.play('down');
            }
        });
        group2.forEach(function (wall) {
           game.physics.arcade.collide(wall, player);
        });
        game.physics.arcade.collide(randomReceivent, player, giveInEnvelopes);
            if (player.exists === false) {
                levelOneLayout.dogXLayout = [Math.round(gameWidth * 0.28), Math.round(gameWidth * 0.52), Math.round(gameWidth * 0.76)];
                levelOneLayout.dogYLayout = [Math.round(gameHeight * 0.37333333333), Math.round(gameHeight * 0.69333333333)];
                scoreValue = 0;
                envelopeValue = 0;
                scoreMultiplier = 1;
                envelopeBurden = 1;
                seconds = 60;
                scoreBonus = 0;
                noRep = 0;
                game.state.start('lose');
            }
            if (envelope.exists === false) {
                createEnvelope();
                envelopeSound.play();
                game.world.bringToTop(player);
                scoreValue += 10 * scoreMultiplier;
                envelopeValue += 1;
                scoreCounter.text = 'Punkty: ' + scoreValue.toFixed(0);
                scoreMultiplier += 0.2;
                envelopeNumberCounter.text = 'Koperty: ' + envelopeValue;
                envelopeBurden -= 0.1;
                animationSpeedUp += 1;
                noRep += 1;
                if (noRep === 1) {
                    levelOneLayout.envelopeYLayout = [Math.round(gameWidth * 0.1), Math.round(gameWidth * 0.2), Math.round(gameWidth * 0.3), Math.round(gameWidth * 0.4), Math.round(gameWidth * 0.5)];
                    levelOneLayout.envelopeXLayout = [Math.round(gameHeight * 0.53333333333), Math.round(gameHeight * 0.85333333333)];
                    noRep = 0;
                }
            }
        }
};
var dogsGroup;
var scoreValue = 0;
var envelopeValue = 0;
var scoreMultiplier = 1;
var envelopeBurden = 1;
var animationSpeedUp = 0;
var noRep = 0;
var seconds = 60;
var scoreBonus = 0;
var gameWidth = Math.round((window.innerWidth * 0.416666666667));
var gameWidthScale = gameWidth / 800;
var gameHeight = Math.round(((window.innerWidth * 0.416666666667) * 0.75));
var gameHeightScale = gameHeight / 600;

var levelOneLayout = {
    dogXLayout: [Math.round(gameWidth * 0.28), Math.round(gameWidth * 0.52), Math.round(gameWidth * 0.76)],
    dogYLayout: [Math.round(gameHeight * 0.37333333333), Math.round(gameHeight * 0.69333333333)],
    playerXLayout: [Math.round(gameWidth * 0.16), Math.round(gameWidth * 0.88)],
    playerYLayout: [Math.round(gameHeight * 0.21333333333), Math.round(gameHeight * 0.85333333333)],
    envelopeXLayout: [Math.round(gameHeight * 0.53333333333), Math.round(gameHeight * 0.85333333333)],
    envelopeYLayout: [Math.round(gameWidth * 0.1), Math.round(gameWidth * 0.2), Math.round(gameWidth * 0.3), Math.round(gameWidth * 0.5)],
    randomRecXLayout: [Math.round(gameWidth * 0.2), Math.round(gameWidth * 0.8)],
    randomRecYLayout: [Math.round(gameHeight * 0.21333333333), Math.round(gameHeight * 0.85333333333)]
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
    envelope = game.add.sprite(getAndRemoveFromArray(levelOneLayout.envelopeXLayout), getAndRemoveFromArray(levelOneLayout.envelopeYLayout), 'envelope');
    envelope.scale.setTo((gameWidthScale * 0.6), (gameHeightScale * 0.6));
    game.physics.arcade.enable(envelope);
    envelope.bringToTop();
    group2.forEach(function (dog) {
        dog.bringToTop();
    });
}

function giveInEnvelopes() {
    if(envelopeValue >= 1) {
        envelopeValue = 0;
        envelopeBurden = 1;
        envelopeNumberCounter.text = 'Koperty: ' + envelopeValue;
        scoreMultiplier = 1;
        scoreBonus = 0;
        randomReceivent.kill();
        createRandomReceivent();
        game.world.bringToTop(player);
    }
}

function startGameTimer() {
    seconds = 60;
    gameTimer = setInterval(function() {
        timeLeftCounter.text = 'Czas: ' + seconds;
        seconds -= 1;
        if (player.exists === false) {
            clearInterval(gameTimer);
        } else if (seconds === 0) {
            levelOneLayout.dogXLayout = [Math.round(gameWidth * 0.28), Math.round(gameWidth * 0.52), Math.round(gameWidth * 0.76)];
            levelOneLayout.dogYLayout = [Math.round(gameHeight * 0.37333333333), Math.round(gameHeight * 0.69333333333)];
            game.state.start('win');
        }
    }, 1000);
}

function createRandomReceivent() {
    randomRecRandomizer = Math.floor(Math.random() * 5);
    if (randomRecRandomizer === 0) {
        randomReceivent = game.add.sprite(levelOneLayout.randomRecXLayout[Math.floor(Math.random() * levelOneLayout.randomRecXLayout.length)], levelOneLayout.randomRecYLayout[Math.floor(Math.random() * levelOneLayout.randomRecYLayout.length)], 'darkman');
        randomReceivent.scale.setTo((gameWidthScale * 1.2), (gameHeightScale * 1.2));
        game.physics.arcade.enable(randomReceivent);
        randomReceivent.body.immovable = true;
    } else if (randomRecRandomizer === 1) {
        randomReceivent = game.add.sprite(levelOneLayout.randomRecXLayout[Math.floor(Math.random() * levelOneLayout.randomRecXLayout.length)], levelOneLayout.randomRecYLayout[Math.floor(Math.random() * levelOneLayout.randomRecYLayout.length)], 'nutcracker');
        randomReceivent.scale.setTo((gameWidthScale * 1.2), (gameHeightScale * 1.2));
        game.physics.arcade.enable(randomReceivent);
        randomReceivent.body.immovable = true;
    } else if (randomRecRandomizer === 2) {
        randomReceivent = game.add.sprite(levelOneLayout.randomRecXLayout[Math.floor(Math.random() * levelOneLayout.randomRecXLayout.length)], levelOneLayout.randomRecYLayout[Math.floor(Math.random() * levelOneLayout.randomRecYLayout.length)], 'tracker');
        randomReceivent.scale.setTo((gameWidthScale * 1.2), (gameHeightScale * 1.2));
        game.physics.arcade.enable(randomReceivent);
        randomReceivent.body.immovable = true;
    } else if (randomRecRandomizer === 3) {
        randomReceivent = game.add.sprite(levelOneLayout.randomRecXLayout[Math.floor(Math.random() * levelOneLayout.randomRecXLayout.length)], levelOneLayout.randomRecYLayout[Math.floor(Math.random() * levelOneLayout.randomRecYLayout.length)], 'warrior');
        randomReceivent.scale.setTo((gameWidthScale * 1.2), (gameHeightScale * 1.2));
        game.physics.arcade.enable(randomReceivent);
        randomReceivent.body.immovable = true;
    } else if (randomRecRandomizer === 4) {
        randomReceivent = game.add.sprite(levelOneLayout.randomRecXLayout[Math.floor(Math.random() * levelOneLayout.randomRecXLayout.length)], levelOneLayout.randomRecYLayout[Math.floor(Math.random() * levelOneLayout.randomRecYLayout.length)], 'youngWoman');
        randomReceivent.scale.setTo((gameWidthScale * 1.2), (gameHeightScale * 1.2));
        game.physics.arcade.enable(randomReceivent);
        randomReceivent.body.immovable = true;
    }
}