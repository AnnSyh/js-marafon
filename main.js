let player1 = {
	name: 'SCORPION',
	hp: 3,
	img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
	weapon: [],
	attack: function () {
		console.log('Fight....');
	},
};
let player2 = {
	name: 'SONYA',
	hp: 3,
	img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
	weapon: [],
	attack: function () {
		console.log('Fight....');
	},
};

function createPlayerFirst(classname, playername, playerhp) {

	const $player1 = document.createElement('div');
	$player1.classList.add(classname);

	const $character = document.createElement('div');
	$character.classList.add('character');

	const $progressbar = document.createElement('div');
	$progressbar.classList.add('progressbar');

	const $name = document.createElement('div');
	$name.classList.add('name');
	$name.innerText = playername;

	const $life = document.createElement('div');
	$life.style.width = '100%';
	$life.style.color = 'white';
	$life.classList.add('life');
	$life.innerText = playerhp;

	const $img = document.createElement('img');
	$img.src = 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif';

	$player1.appendChild($progressbar);
	$player1.appendChild($character);
	$progressbar.appendChild($life);
	$progressbar.appendChild($name);
	$character.appendChild($img);

	const $root = document.querySelector('.root');
	$root.appendChild($player1);

	document.querySelector('.arenas').appendChild($player1);
}

function createPlayer(classname, player) {

	const $player1 = document.createElement('div');
	$player1.classList.add(classname);

	const $character = document.createElement('div');
	$character.classList.add('character');

	const $progressbar = document.createElement('div');
	$progressbar.classList.add('progressbar');

	const $name = document.createElement('div');
	$name.classList.add('name');
	$name.innerText = player.name;

	const $life = document.createElement('div');
	$life.style.width = '100%';
	$life.style.color = 'white';
	$life.classList.add('life');
	$life.innerText = player.hp;

	const $img = document.createElement('img');
	$img.src = player.img;

	$player1.appendChild($progressbar);
	$player1.appendChild($character);
	$progressbar.appendChild($life);
	$progressbar.appendChild($name);
	$character.appendChild($img);

	const $root = document.querySelector('.root');
	$root.appendChild($player1);

	document.querySelector('.arenas').appendChild($player1);
}


// createPlayerFirst('player1', 'SCORPION', 50);
// createPlayerFirst('player2', 'SUB-ZERO', 80);

createPlayer('player1', player1);
createPlayer('player2', player2);





