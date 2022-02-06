import { useSpring, animated } from 'react-spring';
import styles from './Token.module.scss';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Token = ({url, name, onClick}) => {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));

  // const handleClick = () => {
  //   handleChoice(name);
  // }

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <animated.img
        className={styles.token}
        onMouseMove={({ clientX: x, clientY: y }) => set.start({ xys: calc(x, y) })}
        onMouseLeave={() => set.start({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.to(trans) }}
        src={url}
        alt={name}
        onClick={onClick}
      />
    </>
  )
}

export default Token;