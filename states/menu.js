var Menu = function (game) {
    
}

Menu.prototype = {
    create: function () {
        this.background = this.game.add.tileSprite(0, 0, 2048, 2048, 'bg_layer4');
        this.background.autoScroll(-50, 0);
        this.background.anchor.setTo(0.5)

        this.title = this.game.add.text(this.game.world.centerX, this.game.world.centerY, 'Examen Parcial', {
            fontSize: '20px',
            fill: '#fff'
        });
        this.title.anchor.setTo(0.5);
        
        this.play = this.game.add.text(this.game.world.centerX, this.game.world.centerY + 100, 'Jugar', {
            fontSize: '20px',
            fill: '#fff'
        });
        this.play.anchor.setTo(0.5);
        
        this.play.inputEnabled = true;
        this.play.events.onInputDown.add(this.changeLevel, this);
    },
    changeLevel: function () {
        this.game.state.start('Seleccion');
    }
}