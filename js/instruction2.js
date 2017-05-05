var instructionState2 = {

    create: function () {

        game.add.text(280, 50, 'PRZEBIEG GRY', {
            font: '30px Arial', fill: '#ffffff'
        });
        game.add.text(10, 100, 'Gracz porusza listonoszem po planszy za pomocą\n klawiszy strzałek: góra, dół, lewo, prawo.\n ' +
            'Musi unikać psa. Zbiera koperty pojawiąjące się w losowych\n miejscach planszy. Przesuwa się w stronę odbiorcy,\n ' +
            'który też pojawia się w losowym polu planszy. W ciągu 60 sekund,\n listonosz musi zebrać jak najwięcej kopert.\n ' +
            'Jednak, uwaga, im więcej kopert zbierze,\n tym wolniej porusza się....', {
            font: '25px Arial', fill: '#ffffff'
        });

        game.add.button(10, 450, 'jumpLeft', backInst1);
        game.add.button(630, 450, 'jumpRight', goInst3);
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