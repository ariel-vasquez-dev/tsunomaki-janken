import styles from './MenuItem.module.scss';
import { motion } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#D0315D", "#8C4783", "#ECA16B", "#7700FF", "#4400FF"];
const images = ['/img/backgrounds/EdXP7lTUEAI8qX3.jpg']

const MenuItem = ({ id, path, title }) => {
  const style = { border: `2px solid ${colors[id]}`, color: `${colors[id]}` };
  return (
    <Link
      href={path}
    >
      <a>
        <motion.li
          className={styles.item}
          variants={variants}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className={styles.iconPlaceholder} style={style}>
            <Image 
              src={images[0]}
              // layout="fill"
              objectFit="cover"
              alt='Icon'
              width={40}
              height={40}
            />
          </div>
          <div className={styles.textPlaceholder} style={style}>{ title }</div>
        </motion.li>
      </a>
    </Link>
  );
};

export default MenuItem;
