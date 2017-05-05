var instructionState = {

  create: function () {

      game.add.text(280, 50, 'CEL GRY', {
          font: '30px Arial', fill: '#ffffff'
      });
      game.add.text(10, 100, 'Zadaniem gracza jest, w ciągu 60 sekund zebranie losowo\n pojawiających się kopert. Przekazanie ich odbiorcy' +
          '\n i zgromadzenie, jak najwięcej punktów.', {
          font: '25px Arial', fill: '#ffffff'
      });

      game.add.button(10, 450, 'jumpLeft', backMenu);
      game.add.button(630, 450, 'jumpRight', goInst1);
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