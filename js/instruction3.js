var instructionState3 = {

    create: function () {

        game.add.text(330, 8, 'CEL GRY', {
            font: '30px Arial', fill: '#ffffff'
        });
        game.add.text(8, 50, 'Zadaniem gracza jest w ciągu 60 sekund zebranie kopert, przekazanie ich odbiorcy\n i zgromadzenie, jak najwięcej punktów.', {
            font: '20px Arial', fill: '#ffffff'
        });

        game.add.button(0, 0, 'jumpLeft', backMenu);
    },

    backToMenu: function () {
        game.state.start('menu');
    }
};