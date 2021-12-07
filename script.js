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
        arry[0] === 'x' && arry[1] === 'x' && arry[2] === 'x' ? console.log('Winner'): false;
        arry[3] === 'x' && arry[4] === 'x' && arry[5] === 'x' ? console.log('Winner'): false;
        arry[6] === 'x' && arry[7] === 'x' && arry[8] === 'x' ? console.log('Winner'): false;
        arry[0] === 'x' && arry[3] === 'x' && arry[6] === 'x' ? console.log('Winner'): false;
        arry[1] === 'x' && arry[4] === 'x' && arry[7] === 'x' ? console.log('Winner'): false;
        arry[2] === 'x' && arry[5] === 'x' && arry[8] === 'x' ? console.log('Winner'): false;
        arry[0] === 'x' && arry[4] === 'x' && arry[8] === 'x' ? console.log('Winner'): false;
        arry[2] === 'x' && arry[4] === 'x' && arry[6] === 'x' ? console.log('Winner'): false;
        arry[0] === 'o' && arry[1] === 'o' && arry[2] === 'o' ? console.log('Winner'): false;
        arry[3] === 'o' && arry[4] === 'o' && arry[5] === 'o' ? console.log('Winner'): false;
        arry[6] === 'o' && arry[7] === 'o' && arry[8] === 'o' ? console.log('Winner'): false;
        arry[0] === 'o' && arry[3] === 'o' && arry[6] === 'o' ? console.log('Winner'): false;
        arry[1] === 'o' && arry[4] === 'o' && arry[7] === 'o' ? console.log('Winner'): false;
        arry[2] === 'o' && arry[5] === 'o' && arry[8] === 'o' ? console.log('Winner'): false;
        arry[0] === 'o' && arry[4] === 'o' && arry[8] === 'o' ? console.log('Winner'): false;
        arry[2] === 'o' && arry[4] === 'o' && arry[6] === 'o' ? console.log('Winner'): false;  
    }
}

const gamePeice = document.querySelectorAll('#boardSection');

for (let i = 0; i < gamePeice.length; i++) {
    gamePeice[i].addEventListener('click', gameBoard.placePicker);
}
gameBoard.gamePiecePrint();