/* eslint-disable no-unused-vars, prefer-destructuring */
/* eslint-disable no-undef, import/no-extraneous-dependencies */
import './style.css';
import player from './player';
import board from './board';

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

/* eslint-enable no-unused-vars, prefer-destructuring */
/* eslint-enable no-undef, import/no-extraneous-dependencies */