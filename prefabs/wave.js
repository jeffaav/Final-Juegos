var Wave = function (game) {
    Phaser.Group.call(this, game);
    game.add.existing(this);
    
    this.game = game;
    
    this.elapsed = 0;
    this.wave = 1;
    
    this.data = {
        red: {
            keys: ['spikeMan_jump', 'springMan_stand'],
            directions: ['left', 'right'],
            points: 10
        },
        yellow: {
            keys: ['flyMan_fly', 'sun1', 'wingMan1'],
            directions: ['left', 'right'],
            points: 15
        },
        fly: {
            keys: ['shipBeige_manned', 'shipBlue_manned', 'shipGreen_manned', 'shipPink_manned', 'shipYellow_manned'],
            directions: ['left', 'right'],
            points: 50
        },
        brown: {
            keys: ['duck_outline_brown', 'duck_outline_target_brown', 'duck_white'],
            directions: ['bottom'],
            points: 5
        },
        cream: {
            keys: ['creamChoco', 'creamMocca', 'creamPink'],
            directions: ['top'],
            points: 20
        }
    }
    
    this.enemiesPerWave = {
        1: {
            types: ['red'],
            count: 4,
            time: 1000
        },
        2: {
            types: ['red', 'yellow'],
            count: 8,
            time: 6000
        },
        3: {
            types: ['red', 'yellow', 'fly'],
            count: 16,
            time: 4000
        },
        4: {
            types: ['red', 'yellow', 'fly', 'brown'],
            count: 32,
            time: 3000
        },
        5: {
            types: ['red', 'yellow', 'fly', 'brown', 'cream'],
            count: 64,
            time: 2000
        }
    }
    
    this.actualWave = this.enemiesPerWave[this.wave];
}



Wave.prototype = Object.create(Phaser.Group.prototype);
Wave.prototype.constructor = Wave;

Wave.prototype.update = function () {
    this.elapsed += this.game.time.elapsed;
    
    if (this.elapsed >= this.actualWave.time) {
        this.elapsed = 0;
        console.log(this.countLiving());
        
        if (this.countLiving() >= this.actualWave.count) {
            this.wave++;
            this.actualWave = this.enemiesPerWave[this.wave];
        } else {
            var type = this.actualWave.types[this.game.rnd.between(0, this.actualWave.types.length -1)];
            var data = this.data[type];
            var x, y, enemy;
            
            switch (type) {
                case 'red':
                case 'yellow':
                    x = this.game.rnd.between(1, 2) == 1 ? 100 : this.game.game.width - 100;
                    y = 0;
                    enemy = this.game.add.sprite(x, y, data.keys[this.game.rnd.between(0, data.keys.length -1)]);
                    enemy.points = data.points;
                    enemy.anchor.setTo(0.5);
                    enemy.y = this.game.game.height - enemy.height;
                    this.game.physics.arcade.enable(enemy);
                    enemy.body.allowGravity = false;
                    enemy.body.immovable = true;
                    enemy.body.velocity.x = x < 300 ? 100 : -100;
                    this.add(enemy);
                    break;
            }   
        }
    }
    
}