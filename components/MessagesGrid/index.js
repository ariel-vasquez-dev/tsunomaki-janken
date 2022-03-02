import { useEffect, useState } from 'react';
import { collection, onSnapshot } from "firebase/firestore";
import { db } from '../../firebase/client';
import { Container, Message } from '..';
import styles from './MessagesGrid.module.scss';
import Masonry from 'react-masonry-css'
import { useBreakpoint } from '../../hooks';

const MessagesGrid = () => {
  const [ messages, setMessages ] = useState([]);
  const { respondAbove } = useBreakpoint();

  useEffect(() => {
    onSnapshot(collection(db, 'scores'), snapshot => {
      setMessages(snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })));
    })
  }, [])

  const isDesktop = respondAbove('md');
  const isIpad = respondAbove('sm');
  const numberOfColumns = isDesktop ? 3 : isIpad ? 2 : 1;

  return (
    <div className={styles.messagesGrid}>
      <Container>
        <Masonry
          breakpointCols={numberOfColumns}
          className={styles.masonry}
          columnClassName={styles.masonryColumn}
        >
          {messages && messages.map(message => {
            return (
              <Message
                key={message.id}
                {...message}
              />
            )
          })}
        </Masonry>
      </Container>
    </div>
  )
}

export default MessagesGrid;
