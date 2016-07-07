var GameOver = function (game) {
    
}

GameOver.prototype = {
    create: function () {
        this.background = this.game.add.tileSprite(0, 0, 2048, 2048, 'bg_layer4');
        this.background.autoScroll(-50, 0);
        this.background.anchor.setTo(0.5)
        
        this.obtainedPoints = this.game.add.text(this.game.world.centerX, this.game.world.centerY, 'Puntaje obtenido: ' + localStorage.points, {
            fontSize: '20px',
            fill: '#fff'
        });
    }
}