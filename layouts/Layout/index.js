import { motion, MotionConfig } from 'framer-motion';
import { Main, Menu } from '../../components';
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Menu />

      {/* Page Transition */}
        <MotionConfig transition={{ duration: .7 }}> 
          <motion.div
            animate='layoutAnimate'
            initial='layoutInitial'
            exit='layoutExit'
            variants={{
              layoutInitial: {
                opacity: 0,
                filter: 'blur(20px)',
                transform: 'scale(1.1)',
              },
              layoutAnimate: {
                opacity: 1,
                filter: 'blur(0px)',
                transform: 'scale(1)',
              },
              layoutExit: {
                opacity: 0,
                filter: 'blur(20px)',
                transform: 'scale(0.95)',
              }
            }}
          >
            {/* <motion.div
              className={styles.backgroundE}
              animate='Animate'
              initial='Initial'
              exit='Exit'
              variants={{
                Initial: {
                  x: -1000
                },
                Animate: {
                  opacity: 1,
                  x: 0

 
                },
                Exit: {
                  opacity: 0,
                  x: 1000

                }
              }}
            >

            </motion.div> */}
            <Main>          
              {children}
            </Main>
          </motion.div>
        </MotionConfig>

    </div>
  )
}

export default Layout;