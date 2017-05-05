var instructionState3 = {

    create: function () {

        gameDestinationR = game.add.text((gameWidth * 0.4125), (gameHeight * 0.01333333333), 'CEL GRY', {
            font: '30px Arial', fill: '#ffffff'
        });
        gameDestinationR.scale.setTo(gameWidthScale, gameHeightScale);

        playerRoleR = game.add.text((gameWidth * 0.01), (gameHeight * 0.08333333333), 'Zadaniem gracza jest w ciągu 60 sekund zebranie kopert, przekazanie ich odbiorcy\n i zgromadzenie, jak najwięcej punktów.', {
            font: '20px Arial', fill: '#ffffff'
        });
        playerRoleR.scale.setTo(gameWidthScale, gameHeightScale);

        menuButtonR = game.add.button(0, 0, 'jumpLeft', backMenu);
        menuButtonR.scale.setTo(gameWidthScale, gameHeightScale);
    },

    backToMenu: function () {
        game.state.start('menu');
    }
};