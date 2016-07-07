var Game = function (game) {
    
}

Game.prototype = {
    init: function (lifes) {
        this.lifes = lifes;
    },
    create: function () {
        this.background = this.game.add.tileSprite(0, 0, 2048, 2048, 'bg_layer4');
        this.background.autoScroll(-50, 0);
        this.background.anchor.setTo(0.5)
        
        
    
        this.dude = new Dude(this.game, this.game.world.centerX, this.game.world.centerY, this.lifes);
        
        this.floor = new Floor(this, 100, this.game.height - 150);
        
        this.enemies = new Wave(this);
        
        THAT = this;
    },
    update: function () {
        this.game.physics.arcade.collide(this.dude, this.floor);
        this.game.physics.arcade.overlap(this.dude, this.enemies, function (dude, enemy) {
            dude.updateLife();
            enemy.kill();
        }, null, this);
        this.game.physics.arcade.overlap(this.dude.bullets, this.enemies, function (bullet, enemy) {
            this.dude.updatePoints(enemy.points);
            enemy.kill();
            bullet.kill();
        }, null, this);
    }
}