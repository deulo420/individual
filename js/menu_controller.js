function start_game(){
	name = prompt("User name");
	
	
	loadpage("./html/game.html");
}

function phaser_game(){
	loadpage("./html/phasergame.html");
}

function exit (){
	if (name != ""){
		alert("Leaving " + name + "'s game");
	}
	name = "";
}

function options(){
	loadpage("./html/options.html");
}

function load(){
	loadpage("./html/load.html");
}

function play(){
	if(name == ""){
		name = prompt("Nom");
		sessionStorage.setItem("username", name);
	}	
	loadpage("./html/select_game.html");
}