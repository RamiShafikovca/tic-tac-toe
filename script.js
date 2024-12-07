const Gameboard = (() => {
    let board = [['_', '_', '_'],
    ['_', '_', '_'],
    ['_', '_', '_']];
    let xTurn = true;
    const placeMark = (row, col) => {
        if (board[row][col] == '_') {
            if (xTurn) board[row][col] = 'X';
            else board[row][col] = 'O';
            xTurn = !xTurn;
        }
    };
    const clear = () => {
        board = [['_', '_', '_'],
        ['_', '_', '_'],
        ['_', '_', '_']];
        xTurn = true;
    }
    const checkWin = () => {
        let tie = true;
        if (board[0][0] == board[1][1] && board[1][1] == board[2][2]) {
            return board[0][0];
        } if (board[0][2] == board[1][1] && board[1][1] == board[2][0]) {
            return board[0][0];
        }

        for (let i = 0; i < board.length; i++) {
            if (board[i][0] == board[i][1] && board[i][1] == board[i][2]) {
                return board[i][0];
            } else if (board[0][i] == board[i][1] && board[i][1] == board[2][i]) {
                return board[0][i];
            }
            for (let j = 0; j < board.length; j++) {
                if (board[i][j] == '_') tie = false;
            }
        }
        return tie ? 'T' : tie;
    };
    const get = (row, col) => {
        return board[row][col];
    }
    const print = () => {
        console.log(board);
    };
    return { board, placeMark, clear, checkWin, print, get };
})();

const gameDOM = (() => {
    const grid = document.createElement('div');
    grid.id = 'grid';
    document.body.appendChild(grid);
    for (let k = 0; k < 3; k++) {
        for (let m = 0; m < 3; m++) {
            const cell = document.createElement('div');
            cell.addEventListener('click', () => {
                Gameboard.placeMark(k, m);
                gameDOM.draw();
                Gameboard.print();
                console.log(Gameboard.checkWin());
            });
            grid.appendChild(cell);
        }
    };
    const draw = () => {
        for (let n = 0; n < 3; n++) {
            for (let p = 0; p < 3; p++) {
                grid.children[n*3+p].innerHTML = Gameboard.get(n, p);
            }
        }
    };
    return { draw };
})();
gameDOM.draw();