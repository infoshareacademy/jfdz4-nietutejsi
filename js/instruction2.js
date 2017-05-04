var instructionState2 = {

    create: function () {

        game.add.text(330, 50, 'PRZEBIEG GRY', {
            font: '50px Arial', fill: '#ffffff'
        });
        game.add.text(10, 100, 'Gracz porusza listonoszem po planszy za pomocą klawiszy strzałek: góra, dół, lewo, prawo.\n ' +
            'Unika psa. Zbiera koperty pojawiąjące się w losowych miejscach planszy. Przesuwa się w strone odbiorcy,\n ' +
            'który też pojawia się w losowym polu planszy. W ciągu 60 sekund, listonosz musi zebrać jak najwięcej kopert.\n ' +
            'Jednak, uwaga, im więcej kopert zbierze, tym wolniej porusza się....', {
            font: '30px Arial', fill: '#ffffff'
        });

        game.add.button(10, 500, 'jumpLeft', backInst1);
        game.add.button(730, 500, 'jumpRight', goInst3);
    },

    backToMenu: function () {
        game.state.start('instruction1');
    },
    moveToNextInstruction: function() {
        game.state.start('instruction3');
    }
};

function backInst1() {
    instructionState2.backToMenu();
}
function goInst3() {
    instructionState2.moveToNextInstruction();
}