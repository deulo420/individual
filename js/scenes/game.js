class GameScene extends Phaser.Scene {
    constructor (){
        super('GameScene');
		this.cards = null;
		this.firstClick = null;
		this.score = 100;
		this.correct = 0;
		this.options = null;
		this.ncartes = 4;
		this.badclick = 10;
		this.temps=1000;
		this.place=800;
    }

    preload (){	
		this.load.image('back', '../resources/back.png');
		this.load.image('cb', '../resources/cb.png');
		this.load.image('co', '../resources/co.png');
		this.load.image('sb', '../resources/sb.png');
		this.load.image('so', '../resources/so.png');
		this.load.image('tb', '../resources/tb.png');
		this.load.image('to', '../resources/to.png');
	}
	
    create (){	
		
		
		var dades = localStorage.getItem("config") ;
		
		this.ncartes = this.options.cards;
		this.options = JSON.parse(dades);
		


		switch(this.options.dificulty){
			case "easy":
				this.temps = 3000;
				this.badclick = 5;
				break;
			case "normal":
				this.temps = 2000;
				this.badclick = 10;
				break;
			case "hard":
				this.temps = 200;
				this.badclick = 30;
				break;
		}

		let arraycard = ['co', 'sb', 'co', 'sb'];
		let arraycards = [];
		
		this.cameras.main.setBackgroundColor(0xBFFCFF);

		for (let i = arraycard.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[arraycard[i], arraycard[j]] = [arraycard[j], arraycard[i]];
		}
		for (let i = 0; i < this.ncartes; i++) {
			arraycards.push(arraycard [i]);
			arraycards.push(arraycard [i]);				
		}
		for (let i = arraycards.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[arraycards[i], arraycards[j]] = [arraycards[j], arraycards[i]];
		}
		
		this.place -= 100 * (this.ncartes-2)

		for (let i = 0; i < this.ncartes*2; i++) 
		{
			this.add.image(this.place, 300, arraycards[i]);
			this.place+=100;
		}
		

		this.cards = this.physics.add.staticGroup();
		this.place = 800;
		this.place -= 100 * (this.ncartes-2)

		setTimeout(() =>{

			for(let i=0;i<this.ncartes * 2;i++){
				this.cards.create(this.place,300,'back');
				this.place+=100;
			}

			let i = 0;
			this.cards.children.iterate((card)=>{
				card.card_id = arraycards[i];
				i++;
				card.setInteractive();
				card.on('pointerup', () => {
					card.disableBody(true,true);
					if (this.firstClick){
						if (this.firstClick.card_id !== card.card_id){

							setTimeout(() =>{
								
								this.score -= this.badclick;
								this.firstClick.enableBody(false, 0, 0, true, true);
								card.enableBody(false, 0, 0, true, true);
								this.firstClick = null;
							},this.temps);
							if (this.score <= 0){
								alert("Game Over");
								loadpage("../");
							}
						}
						else{
							this.correct++;
							if (this.correct >= this.ncartes){
								alert("You Win with " + this.score + " points.");
								loadpage("../");
							}
						}
						this.firstClick = null;
					}
					else{
						this.firstClick = card;
					}
				}, card);
			});
		},this.temps);
	}
	
	update (){	}
}

