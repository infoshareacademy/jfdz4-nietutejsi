var instructionState1 = {

    create: function () {

        game.add.text(280, 30, 'POSTACIE', {
            font: '30px Arial', fill: '#ffffff'
        });
        game.add.text(80, 100, 'LISTONOSZ - główny bohater. W ciągu 60 sekund powinien zebrać pojawiające się ' +
            '\n losowo koperty i dostarczyć do odbiorcy. Z każdą zebraną kopertą zdobywa więcej\n punktów i wolniej pporusza się,' +
            'dopóki nie odda kopert do odbiorcy. Musi uważać na\n psy.', {
            font: '16px Arial', fill: '#ffffff'
        });
        game.add.sprite(30, 100, 'player');

        game.add.text(30, 250, 'ODBIORCA KOPERT - pojawia się w losowym miejscu.\n Czeka, aż listonosz przekaże mu koperty.', {
            font: '16px Arial', fill: '#ffffff'
        });
        game.add.sprite(450, 250, 'darkman');
        game.add.sprite(500, 250, 'nutcracker');
        game.add.sprite(550, 250, 'tracker');
        game.add.sprite(600, 250, 'warrior');
        game.add.sprite(650, 250, 'youngWoman');

        game.add.text(80, 350, 'PIES - przeszkadza listonoszowi w dostarczeniu listów do odbiorcy.', {
            font: '16px Arial', fill: '#ffffff'
        });

        game.add.sprite(30, 350, 'dog');

        game.add.button(10, 450, 'jumpLeft', backInst);
        game.add.button(630, 450, 'jumpRight', goInst2);
        //game.add.sprite(30, 280, 'dog');
        //game.add.button(10, 400, 'jumpLeft', foo2);
        //game.add.button(600, 400, 'jumpRight', foo3);
    },


    goBackToPreviousInstruction: function () {
        game.state.start('instruction');
    },
    moveToNextInstruction: function() {
        game.state.start('instruction2');
    }
};

function backInst() {
    instructionState1.backToMenu();
}
function goInst2() {
    instructionState1.moveToNextInstruction();
}

function foo2() {
    instructionState.goBackToPreviousInstruction();
}
function foo3() {
    instructionState.moveToNextInstruction();
}