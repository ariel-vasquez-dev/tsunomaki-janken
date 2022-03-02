import styles from './Button.module.scss';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '..';

const Button = ({ children, className = '', ...props }) => {
  return (
    <button 
      className={`${styles.button} ${className}`}
      {...props}
    >
      { children }
      <Icon 
        className={styles.icon} 
        icon={faCaretRight} 
      />
    </button>
  )
}

export default Button;