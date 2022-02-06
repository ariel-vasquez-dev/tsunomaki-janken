import { useContext } from 'react';
import { GameContext } from '../../context/GameProvider';
import styles from './Score.module.scss';
import { P } from '..';

const Score = () => {
  const { score } = useContext(GameContext);

  return (
    <div className={styles.score}>
      <div className={styles.scoreItem}>
        <P className={styles.scoreTitle}>WIN</P>
        <P className={styles.scoreNumber}>{ score.win }</P>
      </div>

      <div className={styles.scoreItem}>
        <P className={styles.scoreTitle}>LOSE</P>
        <P className={styles.scoreNumber}>{ score.lose }</P>
      </div>

      <div className={styles.scoreItem}>
        <P className={styles.scoreTitle}>DRAW</P>
        <P className={styles.scoreNumber}>{ score.draw }</P>
      </div>
    </div>
  )
}

export default Score;
