var Dude = function (game, x, y, lifes) {
    Phaser.Sprite.call(this, game, x, y, 'dude', 4);
    
    this.game = game;
    this.anchor.setTo(0.5);
    this.animations.add('moveLeft', [0, 1, 2, 3 ,0], 12, true, true);
    this.animations.add('moveRight', [5, 6, 7, 8, 5], 12, true, true);
    this.cursors = this.game.input.keyboard.createCursorKeys();
    this.spaceBar = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    this.weapons = {};
    this.weapons.A = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
    this.weapons.A.key = 'brown';
    this.weapons.S = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
    this.weapons.S.key = 'cream';
    this.weapons.D = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
    this.weapons.D.key = 'fly';
    this.weapons.F = this.game.input.keyboard.addKey(Phaser.Keyboard.F);
    this.weapons.F.key = 'red';
    this.weapons.G = this.game.input.keyboard.addKey(Phaser.Keyboard.G);
    this.weapons.G.key = 'yellow';
    
    this.direction = 'center';
    this.lifes = lifes;
    this.points = 0;
    
    game.add.existing(this);
    game.physics.arcade.enable(this);
    
    this.body.collideWorldBounds = true;
    
    this.bullets = new Bullets(this.game, this);
    
    this.lifeText = this.game.add.text(20, 20, 'Vidas: ' + this.lifes, {
        fontSize: '20px',
        fill: '#fff'
    });
    
    this.pointText = this.game.add.text(this.game.width - 140, 20, 'Puntos: ' + this.points, {
        fontSize: '20px',
        fill: '#fff'
    });
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
        //this.direction = 'center';
        this.animations.stop('moveLeft', true);
        this.animations.stop('moveRight', true);
        //this.frame = 4;
    }
    
    if (this.cursors.up.isDown && this.body.touching.down) {
        this.body.velocity.y = -600;
    }
    
    //if (this.spaceBar.isDown) {
    //    this.bullets.createRandom();
    //}
    
    if (this.weapons.A.isDown) { this.bullets.createRandom(this.weapons.A.key); }
    if (this.weapons.S.isDown) { this.bullets.createRandom(this.weapons.S.key); }
    if (this.weapons.D.isDown) { this.bullets.createRandom(this.weapons.D.key); }
    if (this.weapons.F.isDown) { this.bullets.createRandom(this.weapons.F.key); }
    if (this.weapons.G.isDown) { this.bullets.createRandom(this.weapons.G.key); }
}

Dude.prototype.updateLife = function () {
    this.lifes--;
    this.lifeText.text = 'Vidas: ' + this.lifes;
    
    if (this.lifes == 0) {
        localStorage.points = this.points;
        this.game.state.start('GameOver');
    }
}
Dude.prototype.updatePoints = function (enemyPoints) {
    this.points += enemyPoints;
    this.pointText.text = 'Puntos: ' + this.points;
}