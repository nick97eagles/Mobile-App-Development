// 2. src/reducers/game.js

const initialState = {
    score: 0,
    gameOver: false,
    isStarted: false,
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case "TICK":
        return {
          ...state,
        };
      case "BOUNCE":
        return {
          ...state,
        };
      case "START":
        return {
          ...initialState,
          isStarted: true
        };
      default:
        return state;
    }
  };