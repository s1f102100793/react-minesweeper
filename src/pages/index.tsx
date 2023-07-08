import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
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
  const newInputs: (0 | 1 | 2 | 3)[][] = JSON.parse(JSON.stringify(userInputs));

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
    // [1, 1, 1, 1, 1, 1, 1, 1, 1],
    // [1, 0, 0, 0, 0, 0, 0, 0, 1],
    // [1, 0, 0, 0, 0, 0, 0, 0, 1],
    // [1, 0, 0, 0, 0, 0, 0, 0, 1],
    // [1, 0, 0, 0, 0, 0, 0, 0, 1],
    // [1, 0, 0, 0, 0, 0, 0, 0, 1],
    // [1, 0, 0, 0, 0, 0, 0, 0, 1],
    // [1, 0, 0, 0, 0, 0, 0, 0, 1],
    // [1, 1, 1, 1, 1, 1, 1, 1, 1],
  ]);

  const board: number[][] = [
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
  ];
  // const newBoard = JSON.parse(JSON.stringify(board));

  // const isPlaying = userInputs.some((row) => row.some((input) => input !== 0));
  // const isFailing = userInputs.some((row, y) =>
  //   row.some((input, x) => input === 1 && bombMap[y][x] === 1)
  // );
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

  const bombcounts = (y: number, x: number) => {
    let bomb = 0;
    for (const w2 of directions) {
      if (
        board[y + w2[0]] !== undefined &&
        board[x + w2[1]] !== undefined &&
        bombMap[y + w2[0]][x + w2[1]] === 1 &&
        userInputs[y + w2[0]][x + w2[1]] === 0 &&
        board[y + w2[0]][x + w2[1]] === -1 &&
        board[y + w2[0]][x + w2[1]] !== 0
      ) {
        bomb++;
        // break;
      }
    }
    if (bomb === 0) {
      for (const w1 of directions) {
        board[y][x] = 0;
        if (
          board[y + w1[0]] !== undefined &&
          board[x + w1[1]] !== undefined &&
          board[y + w1[0]][x + w1[1]] === -1
        ) {
          bombcounts(y + w1[0], x + w1[1]);
        }
      }
    } else {
      console.log(bomb);
      board[y][x] = bomb;
    }
  };

  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      // 再帰関数;
      if (userInputs[y][x] === 1) {
        bombcounts(y, x);
      }
    }
  }

  console.log('board');
  console.table(board);
  console.log('bombMap');
  console.table(bombMap);
  console.log('userInputs');
  console.table(userInputs);

  let bombbb = 0;
  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      if (bombMap[y][x] === 1) {
        bombbb++;
      }
    }
  }
  const onClick = (y: number, x: number) => {
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
    }

    newInputs[y][x] = 1;
    setuserInputs(newInputs);
  };

  // setBombMap(newBomb);

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((number, x) => (
            <div
              className={number === -1 ? styles.stone : styles.number}
              key={`${y}-${x}`}
              onClick={() => onClick(y, x)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
