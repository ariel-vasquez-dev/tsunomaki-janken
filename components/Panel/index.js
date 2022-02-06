import styles from './Panel.module.scss';
import { Score, Button } from '..';

const Panel = () => {
  return (
    <div className={styles.panel}>
      <Score />

      <Button className={styles.button}>Share your score!</Button>
    </div>
  )
}

export default Panel;
