/**
 * Created by anik on 2017-04-23.
 */
var instructionState2 = {

    create: function () {

        game.add.text(330, 50, 'POSTACIE', {
            font: '50px Arial', fill: '#ffffff'
        });
        game.add.text(10, 100, ' najwięcej\n punktów.', {
            font: '30px Arial', fill: '#ffffff'
        });

        game.add.button(10, 500, 'jumpLeft', foo);
        game.add.button(730, 500, 'jumpRight', foo1);
    },

    backToMenu: function () {
        game.state.start('menu');
    },
    moveToNextInstruction: function() {
        game.state.start('instruction1');
    }
};

function foo() {
    instructionState.backToMenu();
}
function foo1() {
    instructionState.moveToNextInstruction();
}