var config = {
    type: Phaser.AUTO,
    width: window.innerWidth -10,
    height: 600,
    parent: 'game_area',
	physics: {
		default: 'arcade',
		arcade: {
			gravity: {y: 0},
			debug: false
		}
	},
	transparent: true,
    scene: [ GameScene ]
};

var game = new Phaser.Game(config);

