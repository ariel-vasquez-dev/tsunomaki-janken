import styles from './MenuNavigation.module.scss';
import { motion } from "framer-motion";
import { MenuItem } from "..";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const itemIds = [
  {
    id: 0,
    title: 'Home',
    path: '/',
  },
  {
    id: 1,
    title: 'Game',
    path: '/game'
  },
  {
    id: 2,
    title: 'Message',
    path: '/message'
  }
];

const MenuNavigation = () => (
  <motion.ul 
    className={styles.list}
    variants={variants}
  >
    {itemIds.map(props => (
      <MenuItem 
        key={props.id} 
        {...props}
      />
    ))}
  </motion.ul>
);

export default MenuNavigation;
