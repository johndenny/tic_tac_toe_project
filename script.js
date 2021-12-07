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
    },
    winnerCheck: () => {

    }
}

const gamePeice = document.querySelectorAll('#boardSection');

for (let i = 0; i < gamePeice.length; i++) {
    gamePeice[i].addEventListener('click', gameBoard.placePicker);
}
gameBoard.gamePiecePrint();