import {Map} from 'immutable';
import { createStore } from 'redux';

const MOVE = 'MOVE';

let board = Map();

export const move = (player, coords) => {
  return {type: MOVE, coords, player};
};

// const store = createStore(reducer);

export default function reducer(state = {turn: 'X', board: board}, action) {
  switch (action.type) {
    case MOVE:
    if (state.turn === 'X') {
      return { turn: 'O', board: state.board.setIn(action.coords, action.player) };
    } else {
        return { turn: 'X', board: state.board.setIn(action.coords, action.player) };
    }
    default:
    return state;
  }
}


