import styles from './Icon.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({ icon, className = '' }) => {
  return (
    <FontAwesomeIcon 
      className={`${styles.icon} ${className}`} 
      icon={icon} 
    />
  )
}

export default Icon;