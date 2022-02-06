import { useContext, useEffect } from 'react';
import styles from './TokensGrid.module.scss';
import { Token } from '..';
import { GameContext } from '../../context/GameProvider';
import { gameResult } from '../../utils';

const TokensGrid = () => {
  const tokens = [
    {
      "id": 0,
      "name": "rock",
      "url": "/img/tokens/rock.png"
    },
    {
      "id": 1,
      "name": "paper",
      "url": "/img/tokens/paper.png" 
    },
    {
      "id": 2,
      "name": "scissor",
      "url": "/img/tokens/scissor.png" 
    }
  ];

  const { setGameInProgress, setPick, setHousePick, setWin, setLose, setDraw, score } = useContext(GameContext);

  useEffect(() => {
    setGameInProgress(false);
  }, [])

  const handleStartGame = (isGameInProgress, pick) => {
    const houseSelectionPick = [...tokens][Math.floor(Math.random() * [...tokens].length)].name;
    setHousePick(houseSelectionPick);
    setGameInProgress(isGameInProgress)
    setPick(pick);
    const result = gameResult(pick, houseSelectionPick)

    if (result === 'win') {
      setWin()
    }

    if (result === 'lose') {
      setLose()
    }

    if (result === 'draw') {
      setDraw()
    }
  }

  return (
    <div className={styles.tokensGrid}>
      {tokens.map(({url, name, id}) => (
        <Token
          key={id} 
          url={url} 
          name={name} 
          onClick={() => handleStartGame(true, name)}
        />
      ))}
    </div>
  )
}

export default TokensGrid;