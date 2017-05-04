var loseState = {

  create: function () {
    
    replayButton = game.add.button(Math.round(gameWidth * 0.37625), Math.round(game.world.height - (gameHeight * 0.26666666666)), 'replayButton', actionOnClick, this);
      replayButton.scale.setTo(gameWidthScale, gameHeightScale);

    var loseLabel = game.add.text(Math.round((gameWidth * 0.1)), Math.round((gameHeight * 0.13333333333)), 'Przegrałeś :(',
      {font: '50px Arial', fill: '#00FF00'});
     loseLabel.scale.setTo(gameWidthScale, gameHeightScale);
  },


  restart: function () {
    game.state.start('menu');
  }
};

function actionOnClick() {
  loseState.restart();
}