var menuState = {

    create: function () {
        
        var startButton = game.add.button(301, game.world.height - 160, 'beginGameButton', gameStartOnClick, this);
        var instructionButton = game.add.button(301, game.world.height - 115, 'instructionButton', instructionStartOnClick);
        var nameLabel = game.add.text(80, 80, 'WishBook',
          { font: '50px Arial', fill: '#ffffff' });

        var undernameLabel = game.add.text(250, 138, 'the Game',
          { font: '32px Arial', fill: '#ffffff'});
    },
    
    start: function () {
        game.state.start('play');
    },
    instruction: function() {
        game.state.start('instruction');
    }
};

function gameStartOnClick() {
    menuState.start();
}

function instructionStartOnClick() {
    menuState.instruction();
}