import styles from './Button.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

const Button = ({ children, className = '', ...props }) => {
  return (
    <button 
      className={`${styles.button} ${className}`}
      {...props}
    >
      { children }
      <FontAwesomeIcon className={styles.icon} icon={faCaretRight} />
    </button>
  )
}

export default Button;