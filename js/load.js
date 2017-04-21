var loadState= {
    
    preload: function() {
        
        var loadingLabel = game.add.text(80, 150, 'Ładowanie...',
          {font: '30px Courier', fill: '#ffffff'});
        
        game.load.image('envelope', 'assets/sprites/envelope.png');
        game.load.spritesheet('dog', 'assets/sprites/dogsprite.png', 32, 32);
        game.load.spritesheet('player', 'assets/sprites/postman.png', 23, 43);
        game.load.spritesheet('darkman', 'assets/sprites/darkman.png', 32, 48);
        game.load.spritesheet('nutcracker', 'assets/sprites/nutcracker.png', 32, 48);
        game.load.spritesheet('tracker', 'assets/sprites/tracker.png', 32, 48);
        game.load.spritesheet('warrior', 'assets/sprites/warrior.png', 32, 48);
        game.load.spritesheet('youngWoman', 'assets/sprites/youngWoman.png', 32, 48);
        game.load.image('levelOneTilemap', 'assets/sprites/levelOneTilemap.png');
        game.load.image('invisibleWall', 'assets/sprites/invisibleWall.png');
        game.load.audio('collectEnvelopeSound', 'assets/sounds/collectEnvelopeSound.mp3');
    },

    create: function() {
        game.state.start('menu');
    }
};