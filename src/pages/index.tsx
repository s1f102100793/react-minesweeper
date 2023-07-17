import { Cell } from '../components/Cell';
import { Upper } from '../components/Upper';
import { useGame } from '../hooks/useGame';
import styles from './index.module.css';

const Home = () => {
  const { clearcount, gameover, timer, onClick, bombcount2, resetboard, board, bombcount } =
    useGame();

  return (
    <div className={styles.container}>
      <div className={styles.boardboard}>
        <Upper
          bombcount={bombcount}
          clearcount={clearcount}
          bombcount2={bombcount2}
          gameover={gameover}
          resetboard={resetboard}
          timer={timer}
        />
        <div className={styles.board}>
          {board.map((row, y) =>
            row.map((col, x) => (
              <Cell key={`${y}-${x}`} number={col} y={y} x={x} onClick={(e) => onClick(y, x, e)} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};
export default Home;
