var instructionState1 = {

    create: function () {

        charactersText = game.add.text((gameWidth * 0.4125), (gameHeight * 0.05), 'POSTACIE', {
            font: '30px Arial', fill: '#ffffff'
        });
        charactersText.scale.setTo(gameWidthScale, gameHeightScale);

        playerText = game.add.text((gameWidth * 0.1), (gameHeight * 0.2), 'LISTONOSZ - główny bohater. W ciągu 60 sekund powinien zebrać pojawiające się\n ' +
            'losowo koperty i dostarczyć do odbiorcy. Z każdą zebraną kopertą zdobywa więcej\n punktów i wolniej porusza się,' +
            'póki nie odda kopert do odbiorcy. Musi uważać na psy.', {
            font: '18px Arial', fill: '#ffffff'
        });
        playerText.scale.setTo(gameWidthScale, gameHeightScale);

        playerSprite = game.add.sprite((gameWidth * 0.0375), (gameHeight * 0.2), 'player');
        playerSprite.scale.setTo(gameWidthScale, gameHeightScale);

        randomReceiverText = game.add.text((gameWidth * 0.0375), (gameHeight * 0.45), 'ODBIORCA KOPERT - pojawia się w losowym miejscu.\n Czeka, aż listonosz przekaże mu koperty.', {
            font: '18px Arial', fill: '#ffffff'
        });
        randomReceiverText.scale.setTo(gameWidthScale, gameHeightScale);

        darkmanSprite = game.add.sprite((gameWidth * 0.625), (gameHeight * 0.45), 'darkman');
        darkmanSprite.scale.setTo(gameWidthScale, gameHeightScale);

        nutcrackerSprite = game.add.sprite((gameWidth * 0.6875), (gameHeight * 0.45), 'nutcracker');
        nutcrackerSprite.scale.setTo(gameWidthScale, gameHeightScale);

        trackerSprite = game.add.sprite((gameWidth * 0.75), (gameHeight * 0.45), 'tracker');
        trackerSprite.scale.setTo(gameWidthScale, gameHeightScale);

        warriorSprite = game.add.sprite((gameWidth * 0.8125), (gameHeight * 0.45), 'warrior');
        warriorSprite.scale.setTo(gameWidthScale, gameHeightScale);

        youngWomanSprite = game.add.sprite((gameWidth * 0.875), (gameHeight * 0.45), 'youngWoman');
        youngWomanSprite.scale.setTo(gameWidthScale, gameHeightScale);

        dogText = game.add.text((gameWidth * 0.1), (gameHeight * 0.65), 'PIES - przeszkadza listonoszowi w dostarczeniu listów do odbiorcy.', {
            font: '18px Arial', fill: '#ffffff'
        });
        dogText.scale.setTo(gameWidthScale, gameHeightScale);

        dogSprite = game.add.sprite((gameWidth * 0.0375), (gameHeight * 0.65), 'dog');
        dogSprite.scale.setTo(gameWidthScale, gameHeightScale);

        instButton = game.add.button((gameWidth * 0.0125), (gameHeight * 0.83333333333), 'jumpLeft', backInst);
        instButton.scale.setTo(gameWidthScale, gameHeightScale);
        inst2Button = game.add.button((gameWidth * 0.9125), (gameHeight * 0.83333333333), 'jumpRight', goInst2);
        inst2Button.scale.setTo(gameWidthScale, gameHeightScale);
    },


    backToMenu: function () {
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