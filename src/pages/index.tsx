import { useEffect, useState } from 'react';
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
  let bombcount = 10;
  const bombcount2 = bombcount;
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
  //  -1 -> 石
  // 0 -> 画像無しセル
  // 1~8 -> 数字セル
  // 9 -> 石+はてな
  // 10 -> 石+旗
  // 11 -> ボムセル
  // borad = userInputs + bombMap

  const [timer, setTimer] = useState<number>(0);

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
        bombMap[y + w2[0]][x + w2[1]] === 1
      ) {
        bomb++;
      }
    }
    if (board[y][x] !== 11) {
      if (bomb === 0) {
        for (const w1 of directions) {
          board[y][x] = 0;
          if (
            board[y + w1[0]] !== undefined &&
            board[x + w1[1]] !== undefined &&
            board[y + w1[0]][x + w1[1]] === -1 &&
            board[y][x] !== 11
          ) {
            bombcounts(y + w1[0], x + w1[1]);
          }
        }
      } else {
        board[y][x] = bomb;
      }
    }
  };

  let gameover = 0;
  let clearcount = 0;
  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      if (userInputs[y][x] === 1) {
        if (bombMap[y][x] === 1) {
          for (let y = 0; y < 9; y++) {
            for (let x = 0; x < 9; x++) {
              if (bombMap[y][x] === 1) {
                board[y][x] = 11;
                gameover = 1;
              }
            }
          }
          continue;
        } else {
          bombcounts(y, x);
        }
      }
      if (userInputs[y][x] === 2) {
        board[y][x] = 10;
        bombcount--;
      } else if (userInputs[y][x] === 3) {
        board[y][x] = 9;
      }
      // if (bombMap[y][x] === 1) {
      //   if (board[y][x] === -1 || board[y][x] === 10) {
      //     clearcount++;
      //     console.log('clearcount',clearcount)
      //   }
      // }
    }
  }

  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      if (board[y][x] === -1 || board[y][x] === 10 || board[y][x] === 9) {
        clearcount++;
        console.log('clearcount', clearcount);
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
    alert('GameClear');
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
  const onClick = (y: number, x: number, e: React.MouseEvent<HTMLDivElement>) => {
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

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (bombbb > 0 && clearcount !== bombcount2 && gameover === 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [bombbb, clearcount, bombcount, bombcount2, gameover]);

  return (
    <div className={styles.container}>
      <div className={styles.boardboard}>
        <div className={styles.upper}>
          <div className={styles.left}> {String(bombcount).padStart(3, '0')} </div>
          <div
            className={
              clearcount === bombcount2
                ? styles.clear
                : gameover === 1
                ? styles.over
                : styles.middle
            }
          />
          <div className={styles.right}>{String(timer).padStart(3, '0')}</div>
        </div>
        <div className={styles.board}>
          {board.map((row, y) =>
            row.map((number, x) => (
              <div
                className={number === -1 ? styles.stone : styles.number}
                style={number >= 0 ? { backgroundPosition: `${(number - 1) * -55.83}px 0` } : {}}
                key={`${y}-${x}`}
                onClick={(e) => onClick(y, x, e)}
                onContextMenu={(e) => onClick(y, x, e)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};
export default Home;
