var Preload = function (game) {
    
}

Preload.prototype = {
    preload: function () {
        
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.physics.arcade.gravity.y = 1000;
        
        this.game.load.image('duck_outline_brown', 'assets/brown/duck_outline_brown.png');
        this.game.load.image('duck_outline_target_brown', 'assets/brown/duck_outline_target_brown.png');
        this.game.load.image('duck_white', 'assets/brown/duck_white.png');
        this.game.load.image('brown', 'assets/bullets/brown.png');
        this.game.load.image('cream', 'assets/bullets/cream.png');
        this.game.load.image('fly', 'assets/bullets/fly.png');
        this.game.load.image('red', 'assets/bullets/red.png');
        this.game.load.image('yellow', 'assets/bullets/yellow.png');
        this.game.load.image('creamChoco', 'assets/cream/creamChoco.png');
        this.game.load.image('creamMocca', 'assets/cream/creamMocca.png');
        this.game.load.image('creamPink', 'assets/cream/creamPink.png');
        this.game.load.image('choco', 'assets/floor/choco.png');
        this.game.load.image('shipBeige_manned', 'assets/fly/shipBeige_manned.png');
        this.game.load.image('shipBlue_manned', 'assets/fly/shipBlue_manned.png');
        this.game.load.image('shipGreen_manned', 'assets/fly/shipGreen_manned.png');
        this.game.load.image('shipPink_manned', 'assets/fly/shipPink_manned.png');
        this.game.load.image('shipYellow_manned', 'assets/fly/shipYellow_manned.png');
        this.game.load.image('spikeMan_jump', 'assets/red/spikeMan_jump.png');
        this.game.load.image('springMan_stand', 'assets/red/springMan_stand.png');
        this.game.load.image('flyMan_fly', 'assets/yellow/flyMan_fly.png');
        this.game.load.image('sun1', 'assets/yellow/sun1.png');
        this.game.load.image('wingMan1', 'assets/yellow/wingMan1.png');
        this.game.load.image('bg_layer4', 'assets/bg_layer4.png');
        this.game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
        
    },
    create: function () {
        this.game.state.start('Menu');
    }
}