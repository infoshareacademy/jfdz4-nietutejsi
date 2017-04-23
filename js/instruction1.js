/**
 * Created by anik on 2017-04-23.
 */
var instructionState1 = {

    create: function () {

        game.add.text(330, 50, 'WYSTĘPUJĄ', {
            font: '50px Arial', fill: '#ffffff'
        });
        game.add.text(10, 100, 'Zadaniem gracza jest w ciągu 60 sekund zebranie kopert,\n przekazanie ich odbiorcy i zgromadzenie, jak najwięcej\n punktów.', {
            font: '30px Arial', fill: '#ffffff'
        });

        game.add.button(10, 500, 'jumpLeft', foo);
        game.add.button(730, 500, 'jumpRight', foo1);
    },

    backToMenu: function () {
        game.state.start('instruction');
    },
    moveToNextInstruction: function() {
        game.state.start('instruction2');
    }
};

function foo() {
    instructionState.backToMenu();
}
function foo1() {
    instructionState.moveToNextInstruction();
}