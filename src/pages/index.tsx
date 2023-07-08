import { useState } from 'react';
import styles from './index.module.css';

const Home = (y: number, x: number) => {
  // 0 -> 見クリック
  // 1 -> 左クリック
  // 2 -> はてな
  // 3 -> 旗
  const [userInputs, setuserInputs] = useState<(0 | 1 | 2 | 3)[][]>([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const bombcount = 10;
  const newBoard: number[][] = JSON.parse(JSON.stringify(userInputs));

  const [bombMap, setBombMap] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  const newBomb: number[][] = JSON.parse(JSON.stringify(bombMap));

  const isPlaying = userInputs.some((row) => row.some((input) => input !== 0));
  const isFailing = userInputs.some((row, y) =>
    row.some((input, x) => input === 1 && bombMap[y][x] === 1)
  );
  //  -1 -> 石
  // 0 -> 画像無しセル
  // 1~8 -> 数字セル
  // 9 -> 石+はてな
  // 10 -> 石+旗
  // 11 -> ボムセル

  // borad = userInputs + bombMap

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

  //再帰関数で0を押したら全部表示を切り替える
  const clickBoard = (y: number, x: number) => {
    if (board[y][x] === 0) {
      for (const w of directions) {
        if (
          newBoard[y + w[0]] !== undefined &&
          newBoard[x + w[1]] !== undefined &&
          userInputs[y + w[0]][x + w[1]] !== 1
        ) {
          userInputs[y + w[0]][x + w[1]] = 1;
          clickBoard(y + w[0], x + w[1]);
        }
      }
    } else {
      userInputs[y][x] = 1;
      console.log('elseが機能している');
    }
  };

  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      for (const w of directions) {
        if (board[y + w[0]] !== undefined && bombMap[y + w[0]][x + w[1]] === 1) {
          if (bombMap[y][x] !== 1) {
            board[y][x]++;
          } else {
            continue;
          }
        }
      }
    }
  }

  console.log('board');
  console.table(board);

  // if (userInputs[y][x] === 1) {
  //   if (bombMap[y][x] === 1) {
  //     alert('Gameover');
  //   } else {
  //     clickBoard(y, x);
  //   }
  // }

  let gameClick = 0;

  const onClick = (y: number, x: number) => {
    if (gameClick === 0) {
      // 一クリ目
      gameClick++;
      // ランダムに10個ボムをクリックしたマス以外で作成
      let realbomb = 0;
      while (realbomb < bombcount) {
        const bombX = Math.floor(Math.random() * bombMap.length);
        const bombY = Math.floor(Math.random() * bombMap[0].length);
        if (bombMap[bombY][bombX] !== 1 && `${bombY}${bombX}` !== `${y}${x}`) {
          const BombMapCopy = [...bombMap];
          BombMapCopy[bombY][bombX] = 1;
          setBombMap(BombMapCopy);
          realbomb++;
        }
      }

      clickBoard(y, x);
      console.log('bombMap');
      console.table(bombMap);
      setBombMap(bombMap);
      console.log('一クリ目', y, x);
    } else {
      // 2クリ目以降
      // クリックの関数を設置（再帰関数のやつ）
      clickBoard(y, x);
      console.log('2クリ目以降', y, x);
    }
    userInputs[y][x] = 1;
    console.log('userInputs');
    console.table(userInputs);
    setuserInputs(userInputs);
  };

  // setBombMap(newBomb);

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((color, x) => (
            <div className={styles.cell} key={`${y}-${x}`} onClick={() => onClick(y, x)} />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
