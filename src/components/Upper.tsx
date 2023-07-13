import styles from './upper.module.css';

export const Upper = (props: {
  bombcount: number;
  clearcount: number;
  bombcount2: number;
  gameover: number;
  resetboard: () => void;
  timer: number;
}) => {
  return (
    <div className={styles.upper}>
      <div className={styles.left}> {String(props.bombcount).padStart(3, '0')} </div>
      <button
        className={
          props.clearcount === props.bombcount2
            ? styles.clear
            : props.gameover === 1
            ? styles.over
            : styles.middle
        }
        onClick={props.resetboard}
      />
      <div className={styles.right}>{String(props.timer).padStart(3, '0')}</div>
    </div>
  );
};
