var winState = {

  create: function () {

    var winLabel = game.add.text(80, 80, 'WYGRAŁEŚ!',
      {font: '50px Arial', fill: '#00FF00'});

    replayButton = game.add.button(301, game.world.height - 160, 'replayButton', actionOnClick, this);
  },
  
  restart: function () {
    game.state.start('menu');
  }
};

function actionOnClick() {
  winState.restart();
}