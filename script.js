const gameBoard = {
    gamePiecesArry: ['','','','','','','','',''],
    gamePiecePrint: () => {
        let length = gameBoard.gamePiecesArry.length;
        for (i = 0; i<length; i++) {
            document.getElementById('sec'+i).innerHTML = gameBoard.gamePiecesArry[i];
        }
    },
    playerTurn: 'playerOne',
    placePicker: (e) => {
        let data = e.target.getAttribute('data-section');
        gameBoard.playerTurn === 'playerOne' ? 
            (gameBoard.gamePiecesArry.splice(data,1,'x'), gameBoard.playerTurn = 'playerTwo') :
            (gameBoard.gamePiecesArry.splice(data,1,'o'), gameBoard.playerTurn = 'playerOne');
        gameBoard.gamePiecePrint();
        gameBoard.winnerCheck();
    },
    winnerCheck: () => {
        let arry = gameBoard.gamePiecesArry;
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
    winnerMessage: () => {
        let msg = document.querySelector('#msg');
        gameBoard.playerTurn === 'playerOne' ? 
            msg.innerHTML = 'O is the Winner' :
            msg.innerHTML = 'X is the Winner' ;
        let popup = document.querySelector('#msgCntr');
        popup.style.display = 'flex';
    },
    newGame: () => {
        gameBoard.gamePiecesArry = ['','','','','','','','',''];
        gameBoard.gamePiecePrint();
        let popup = document.querySelector('#msgCntr');
        popup.style.display = 'none';
    }
}

const popUpBckgrd = document.querySelector('#msgCntr');
popUpBckgrd.addEventListener('click', gameBoard.newGame);

const gamePeice = document.querySelectorAll('#boardSection');

for (let i = 0; i < gamePeice.length; i++) {
    gamePeice[i].addEventListener('click', gameBoard.placePicker);
}
gameBoard.gamePiecePrint();