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
    [0, -1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
  ];

  //再帰関数で0を押したら全部表示を切り替える
  const board = (y: number, x: number) => {
    if (bombMap[y][x] === 11) {
      alert('Gameover');
    } else {
      if (bombMap[y][x] === 0) {
        for (const w of directions) {
          userInputs[y + w[0]][x + w[1]] === 1;
          board(y + w[0], x + w[1]);
        }
      } else {
        userInputs[y][x] === 1;
      }
    }
  };

  let gameClick = 0;

  const onClick = (x: number, y: number) => {
    if (gameClick === 0) {
      // 一クリ目
      gameClick++;
      // ランダムに10個ボムをクリックしたマス以外で作成
      let realbomb = 0;
      while (realbomb < bombcount) {
        const bombX = Math.floor(Math.random() * bombMap.length);
        const bombY = Math.floor(Math.random() * bombMap[0].length);
        if (bombMap[bombX][bombY] !== 11 && `${bombX}${bombY}` !== `${x}${y}`) {
          const BombMapCopy = [...bombMap];
          BombMapCopy[bombX][bombY] = 11;
          setBombMap(BombMapCopy);
          realbomb++;
        }
      }

      for (let y = 0; y < 9; y++) {
        for (let x = 0; x < 9; x++) {
          for (const w of directions) {
            if (bombMap[y + w[0]] !== undefined && bombMap[y + w[0]][x + w[1]] === 11) {
              if (bombMap[y][x] !== 11) {
                bombMap[y][x]++;
              } else {
                continue;
              }
            }
          }
        }
      }

      board(y, x);
      console.table(bombMap);
      setBombMap(bombMap);
      console.log('一クリ目', y, x);
    } else {
      // 2クリ目以降
      // クリックの関数を設置（再帰関数のやつ）
      board(x, y);
      // countStones(0, bombMap);
      // if (bombcount === count) {
      //   alert('GameClear');
      // }
      console.log('2クリ目以降', y, x);
    }
    userInputs[y][x] = 1;
    console.table(userInputs);
    setuserInputs(userInputs);
  };

  // setBombMap(newBomb);

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {userInputs.map((row, y) =>
          row.map((color, x) => (
            <div className={styles.cell} key={`${x}-${y}`} onClick={() => onClick(x, y)} />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
