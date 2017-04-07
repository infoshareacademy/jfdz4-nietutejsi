/**
 * Created by Goat on 2017-04-07.
 */
var preloadState = {

    preload: function() {

        var loadingLabel = game.add.text(80, 150, 'Loading...',
                                                {font: '30px Arial', fill: '#ffffff'});

        game.load.image('envelope', 'assets/sprites/envelope.png');
        game.load.image('title', 'assets/sprites/title.png');
        game.load.image('helpButton', 'assets/sprites/helpbutton.png');
        game.load.image('playButton', 'assets/sprites/playbutton.png');
        game.load.spritesheet('dog', 'assets/sprites/dogsprite.png', 32, 32);
        game.load.spritesheet('player', 'assets/sprites/postman.png', 23, 43);
    },
    create: function() {
        game.state.start('menu');
    }
};