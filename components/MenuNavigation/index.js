import styles from './MenuNavigation.module.scss';
import { motion } from "framer-motion";
import { MenuItem, SocialMedia } from "..";
import { items, variants, variants2 } from './data';

const MenuNavigation = ({ isOpen }) => {
  return (
    <motion.ul 
      className={`${styles.menuNavigation} ${isOpen ? styles.active : ''}`}
      variants={variants}
    >
      {items.map(props => (
        <MenuItem 
          key={props.id} 
          {...props}
        />
      ))}

      <motion.div 
        className={styles.socialMediaContainer}
        variants={variants2}
      >
        <SocialMedia />
      </motion.div>
    </motion.ul>
  )
};

export default MenuNavigation;
