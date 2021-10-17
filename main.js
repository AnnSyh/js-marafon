const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const $drawTitle = document.querySelector('.drawTitle');
const $loseTitle = document.querySelector('.loseTitle');


const player1 = {
    name: 'SCORPION',
    player: 1,
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: [],
    attack: function () {
        console.log('Fight....')
    },
};
const player2 = {
    name: 'SONYA',
    player: 2,
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: [],
    attack: function () {
        console.log('Fight....')
    },
};

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

    const $points = document.createElement('div');
    $points.classList.add('points');
    $points.innerText = player.hp;

    const $life = document.createElement('div');
    $life.style.width = '100%';
    $life.style.color = 'white';
    $life.classList.add('life');
    // $life.innerText = player.hp;

    const $img = document.createElement('img');
    $img.src = player.img;

    $player1.appendChild($progressbar);
    $player1.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $progressbar.appendChild($points);
    $character.appendChild($img);

    const $root = document.querySelector('.root');
    $root.appendChild($player1);

    document.querySelector('.arenas').appendChild($player1);
}

function random() {
    let a = Math.ceil(Math.random() * 20);

    return a;
}

function changeHP(player) {
    const $playerLife = document.querySelector('.player' + player.player + ' .life');
    const $playerPoints = document.querySelector('.player' + player.player + ' .points');
    const $rendom = random();

    if (player.hp <= $rendom) {
        player.hp = 0;
        $playerPoints.innerText = player.hp; //должна нарисоваться
        $loseTitle.style.display = 'block';

    } else {
        player.hp -= $rendom;
        $playerLife.style.width = player.hp + '%';
        $playerPoints.innerText = player.hp;
    }

    return player.hp;
}


$randomButton.addEventListener('click', function () {
    const $playerLife1 = document.querySelector('.player' + player1.player + ' .life');
    const $playerLife2 = document.querySelector('.player' + player2.player + ' .life');

    const $character1 = document.querySelector('.player' + player1.player + ' .character');
    const $character2 = document.querySelector('.player' + player2.player + ' .character');

    const $player1HP =  changeHP(player1);
    const $player2HP =  changeHP(player2);


     if (($player1HP == 0) && ($player2HP == 0)) {
        $playerLife1.style.width = 0 + '%';
        $playerLife2.style.width = 0 + '%';
        $randomButton.disabled = true;
        $loseTitle.style.display = 'none';
        $drawTitle.style.display = 'block';

    } else if (($player1HP == 0) && ($player2HP != 0)) {
        $character1.style.display = 'none';
        $playerLife1.style.width = 0 + '%';
        $randomButton.disabled = true;

    }else if (($player1HP != 0) && ($player2HP == 0)) {
        $character2.style.display = 'none';
        $playerLife2.style.width = 0 + '%';
        $randomButton.disabled = true;
    }


});


createPlayer('player1', player1);
createPlayer('player2', player2);
