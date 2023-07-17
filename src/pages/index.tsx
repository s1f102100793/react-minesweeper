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