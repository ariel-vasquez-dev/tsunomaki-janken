import styles from './Game.module.scss';
import { Container, TokensGrid, GameVideo, Panel, Lobby } from '..';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { GameContext } from '../../context/GameProvider';
import { useContext } from 'react';

const Game = () => {
  const { setLogin, uid } = useContext(GameContext);

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user && !uid) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      setLogin({
        uid: user.uid,
        userName: user.displayName,
        avatar: user.photoURL
      })
      // console.log(';PEPEPE', uid)
      // ...
    } else {
      // User is signed out
      // ...
    }

  });
  return (
    <section className={styles.game}>
      <Container>
        <div className={styles.content}>
          <Lobby>
            <TokensGrid />
            <Panel />
          </Lobby>
          
          <GameVideo />
        </div>
      </Container>
    </section>
  )
}

export default Game;
