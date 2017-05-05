var winState = {

  create: function () {

    var winLabel = game.add.text(Math.round(gameWidth * 0.125), Math.round(gameHeight * 0.13333333333), 'W ciągu 60 sekund udało ci się zdobyć ' + scoreValue + ' punktów!',
      {font: '24px Arial', fill: '#00FF00'});
      winLabel.scale.setTo(gameWidthScale, gameHeightScale);
    replayButton = game.add.button(Math.round(gameWidth * 0.37625), Math.round(game.world.height - (gameHeight * 0.26666666666)), 'replayButton', actionOnClick, this);
      replayButton.scale.setTo(gameWidthScale, gameHeightScale);
  },
  
  restart: function () {
    game.state.start('menu');
  }
};

function actionOnClick() {
  winState.restart();
}