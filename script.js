const gameBoard = {
    gamePiecesArry: ['','','','','','','','',''],
    computerArry: [0,1,2,3,4,5,6,7,8],
    gamePiecePrint: () => {
        let length = gameBoard.gamePiecesArry.length;
        for (i = 0; i<length; i++) {
            document.getElementById('sec'+i).innerHTML = gameBoard.gamePiecesArry[i];
        }
    },
    playerNamePrint: () => {
        document.getElementById('playerNameX').innerHTML = playerOne.name + " is X";
        document.getElementById('playerNameO').innerHTML = playerTwo.name + " is O";
    },
    playerTurn: 'playerOne',
    placePicker: (e) => {
        let data = e.target.getAttribute('data-section');
        let compLocation = gameBoard.computerArry.indexOf(parseInt(data));
        gameBoard.gamePiecesArry.splice(data,1,'x'), 
        gameBoard.computerArry.splice(compLocation,1),
        gameBoard.gamePiecePrint();
        setTimeout(gameBoard.computerTurn(), 1000);
        gameBoard.gamePiecePrint();
        gameBoard.winnerCheck();
    },
    computerTurn: () => {
        let position = gameBoard.getRandomInt(gameBoard.computerArry.length);
        console.log(gameBoard.computerArry.length);
        console.log(position);
        let openSpace = gameBoard.computerArry[position];
        gameBoard.computerArry.splice(position,1);
        gameBoard.gamePiecesArry.splice(openSpace,1,'o');
    },
    getRandomInt: (max) => {
        return Math.floor(Math.random() * max);
    },
    winnerCheck: () => {
        let arry = gameBoard.gamePiecesArry;
        let arryFull = gameBoard.gamePiecesArry.indexOf('');
        arryFull === -1 ? gameBoard.tieMessage(): false;
        arry[0] === 'x' && arry[1] === 'x' && arry[2] === 'x' ? gameBoard.winnerMessage(): false;
        arry[3] === 'x' && arry[4] === 'x' && arry[5] === 'x' ? gameBoard.winnerMessage(): false;
        arry[6] === 'x' && arry[7] === 'x' && arry[8] === 'x' ? gameBoard.winnerMessage(): false;
        arry[0] === 'x' && arry[3] === 'x' && arry[6] === 'x' ? gameBoard.winnerMessage(): false;
        arry[1] === 'x' && arry[4] === 'x' && arry[7] === 'x' ? gameBoard.winnerMessage(): false;
        arry[2] === 'x' && arry[5] === 'x' && arry[8] === 'x' ? gameBoard.winnerMessage(): false;
        arry[0] === 'x' && arry[4] === 'x' && arry[8] === 'x' ? gameBoard.winnerMessage(): false;
        arry[2] === 'x' && arry[4] === 'x' && arry[6] === 'x' ? gameBoard.winnerMessage(): false;
        arry[0] === 'o' && arry[1] === 'o' && arry[2] === 'o' ? gameBoard.winnerMessage(): false;
        arry[3] === 'o' && arry[4] === 'o' && arry[5] === 'o' ? gameBoard.winnerMessage(): false;
        arry[6] === 'o' && arry[7] === 'o' && arry[8] === 'o' ? gameBoard.winnerMessage(): false;
        arry[0] === 'o' && arry[3] === 'o' && arry[6] === 'o' ? gameBoard.winnerMessage(): false;
        arry[1] === 'o' && arry[4] === 'o' && arry[7] === 'o' ? gameBoard.winnerMessage(): false;
        arry[2] === 'o' && arry[5] === 'o' && arry[8] === 'o' ? gameBoard.winnerMessage(): false;
        arry[0] === 'o' && arry[4] === 'o' && arry[8] === 'o' ? gameBoard.winnerMessage(): false;
        arry[2] === 'o' && arry[4] === 'o' && arry[6] === 'o' ? gameBoard.winnerMessage(): false;

    },
    tieMessage: () => {
        document.querySelector('#msg').innerHTML = 'Tie. No One Wins.';
        let popup = document.querySelector('#msgCntr');
        popup.style.display = 'flex';
    },
    winnerMessage: () => {
        let msg = document.querySelector('#msg');
        gameBoard.playerTurn === 'playerOne' ? 
            msg.innerHTML = playerTwo.name+' is the Winner' :
            msg.innerHTML = playerOne.name+' is the Winner' ;
        let popup = document.querySelector('#msgCntr');
        popup.style.display = 'flex';
    },
    newGame: () => {
        gameBoard.gamePiecesArry = ['','','','','','','','',''];
        gameBoard.computerArry = [0,1,2,3,4,5,6,7,8];
        playerOne.name = document.querySelector('input#playerXName').value;
        playerTwo.name = document.querySelector('input#playerOName').value;
        let popup = document.querySelector('#msgCntr');
        popup.style.display = 'none';
        let board = document.querySelector('#boardCntr');
        board.style.display = 'flex';
        gameBoard.gamePiecePrint();
        gameBoard.playerNamePrint();
        
        
    },
    newGameMenu: () => {
        let form = document.querySelector('#myForm');
        let popup = document.querySelector('#msgCntr');
        form.style.display = 'flex';
        popup.style.display = 'flex';
    }
}

const playerOne = {
    name: 'Player One',
    player: 'Human'
}

const playerTwo = {
    name: 'Player Two',
    player: 'Computer'
}

const gamePeice = document.querySelectorAll('#boardSection');
for (let i = 0; i < gamePeice.length; i++) {
    gamePeice[i].addEventListener('click', gameBoard.placePicker);
}
gameBoard.newGameMenu();