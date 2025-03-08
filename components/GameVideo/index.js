import { useContext, useEffect, useRef } from 'react';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import { GameContext } from '../../context/GameProvider';
import styles from './GameVideo.module.scss';

const GameVideo = () => {
  const { gameInProgress, setGameInProgress, housePick } = useContext(GameContext);
  const videoRef = useRef(null)

  // We toggle the video queue to exit when it's finished playing.
	useEffect(() => {
    videoRef?.current?.addEventListener('ended', () => {
      setGameInProgress(false);
    })
	}, [setGameInProgress]);

  const skipVideo = () => {
    setGameInProgress(false);
  }

  return (
    <div className={styles.gameVideo}>
      <AnimatePresence>
        {gameInProgress &&
          <MotionConfig transition={{ duration: .6 }}>
            <motion.div
               animate='animate'
               initial='initial'
               exit='exit'
               variants={{
                 initial: {
                   transform: 'scale(1.4)',
                   opacity: 0,
                 },
                 animate: {
                   transform: 'scale(1)',
                   opacity: 1,
                 },
                 exit: {
                   opacity: 0,
                 }
               }}
            >
              <div 
                className={styles.skip}
                onClick={skipVideo}
              >
                SKIP
              </div>

              <video 
                autoPlay 
                // muted
                src={`/videos/${housePick}.mp4`} 
                type="video/mp4" 
                className={styles.video}
                ref={videoRef}
              />
            </motion.div>
          </MotionConfig>
        }
      </AnimatePresence>
    </div>
  )
}

export default GameVideo;