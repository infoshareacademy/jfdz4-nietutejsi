/**
 * Created by Goat on 2017-04-07.
 */
var bootState = {
    create: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);

        game.state.start('preload');
    }
};