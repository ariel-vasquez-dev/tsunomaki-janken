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
              opacity: 0
            },
            layoutAnimate: {
              opacity: 1,
            },
            layoutExit: {
              opacity: 0,
            }
          }}
        >
          <Main>          
            {children}
          </Main>
        </motion.div>
      </MotionConfig>
    </div>
  )
}

export default Layout;