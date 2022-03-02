import styles from './SocialMedia.module.scss';
import { Icon } from '..';
import { socialMedia } from './data';

const SocialMedia = () => {
  return (
    <div className={styles.socialMedia}>
      {socialMedia.map(({ icon, link }) => {
        return (
          <a
            key={link}
            className={styles.iconContainer}
            href={link}
            target='_blank'
            rel="noreferrer"
          >
            <Icon 
              icon={icon}
              className={styles.icon}
            />
          </a>
        )
      })}
    </div>
  )
}

export default SocialMedia;
