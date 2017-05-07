var menuState = {

    create: function () {
        game.stage.backgroundColor = '#8FD8D2';
        
        var startButton = game.add.button(Math.round((gameWidth * 0.37625)), Math.round((game.world.height - (gameHeight * 0.26666666666))), 'beginGameButton', gameStartOnClick, this);
        startButton.scale.setTo(gameWidthScale, gameHeightScale);

        var instructionButton = game.add.button(Math.round((gameWidth * 0.37625)), Math.round((game.world.height - (gameHeight * 0.19166666666))), 'instructionButton', instructionStartOnClick);
        instructionButton.scale.setTo(gameWidthScale, gameHeightScale);

        var nameLabel = game.add.text(Math.round((gameWidth * 0.1)), (Math.round(gameHeight * 0.13333333333)), 'WishBook',
          { font: '50px Arial', fill: '#ffffff' });
        nameLabel.scale.setTo(gameWidthScale, gameHeightScale);

        var undernameLabel = game.add.text(Math.round((gameWidth * 0.3125)), (Math.round(gameHeight * 0.23)), 'the Game',
          { font: '32px Arial', fill: '#ffffff'});
        undernameLabel.scale.setTo(gameWidthScale, gameHeightScale);
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