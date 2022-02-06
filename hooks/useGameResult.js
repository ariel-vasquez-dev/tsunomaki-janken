import { useContext, useState } from "react";
import { GameContext } from "../context/GameProvider";

const useGameResult = (setWin, setLose, setDraw) => {
  // const { setWin, setLose, setDraw } = useContext(GameContext);

  const [ allPicks, setAllPicks ] = useState({
    pick: '',
    housePick: ''
  })

  const { pick, housePick } = allPicks;

  if(pick !== '' && housePick !== '') {
    if(pick !== housePick) {
      const result = () => {
        switch (pick) {
          case 'rock':
            if(housePick === 'paper') {
              return false;
            }
            if(housePick === 'scissor') {
              return true;
            }
            break;
          case 'paper':
            if(housePick === 'rock') {
              return true;
            }
            if(housePick === 'scissor') {
              return false;
            }
            break;
          case 'scissor':
            if(housePick === 'rock') {
              return false;
            }
            if(housePick === 'paper') {
              return true;
            }
            break;
        
          default:
            break;
        }
      }
      result() ? setWin() : setLose()
    } else {
      setDraw()
    }
  }

  return {
    allPicks,
    setAllPicks,
  }
}

export default useGameResult;