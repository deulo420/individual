function start_game(){
	loadpage("../html/game.html");
}

function phaser_game(){
	loadpage("../html/phasergame.html");
}
function menu (){
	loadpage("..");
}
function exit (){
	if (name != ""){
		alert("Leaving " + name + "'s game");
	}
	name = "";	
	loadpage("..");
}

function options(){
	loadpage("../html/options.html");
}

function optionsMenu(){
	loadpage("../html/optionsMenu.html");
}
function load(){
	loadpage("./html/load.html");
}

function play(){
	if(name == ""){
		name = prompt("Nom");
		sessionStorage.setItem("username", name);
	}	
	loadpage("./html/select.html");
}	

function score(){
	loadpage("./html/scoreboard.html")
}