import styles from './Message.module.scss';
import { Title, P } from '..';
import Image from 'next/image';

const Message = ({ score, userName, avatar, message }) => {
  return (
    <article className={styles.message}>
      <header className={styles.header}>
        <Image
          className={styles.img}
          src={avatar}
          alt={userName}
          width={100}
          height={100}
        />
        <Title 
          className={styles.title}
          size='sm'
        >
          { userName }
        </Title>
      </header>

      <P className={styles.copy}>{ message }</P>

      <div className={styles.scores}>
        <div className={styles.scoreItem}>
          <P>WIN</P>
          <P>{score.win}</P>
        </div>

        <div className={styles.scoreItem}>
          <P>LOSE</P>
          <P>{score.lose}</P>
        </div>

        <div className={styles.scoreItem}>
          <P>DRAW</P>
          <P>{score.draw}</P>
        </div>
      </div>
    </article>
  )
}

export default Message;
