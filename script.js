const Gameboard = (() => {
    let board = [['_', '_', '_'],
    ['_', '_', '_'],
    ['_', '_', '_']];
    let xTurn = true;
    const placeMark = (row, col) => {
         
        if (xTurn) board[row][col] = 'X';
        else board[row][col] = 'O';
        xTurn = !xTurn;
    };
    const checkWin = () => {
        tie = true;
        if (board[0][0] == board[1][1] == board[2][2]) {
            return board[1][1];
        } else if (board[0][2] == board[1][1] == board[2][0]) {
            return board[1][1];
        }
        for (let i = 0; i < board.length; i++) {

            if (board[i][0] == board[i][1] == board[i][2]) {
                return board[i][0];
            } else if (board[0][i] == board[1][i] == board[2][i]) {
                return board[0][i];
            }
        }
        for (let j = 0; j < board.length; j++) {
            if (board[i][j] = ' ') tie = false;
        }
        if (tie) {
            return 'T';
        } else {
            return false;
        }
    };
    const get = (row, col) => {
        return board[row][col];
    }
    const print = () => {
        console.log(board);
    };
    return { placeMark, checkWin, print, get };
})();

const gameDOM = (() => {
    const grid = document.createElement('div');
    grid.id = 'grid';
    document.body.appendChild(grid);
    for (let k = 0; k < 3; k++) {
        const row = document.createElement('div');
        grid.appendChild(row);
        for (let m = 0; m < 3; m++) {
            const cell = document.createElement('p');
            cell.innerHTML = ' ';
            row.appendChild(cell);
        }
    };
    const draw = () => {
        for (let n = 0; n < 3; n++) {
            for (let p = 0; p < 3; p++) {
                grid.children[n].children[p].innerHTML = Gameboard.get(n, p);
            }
        }
    };
    return { draw };
})();
gameDOM.draw();