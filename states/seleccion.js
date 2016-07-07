var Seleccion = function (game) {
    
}

Seleccion.prototype = {
    create: function () {
        this.background = this.game.add.tileSprite(0, 0, 2048, 2048, 'bg_layer4');
        this.background.autoScroll(-50, 0);
        this.background.anchor.setTo(0.5)
        
        this.text1 = this.game.add.text(this.game.world.centerX - 150, this.game.world.centerY, 'Normal', {
            fontSize: '40px',
            fill: '#fff'
        });
        this.text1.lifes = 4;
        this.text1.anchor.setTo(0.5);
        this.text1.inputEnabled = true;
        this.text1.events.onInputDown.add(this.changeLevel, this);
        
        this.text2 = this.game.add.text(this.game.world.centerX + 150, this.game.world.centerY, 'Parao sin polo', {
            fontSize: '40px',
            fill: '#fff'
        });
        this.text2.lifes = 1;
        this.text2.anchor.setTo(0.5);
        this.text2.inputEnabled = true;
        this.text2.events.onInputDown.add(this.changeLevel, this);
    },
    changeLevel: function (text) {
        this.game.state.start('Game', true, false, text.lifes, 1);
    }
}