import { useRef } from "react";
import styles from './Menu.module.scss';
import { motion, useCycle } from "framer-motion";
import { useDimensions } from '../../hooks';
import { MenuToggle, MenuNavigation } from '..';
import { sidebarVariants } from './data'

const Menu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      className={styles.nav}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div 
        className={styles.background} 
        variants={sidebarVariants} 
      />
      <MenuNavigation
        isOpen={isOpen}
      />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  )
}

export default Menu;