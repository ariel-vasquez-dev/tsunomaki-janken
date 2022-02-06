import { useContext } from 'react';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import { GameContext } from '../../context/GameProvider';
import styles from './Lobby.module.scss';

const Lobby = ({ children }) => {
  const { gameInProgress } = useContext(GameContext);

  return (
    <div>
      <AnimatePresence>
        {!gameInProgress &&
          <MotionConfig transition={{ duration: .6 }}>
            <motion.div
              animate='animate'
              initial='initial'
              exit='exit'
              className={styles.lobby}
              variants={{
                initial: {
                  transform: 'scale(1.4)',
                  filter: 'blur(100px)',
                  opacity: 0,
                },
                animate: {
                  transform: 'scale(1)',
                  filter: 'blur(0px)',
                  opacity: 1,
                },
                exit: {
                filter: 'blur(100px)',
                  opacity: 0,
                }
              }}
            >
              { children }
            </motion.div>
          </MotionConfig>
        }
      </AnimatePresence>
    </div>
  )
}

export default Lobby;
