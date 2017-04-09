var menuState = {

    create: function () {
        
        var nameLabel = game.add.text(80, 80, 'WishBook',
          { font: '50px Arial', fill: '#ffffff' });

        var undernameLabel = game.add.text(250, 138, 'the Game',
          { font: '32px Arial', fill: '#ffffff'});
        
        var startLabel = game.add.text(80, game.world.height-80,
          'Naciśnij "W" by zacząć grę!',
          {font: '25px Arial', fill: '#ffffff' });
        
        var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);
        
        wkey.onDown.addOnce(this.start, this);
    },
    
    start: function () {
        game.state.start('play');
    }
};