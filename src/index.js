import './style.css';
const player = (name, symbol) => ({ name, symbol });

const board = (() => {
  let winCheck = true;
  const boardArray = ['', '', '', '', '', '', '', '', ''];
  const winArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [3, 5, 7],
    [1, 5, 9],
  ];

  const updateBoard = (index, player) => {
    if (winCheck === true) {
      boardArray[index] = player.symbol;
    }
  };

  const displayBoard = () => {
    boardArray.forEach((items, index) => {
      document.getElementById(`inner-board-${index}`).textContent = `${items}`;
    });
  };

  const winStatus = (player) => {
    winArray.forEach((item) => {
      let count = 0;
      item.forEach((char) => {
        if (boardArray[char - 1] === player.symbol) {
          count += 1;
        }
        if (count === 3) {
          winCheck = false;
          document.getElementById('winstatus').textContent = `Congratulations ${player.name}! You Win `;
        }
      });
    });
  };

  const drawStatus = () => {
    if (winCheck === true && !boardArray.includes('')) {
      document.getElementById('winstatus').textContent = 'Game Draw! Try Again.';
    }
  };
  return {
    boardArray, updateBoard, displayBoard, winStatus, drawStatus,
  };
})();

const playGame = () => {
  let firstPlayerName;
  let secondPlayerName;
  let playerOne;
  let playerTwo;
  let currentPlayer;
  let count = 0;
  const switchPlayer = () => {
    if (count === 1) {
      count -= 1;
      currentPlayer = playerTwo;
    } else {
      count += 1;
      currentPlayer = playerOne;
    }
  };

  document.getElementById('playgame').addEventListener('click', () => {
    firstPlayerName = document.getElementById('name1').value;
    secondPlayerName = document.getElementById('name2').value;
    document.getElementById('outer-board').style.display = 'grid';
    playerOne = player(firstPlayerName, 'X');
    playerTwo = player(secondPlayerName, 'O');
    document.getElementById('playgame').style.display = 'none';
    document.getElementById('reloadbutton').style.display = 'block';
  });

  document.getElementById('reloadbutton').addEventListener('click', () => {
    window.location.reload();
  });

  const play = (event) => {
    const index = event.target.getAttribute('data-index');
    if (board.boardArray[index] === '') {
      switchPlayer();
      board.updateBoard(index, currentPlayer);
      board.displayBoard();
      board.winStatus(currentPlayer);
      board.drawStatus();
    }
  };
  document.getElementById('outer-board').addEventListener('click', play);
};

playGame();
