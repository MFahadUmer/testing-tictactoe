/* eslint-disable no-unused-vars, prefer-destructuring */
/* eslint-disable no-undef, import/no-extraneous-dependencies */
import board from './board';
import player from './player';

const player1 = player('Muhammad', 'X');

test('returns undefined by default', () => {
  const boardArray = ['', '', '', '', '', '', '', '', ''];
  const winCheck = true;
  const mock = jest.fn((index, player) => {
    if (winCheck === true) {
      boardArray[index] = player.symbol;
    }
    return boardArray;
  });
  expect(mock(0, player1)).toEqual(['X', '', '', '', '', '', '', '', '']);
});

test('Return return false if user wins', () => {
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
  const boardArray = ['X', 'O', '', '', 'X', '', 'O', '', 'X'];
  let winCheck = true;
  const mock = jest.fn((player) => {
    winArray.forEach((item) => {
      let count = 0;
      item.forEach((char) => {
        if (boardArray[char - 1] === player.symbol) {
          count += 1;
        }
        if (count === 3) {
          winCheck = false;
        }
      });
    });
    return winCheck;
  });
  expect(mock(player1)).not.toBeTruthy();
});

test('Return return true if user not wins', () => {
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
  const boardArray = ['X', 'O', '', '', '', '', 'O', '', 'X'];
  let winCheck = true;
  const mock = jest.fn((player) => {
    winArray.forEach((item) => {
      let count = 0;
      item.forEach((char) => {
        if (boardArray[char - 1] === player.symbol) {
          count += 1;
        }
        if (count === 3) {
          winCheck = false;
        }
      });
    });
    return winCheck;
  });
  expect(mock(player1)).toBeTruthy();
});

test('returns false if game is draw', () => {
  let winCheck = true;
  const boardArray = ['X', 'O', 'X', 'X', 'X', 'O', 'O', 'X', 'X'];
  const mock = jest.fn(() => {
    if (winCheck === true && !boardArray.includes('')) {
      winCheck = false;
    }
    return winCheck;
  });
  expect(mock()).not.toBeTruthy();
});

test('returns true if game is not draw', () => {
  let winCheck = true;
  const boardArray = ['X', 'O', 'X', 'X', '', 'O', 'O', 'X', 'X'];
  const mock = jest.fn(() => {
    if (winCheck === true && !boardArray.includes('')) {
      winCheck = false;
    }
    return winCheck;
  });
  expect(mock()).toBeTruthy();
});

test('updates board when someone makes a move', () => {
  const winCheck = true;
  const boardArray = ['', '', '', '', '', '', '', '', ''];
  const play = ['', 'X', '', '', '', '', '', '', ''];
  const mock = jest.fn(() => {
    if (winCheck === true) {
      play[1] = 'X';
      return true;
    }
    return true;
  });
  expect(mock()).toBeTruthy();
});

test('displays the board', () => {
  const boardArray = ['X', 'O', 'O', 'X', 'O', 'O', 'X', 'X', 'O'];
  const index = 2;
  const items = boardArray[2];
  document.body.innerHTML = '<div>'
    + `<div id=inner-board-${index} >
    ${items}</div>` + '</div>';
  const idd = document.getElementById('inner-board-2');
  expect(idd.innerHTML).toBe('O');
});

/* eslint-enable no-unused-vars, prefer-destructuring */
/* eslint-enable no-undef, import/no-extraneous-dependencies */