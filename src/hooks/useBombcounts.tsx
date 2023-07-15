// import { useBoard } from './useBoard';

// export const useBombcounts = () => {
//   const { board, bombMap } = useBoard();
//   const bombcounts = (y: number, x: number) => {
//     let bomb = 0;
//     const directions: number[][] = [
//       [-1, -1],
//       [-1, 0],
//       [-1, 1],
//       [0, 1],
//       [1, 1],
//       [1, 0],
//       [1, -1],
//       [0, -1],
//     ];
//     for (const w2 of directions) {
//       if (
//         board[y + w2[0]] !== undefined &&
//         board[x + w2[1]] !== undefined &&
//         bombMap[y + w2[0]][x + w2[1]] === 1
//       ) {
//         bomb++;
//       }
//     }
//     if (board[y][x] !== 11) {
//       if (bomb === 0) {
//         for (const w1 of directions) {
//           board[y][x] = 0;
//           if (
//             board[y + w1[0]] !== undefined &&
//             board[x + w1[1]] !== undefined &&
//             board[y + w1[0]][x + w1[1]] === -1 &&
//             board[y][x] !== 11
//           ) {
//             bombcounts(y + w1[0], x + w1[1]);
//           }
//         }
//       } else {
//         board[y][x] = bomb;
//       }
//     }
//   };

//   return { bombcounts};
// };
