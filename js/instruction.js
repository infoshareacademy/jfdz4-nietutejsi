var instructionState = {

  create: function () {

      gameDestination = game.add.text((gameWidth * 0.4125), (gameHeight * 0.08333333333), 'CEL GRY', {
          font: '50px Arial', fill: '#ffffff'
      });
      gameDestination.scale.setTo(gameWidthScale, gameHeightScale);
      playerRole = game.add.text((gameWidth * 0.0125), (gameHeight * 0.16666666666), 'Zadaniem gracza jest w ciągu 60 sekund zebranie kopert,\n przekazanie ich odbiorcy i zgromadzenie, jak najwięcej\n punktów.', {
          font: '30px Arial', fill: '#ffffff'
      });
      playerRole.scale.setTo(gameWidthScale, gameHeightScale);

      menuButton = game.add.button((gameWidth * 0.0125), (gameHeight * 0.83333333333), 'jumpLeft', backMenu);
      menuButton.scale.setTo(gameWidthScale, gameHeightScale);
      inst1Button = game.add.button((gameWidth * 0.9125), (gameHeight * 0.83333333333), 'jumpRight', goInst1);
      inst1Button.scale.setTo(gameWidthScale, gameHeightScale);
      },

  backToMenu: function () {
    game.state.start('menu');
  },
  moveToNextInstruction: function() {
      game.state.start('instruction1');
  }
};

function backMenu() {
  instructionState.backToMenu();
}
function goInst1() {
    instructionState.moveToNextInstruction();
}