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
  const board = (x: number, y: number) => {
    for (const w of directions) {
      if (newBoard[y + w[0]][x + w[1]] === 0) {
        board;
      } else {
        // そのマスを表示
      }
    }
  };

  let gameClick = 0;

  let count = 0;
  const countStones = (color: number, board: number[][]) => {
    for (const row of board) {
      for (const cell of row) {
        if (cell === color) {
          count++;
        }
      }
    }
    return count;
  };

  const onClick = (x: number, y: number) => {
    if (gameClick === 0) {
      // 一クリ目
      gameClick++;
      // ランダムに10個ボムをクリックしたマス以外で作成
      let realbomb = 0;
      while (realbomb <= bombcount) {
        // Math.random()を使って爆弾のX座標とY座標をランダムに生成します。
        const bombX = Math.floor(Math.random() * bombMap.length);
        const bombY = Math.floor(Math.random() * bombMap[0].length);

        // その場所に既に爆弾がないか確認します。もし爆弾がなければ爆弾を生成します。
        if (bombMap[bombX][bombY] !==  11) {
          // Reactの原則に従い、stateを直接操作せずに新しい配列を作成します。
          const BombMapCopy = [...bombMap];
          // ランダムに選択した場所に爆弾を配置します。
          BombMapCopy[bombX][bombY] = 11;
          // 新しい配列をstateにセットします。
          setBombMap(BombMapCopy);
          // 実際に生成された爆弾の数を増やします。
          realbomb++;
        }
      }
      console.table(bombMap);
      setBombMap(bombMap);

      // for (let i = 0; i < 11; i++) {
      //   const get = bombMap[Math.floor(Math.random() * bombMap.length)];
      // }
      // const indices = [];
      // for (let i = 0; i < bombMap.length; i++) {
      //   for (let j = 0; j < bombMap[i].length; j++) {
      //     indices.push([i, j]);
      //   }
      // }
      // for (let i = 0; i < 10; i++) {
      //   const randomIndex = Math.floor(Math.random() * indices.length);
      //   const [rowIndex, colIndex] = indices[randomIndex];

      //   // 11に設定します
      //   bombMap[rowIndex][colIndex] = 11;

      //   // 選択したインデックスは配列から削除します（重複を回避するため）
      //   indices.splice(randomIndex, 1);
      // }
      // newBomb[x][y] = 11;
      // board;

      console.log('一クリ目', x, y);
    } else {
      // 2クリ目以降
      // クリックの関数を設置（再帰関数のやつ）
      countStones(0, bombMap);
      if (bombcount === count) {
        alert('GameClear');
      }
      console.log('2クリ目以降', x, y);
    }
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
