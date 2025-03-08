import styles from './Panel.module.scss';
import { Score, Button } from '..';
import { loginWithGoogle, db } from '../../firebase/client';
import { useContext } from 'react';
import { GameContext } from '../../context/GameProvider';
import Swal from 'sweetalert2';
import { collection, addDoc } from "firebase/firestore";

const Panel = () => {
  const { setLogin, uid, userName, avatar, score } = useContext(GameContext);

  const modalMessageProps = {
    input: 'textarea',
    inputLabel: 'Message',
    inputPlaceholder: 'Type your message here...',
    showCancelButton: true,
    inputAttributes: {
      'aria-label': 'Type your message here',
      maxlength: 400
    },
  }

  // Login
  const loginGoogle = async () => {
    loginWithGoogle()
      .then(({ user }) => {
      setLogin({
        uid: user.uid,
        userName: user.displayName,
        avatar: user.photoURL
      })

      shareScore();
    })
    .catch(err => {
      console.log(err)
    })
  }

  const handleClick = async () => {
    if (!uid) {
      await loginGoogle();
    } else {
      shareScore();
    }
  }

  const shareScore = async () => {
    const { isConfirmed, value } = await Swal.fire(modalMessageProps)

    if (isConfirmed) {
      try {
        const docRef = await addDoc(collection(db, 'scores'), {
          score,
          avatar,
          userName,
          message: value?.text ? text : '',
        });

        Swal.fire({
          icon: 'success',
          title: 'Your score has been shared!',
          showConfirmButton:false,
          footer: "<a href='/messages'>See all Messages</a>"
        })
      } catch (e) {
        console.error("Error adding document: ", e);

        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: e,
        })
      }
    }
  }

  return (
    <div className={styles.panel}>
      <Score />
      {/* {score.win > 0 || score.lose > 0 || score.draw > 0 ?
        <Button 
          className={styles.button}
          onClick={handleClick}
        >
          Share your score!
        </Button>
      : null} */}
    </div>
  )
}

export default Panel;
