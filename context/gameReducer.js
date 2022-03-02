import ACTIONS from "../types";

export  const gameReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.GAME_IN_PROGRESS:
      return {
        ...state,
        gameInProgress: action.payload,
      };

    case ACTIONS.PICK:
      return {
        ...state,
        pick: action.payload,
      };  

    case ACTIONS.HOUSE_PICK:
      return {
        ...state,
        housePick: action.payload,
      };  

    case ACTIONS.WIN:
      return {
        ...state,
        score: { ...state.score, win: state.score.win + 1 }
      }

    case ACTIONS.LOSE:
      return {
        ...state,
        score: { ...state.score, lose: state.score.lose + 1 }
      }

    case ACTIONS.DRAW:
      return {
        ...state,
        score: { ...state.score, draw: state.score.draw + 1 }
      }

    case ACTIONS.LOGIN:
      return {
        ...state,
        uid: action.payload.uid,
        userName: action.payload.userName,
        avatar: action.payload.avatar,
      }
      
    default:
      return state;
  }
}
