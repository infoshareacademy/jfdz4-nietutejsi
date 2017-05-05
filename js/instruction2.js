var instructionState2 = {

    create: function () {

        gameCourse = game.add.text((gameWidth * 0.4125), (gameHeight * 0.08333333333), 'PRZEBIEG GRY', {
            font: '50px Arial', fill: '#ffffff'
        });
        gameCourse.scale.setTo(gameWidthScale, gameHeightScale);

        gameSteering = game.add.text((gameWidth * 0.0125), (gameHeight * 0.16666666666), 'Gracz porusza listonoszem po planszy za pomocą klawiszy strzałek: góra, dół, lewo, prawo.\n ' +
            'Unika psa. Zbiera koperty pojawiąjące się w losowych miejscach planszy. Przesuwa się w strone odbiorcy,\n ' +
            'który też pojawia się w losowym polu planszy. W ciągu 60 sekund, listonosz musi zebrać jak najwięcej kopert.\n ' +
            'Jednak, uwaga, im więcej kopert zbierze, tym wolniej porusza się....', {
            font: '30px Arial', fill: '#ffffff'
        });
        gameSteering.scale.setTo(gameWidthScale, gameHeightScale);

        inst1ButtonR = game.add.button((gameWidth * 0.0125), (gameHeight * 0.83333333333), 'jumpLeft', backInst1);
        inst1ButtonR.scale.setTo(gameWidthScale, gameHeightScale);
        inst3Button = game.add.button((gameWidth * 0.9125), (gameHeight * 0.83333333333), 'jumpRight', goInst3);
        inst3Button.scale.setTo(gameWidthScale, gameHeightScale);
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