var winState = {

  create: function () {

    var winLabel = game.add.text(80, 80, 'WYGRAŁEŚ!',
      {font: '50px Arial', fill: '#00FF00'});
    
    var startLabel = game.add.text(80, game.world.height - 80,
      'Naciśnij "W" by rozpocząć grę od nowa',
      {font: '25px Arial', fill: '#ffffff'});
    
    var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);
    
    wkey.onDown.addOnce(this.restart, this);
  },
  
  restart: function () {
    game.state.start('menu');
  }
};