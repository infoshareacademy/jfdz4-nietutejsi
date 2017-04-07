/**
 * Created by Goat on 2017-04-07.
 */
var menuState = {

    create: function () {
        var nameLabel = game.add.text(80, 80, 'Lorem Ipsum game',
                                            {font: '50px Arial', fill: '#ffffff'});

        var startLabel = game.add.text(80, 80, 'Lorem Ipsum game',
                                                'press "W" key to start',
                                            {font: '25px Arial', fill: '#ffffff'});

        var wKey = game.input.keyboard.addKey(Phaser.Keyboard.W);

        wKey.onDown.addOnce(this.start, this);
    },

    start: function() {
        game.state.start('play');
    }
};
