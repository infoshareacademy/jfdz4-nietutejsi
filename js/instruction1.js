/**
 * Created by anik on 2017-04-23.
 */
var instructionState1 = {

    create: function () {

        game.add.text(330, 30, 'POSTACIE', {
            font: '30px Arial', fill: '#ffffff'
        });
        game.add.text(80, 100, 'LISTONOSZ - główny bohater. W ciągu 60 sekund powinien zebrać pojawiające się ' +
            'losowo\n koperty i dostarczyć do odbiorcy. Z każdą zebraną kopertą zdobywa więcej punktów\n i wolniej pporusza się,' +
            'dopóki nie odda kopert do odbiorcy. Musi uważać na psy.', {
            font: '16px Arial', fill: '#ffffff'
        });
        game.add.sprite(30, 100, 'player'),

        game.add.text(30, 200, 'ODBIORCA KOPERT - pojawia się w losowym miejscu. Czeka,\n aż listonosz przekaże mu koperty.', {
            font: '16px Arial', fill: '#ffffff'
        });
        game.add.sprite(500, 200, 'darkman'),
        game.add.sprite(550, 200, 'nutcracker'),
        game.add.sprite(600, 200, 'tracker'),
        game.add.sprite(650, 200, 'warrior'),
        game.add.sprite(700, 200, 'youngWoman'),

        game.add.text(80, 280, 'PIES - przeszkadza listonoszowi w dostarczeniu listów do odbiorcy.', {
            font: '16px Arial', fill: '#ffffff'
        });
        game.add.sprite(30, 280, 'dog'),

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