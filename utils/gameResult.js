const gameResult = (pick, housePick) => {  
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

      return result() ? 'win' : 'lose'
    } else {
      return 'draw'
    }
  }
}

export default gameResult;