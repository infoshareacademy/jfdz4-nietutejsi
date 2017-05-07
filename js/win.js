var winState = {

  create: function () {

    congrats = game.add.text(Math.round(gameWidth * 0.35), Math.round(gameHeight * 0.2333333), 'Gratulacje!', {
      font: '50px Arial', fill: '#ffffff'});
    congrats.scale.setTo(gameWidthScale, gameHeightScale);
    var winLabel = game.add.text(Math.round(gameWidth * 0.145), Math.round(gameHeight * 0.3333333333), 'W ciągu 60 sekund udało ci się zdobyć ' + scoreValue + ' punktów!',
      {font: '24px Arial', fill: '#ffffff'});
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