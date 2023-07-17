import styles from './cell.module.css';

export const Cell = (props: {
  number: number;
  y: number;
  x: number;
  onClick: (y: number, x: number, e: React.MouseEvent<HTMLDivElement>) => void;
}) => {
  const backgroundPositionX = (props.number - 1) * -55.8;

  return (
    <div
      className={props.number === -1 ? styles.stone : styles.number}
      style={props.number >= 0 ? { backgroundPosition: `${backgroundPositionX}px 0` } : {}}
      onClick={(e) => props.onClick(props.y, props.x, e)}
      onContextMenu={(e) => props.onClick(props.y, props.x, e)}
    />
  );
};
