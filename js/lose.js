var loseState = {

  create: function () {
    
    replayButton = game.add.button(301, game.world.height - 160, 'replayButton', actionOnClick, this);

    var loseLabel = game.add.text(80, 80, 'Przegrałeś :(',
      {font: '50px Arial', fill: '#00FF00'});
  },

  restart: function () {
    game.state.start('menu');
  }
};

function actionOnClick() {
  loseState.restart();
}