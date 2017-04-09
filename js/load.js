var loadState= {
    
    preload: function() {
        
        var loadingLabel = game.add.text(80, 150, 'Ładowanie...',
          {font: '30px Courier', fill: '#ffffff'});
        
        game.load.image('envelope', 'assets/sprites/envelope.png');
        game.load.spritesheet('dog', 'assets/sprites/dogsprite.png', 32, 32);
        game.load.spritesheet('player', 'assets/sprites/postman.png', 23, 43);


    },

    create: function() {
        game.state.start('menu');
    }
};