var Game = function (game) {
    
}

Game.prototype = {
    create: function () {
        this.dude = new Dude(this.game, this.game.world.centerX, this.game.world.centerY);
    },
    update: function () {
        
    }
}