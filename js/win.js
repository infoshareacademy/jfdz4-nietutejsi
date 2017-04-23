var winState = {

  create: function () {

    var winLabel = game.add.text(100, 80, 'W ciągu 60 sekund udało ci się zdobyć ' + scoreValue + ' punktów!',
      {font: '24px Arial', fill: '#00FF00'});

    replayButton = game.add.button(301, game.world.height - 160, 'replayButton', actionOnClick, this);
  },
  
  restart: function () {
    game.state.start('menu');
  }
};

function actionOnClick() {
  winState.restart();
}