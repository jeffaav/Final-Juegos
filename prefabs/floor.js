var Floor = function (game) {
    Phaser.Group.call(this, game);
    game.add.existing(this);
    
    this.n = 14;
    this.game = game;
    
    console.log(this.game);
    
    for (var i = 0; i < this.n; i++) {
        var floor = this.game.add.sprite(0, this.game.game.height, 'choco');
        floor.x = i * floor.width;
        floor.y = this.game.game.height - floor.height;

        this.game.physics.arcade.enable(floor);
        //floor.body.checkWorldBounds = true;
        //floor.outOfboundsKill = true;
        floor.body.immovable = true;
        floor.body.allowGravity = false;
        
        this.add(floor);
    }
}


Floor.prototype = Object.create(Phaser.Group.prototype);
Floor.prototype.constructor = Floor;