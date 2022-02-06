import styles from './Game.module.scss';
import { Container, TokensGrid, GameVideo, Panel, Lobby } from '..';

const Game = () => {
  return (
    <section className={styles.game}>
      <Container>
        <div className={styles.content}>
          <Lobby>
            <Panel />
            <TokensGrid />
          </Lobby>
          
          <GameVideo />
        </div>
      </Container>
    </section>
  )
}

export default Game;
