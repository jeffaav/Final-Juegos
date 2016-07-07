var Bullets = function (game, element) {
    Phaser.Group.call(this, game);
    game.add.existing(this);
    
    this.keys = ['brown', 'cream', 'fly', 'red', 'yellow'];
    this.velocityX = 300;
    this.size = 0;
    this.element = element;
}

Bullets.prototype = Object.create(Phaser.Group.prototype);
Bullets.prototype.constructor = Bullets;

Bullets.prototype.createRandom = function () {
    var key = this.keys[this.game.rnd.between(1, this.keys.length)];
    var bullet = this.getFirstDead();
    if (bullet) {
        bullet.reset(this.element.x, this.element.y);
    } else {
        bullet = this.game.add.sprite(this.element.x, this.element.y, key);
        bullet.anchor.setTo(0.5);
        this.game.physics.arcade.enable(bullet);
        bullet.body.checkWorldBounds = true;
        bullet.outOfboundsKill = true;
        bullet.body.allowGravity = false;
        this.add(bullet);
    }
    
    if (this.size > 0) {
        bullet.width = this.size;
        bullet.height = this.size;
    }
    
    bullet.body.velocity.x = this.element.direction == 'left' ? this.velocityX * -1 : this.velocityX;
}
Bullets.prototype.create = function (key) {
    var bullet = this.getFirstDead();
    if (bullet) {
        bullet.reset(this.element.x, this.element.y);
    } else {
        bullet = this.game.add.sprite(this.element.x, this.element.y, key);
        bullet.anchor.setTo(0.5);
        this.game.physics.arcade.enable(bullet);
        bullet.body.checkWorldBounds = true;
        bullet.outOfboundsKill = true;
        bullet.body.allowGravity = false;
        this.add(bullet);
    }
    
    if (this.size > 0) {
        bullet.width = this.size;
        bullet.height = this.size;
    }
    
    bullet.body.velocity.x = this.element.direction == 'left' ? this.velocityX * -1 : this.velocityX;
}