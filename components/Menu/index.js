import { useRef } from "react";
import styles from './Menu.module.scss';
import { motion, useCycle } from "framer-motion";
import { useDimensions } from '../../hooks';
import { MenuToggle, MenuNavigation } from '..';

const sidebarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    zIndex: 9,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    zIndex: 0,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};


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
      <MenuNavigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  )
}

export default Menu;