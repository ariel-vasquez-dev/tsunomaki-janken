const gameResult = (pick, housePick) => {  
  console.log('gameresasd', pick, housePick)
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

      console.log('pepe', result())
      return result() ? 'win' : 'lose'
    } else {
      return 'draw'
    }
  } else {
    console.log(' EMPTY')
  }
}

export default gameResult;