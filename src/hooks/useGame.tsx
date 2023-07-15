import { useEffect, useState } from 'react';
import { useBoard } from './useBoard';

export const useGame = () => {
  const { board, userInputs, bombMap, setuserInputs, setBombMap, newInputs } = useBoard();
  const [timer, setTimer] = useState<number>(0);

  const bombcount = 10;
  let bombcount2 = bombcount;
  const directions: number[][] = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
  ];

  const countSurroundingBombs = (y: number, x: number, w2: number[]): boolean => {
    return (
      board[y + w2[0]] !== undefined &&
      board[x + w2[1]] !== undefined &&
      bombMap[y + w2[0]][x + w2[1]] === 1
    );
  };

  const sValidAndEmptySpace = (y: number, x: number, w1: number[]) => {
    return (
      board[y + w1[0]] !== undefined &&
      board[x + w1[1]] !== undefined &&
      board[y + w1[0]][x + w1[1]] === -1 &&
      board[y][x] !== 11
    );
  };

  const updateBoardAndBombCounts = (y: number, x: number, bomb: number) => {
    if (bomb === 0) {
      for (const w1 of directions) {
        board[y][x] = 0;
        if (sValidAndEmptySpace(y, x, w1)) {
          bombcounts(y + w1[0], x + w1[1]);
        }
      }
    } else {
      board[y][x] = bomb;
    }
  };

  const bombcounts = (y: number, x: number) => {
    let bomb = 0;
    for (const w2 of directions) {
      if (countSurroundingBombs(y, x, w2)) {
        bomb++;
      }
    }
    if (board[y][x] !== 11) {
      updateBoardAndBombCounts(y, x, bomb);
    }
  };

  let gameover = 0;
  let clearcount = 0;
  const revealAllBombs = () => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (bombMap[i][j] === 1) {
          board[i][j] = 11;
          gameover = 1;
        }
      }
    }
  };

  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      if (userInputs[y][x] === 1 && bombMap[y][x] === 1) {
        revealAllBombs();
        continue;
      }
      if (userInputs[y][x] === 1) {
        bombcounts(y, x);
      }
      if (userInputs[y][x] === 2) {
        board[y][x] = 10;
        bombcount2--;
      } else if (userInputs[y][x] === 3) {
        board[y][x] = 9;
      }
    }
  }

  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      if (board[y][x] === -1 || board[y][x] === 10 || board[y][x] === 9) {
        clearcount++;
        // console.log('clearcount', clearcount);
      }
    }
  }

  if (clearcount === bombcount2) {
    for (let y = 0; y < 9; y++) {
      for (let x = 0; x < 9; x++) {
        if (bombMap[y][x] === 1) {
          board[y][x] = 10;
        }
      }
    }
  }

  const onClick = (y: number, x: number, e: React.MouseEvent<HTMLDivElement>) => {
    console.log('押されている');
    if (e.button === 2) {
      // 右クリック
      e.preventDefault();
      const newInputs = [...userInputs];
      const currentValue = newInputs[y][x];
      if (currentValue === 0) newInputs[y][x] = 2;
      else if (currentValue === 2) newInputs[y][x] = 3;
      else if (currentValue === 3) newInputs[y][x] = 0;
      setuserInputs(newInputs); // userInputsを更新
    } else {
      if (userInputs[y][x] === 0) {
        if (bombbb === 0) {
          // 一クリ目
          // ランダムに10個ボムをクリックしたマス以外で作成
          let realbomb = 0;
          while (realbomb < bombcount) {
            const bombX = Math.floor(Math.random() * bombMap.length);
            const bombY = Math.floor(Math.random() * bombMap[0].length);
            if (bombMap[bombY][bombX] !== 1 && `${bombY}${bombX}` !== `${y}${x}`) {
              const BombMapCopy = [...bombMap];
              BombMapCopy[bombY][bombX] = 1;
              realbomb++;
              setBombMap(BombMapCopy);
            }
          }
          console.log('一クリ目', y, x);
          setTimer(0);
        }
        newInputs[y][x] = 1;
        setuserInputs(newInputs);
      }
    }
  };

  let bombbb = 0;
  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      if (bombMap[y][x] === 1) {
        bombbb++;
      }
    }
  }

  const resetboard = () => {
    for (let y = 0; y < 9; y++) {
      for (let x = 0; x < 9; x++) {
        board[y][x] = -1;
        userInputs[y][x] = 0;
        bombMap[y][x] = 0;
      }
    }
    bombbb = 0;
    setTimer(0);
  };

  console.log('board');
  console.table(board);
  console.log('bombMap');
  console.table(bombMap);
  console.log('userInputs');
  console.table(userInputs);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (bombbb > 0 && clearcount !== bombcount2 && gameover === 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [bombbb, clearcount, bombcount, bombcount2, gameover]);

  return { clearcount, gameover, timer, onClick, setTimer, bombcount2, resetboard, board };
};
