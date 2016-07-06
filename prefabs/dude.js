var Dude = function (game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'dude', 4);
    
    this.game = game;
    this.anchor.setTo(0.5);
    this.animations.add('moveLeft', [0, 1, 2, 3 ,0], 12, true, true);
    this.animations.add('moveRight', [5, 6, 7, 8, 5], 12, true, true);
    this.cursors = this.game.input.keyboard.createCursorKeys();
    this.spaceBar = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    this.direction = 'center';
    
    game.add.existing(this);
    game.physics.arcade.enable(this);
    
    this.body.collideWorldBounds = true;
    
    this.bullets = new Bullets(this.game, this);
}

Dude.prototype = Object.create(Phaser.Sprite.prototype);
Dude.prototype.constructor = Dude;

Dude.prototype.update = function () {

    if (this.cursors.left.isDown) {
        this.body.velocity.x = -200;
        this.animations.play('moveLeft');
        this.direction = 'left';
    } else if (this.cursors.right.isDown){
        this.body.velocity.x = 200;
        this.direction = 'right';
        this.animations.play('moveRight');
    } else {
        this.body.velocity.x = 0;
        this.body.velocity.y = 0;
        this.direction = 'center';
        this.animations.stop('moveLeft', true);
        this.animations.stop('moveRight', true);
        this.frame = 4;
    }
    
    if (this.spaceBar.isDown) {
        this.bullets.createRandom(this.x, this.y, this.direction);
    }
}