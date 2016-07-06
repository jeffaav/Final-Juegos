var Seleccion = function (game) {
    
}

Seleccion.prototype = {
    create: function () {
        
    },
    changeLevel: function () {
        this.game.state.start('Game');
    }
}