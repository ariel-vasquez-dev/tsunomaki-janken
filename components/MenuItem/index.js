import styles from './MenuItem.module.scss';
import { motion } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image';
import { variants, images } from './data';

const MenuItem = ({ path, title }) => {
  return (
    <Link
      href={path}
    >
      <a
        className={styles.itemContainer}
      >
        <motion.li
          className={styles.item}
          variants={variants}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
        >
          <div 
            className={styles.img} 
          >
            <Image 
              src={images[0]}
              objectFit="cover"
              alt='Icon'
              width={40}
              height={40}
            />
          </div>

          <div 
            className={styles.text} 
          >
            { title }
          </div>
        </motion.li>
      </a>
    </Link>
  );
};

export default MenuItem;
