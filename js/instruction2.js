var instructionState2 = {

    create: function () {

        gameCourse = game.add.text((gameWidth * 0.3525), (gameHeight * 0.08333333333), 'PRZEBIEG GRY', {
            font: '30px Arial', fill: '#ffffff'
        });
        gameCourse.scale.setTo(gameWidthScale, gameHeightScale);

        gameSteering = game.add.text((gameWidth * 0.0125), (gameHeight * 0.2), 'Gracz porusza listonoszem po planszy za pomocą klawiszy strzałek:\n' +
            'góra, dół, lewo, prawo. Zbiera koperty pojawiąjące się w losowych\n miejscach. Przesuwa się w stronę odbiorcy, który też pojawia\n ' +
            'się w losowym polu planszy. W ciągu 60 sekund, listonosz musi\n zgromadzić jak najwięcej kopert. Uwaga, im więcej ich ma,\n ' +
            'tym wolniej porusza się póki nie odda ich odbiorcy. Listonosz musi\n uważać na psy, których spotkanie kończy grę.', {
            font: '25px Arial', fill: '#ffffff'
        });
        gameSteering.scale.setTo(gameWidthScale, gameHeightScale);

        inst1ButtonR = game.add.button((gameWidth * 0.0125), (gameHeight * 0.83333333333), 'jumpLeft', backInst1);
        inst1ButtonR.scale.setTo(gameWidthScale, gameHeightScale);
    },

    backToMenu: function () {
        game.state.start('instruction1');
    }
};

function backInst1() {
    instructionState2.backToMenu();
}