var instructionState = {

  create: function () {

      game.add.text(330, 50, 'CEL GRY', {
          font: '50px Arial', fill: '#ffffff'
      });
      game.add.text(10, 100, 'Zadaniem gracza jest w ciągu 60 sekund zebranie kopert,\n przekazanie ich odbiorcy i zgromadzenie, jak najwięcej\n punktów.', {
          font: '30px Arial', fill: '#ffffff'
      });

      game.add.button(10, 500, 'jumpLeft', backMenu);
      game.add.button(730, 500, 'jumpRight', goInst1);
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