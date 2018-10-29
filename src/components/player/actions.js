import store from '../../store/store';

import * as actionTypes from './actionTypes';

/*export const movePlayer = player => ({
  type: actionTypes.MOVE_PLAYER,

});*/

const PLAYER_SIZE = 64;

export const movePlayer = player => {
  //return dispatch => {};
  const getNewPosition = direction => {
    const oldPosition = store.getState().player.position;
    switch (direction) {
      case 'NORTH': return [oldPosition[0], (oldPosition[1] - PLAYER_SIZE)];
      case 'EAST': return [(oldPosition[0] + PLAYER_SIZE), oldPosition[1]];
      case 'SOUTH': return [oldPosition[0], (oldPosition[1] + PLAYER_SIZE)];
      case 'WEST': return [(oldPosition[0] - PLAYER_SIZE), oldPosition[1]];
    }
  }

  const dispatchMove = direction => {
    store.dispatch({
      type: actionTypes.MOVE_PLAYER,
      payload: {
        position: getNewPosition(direction)
      }
    })
  }

  const handleKeyDown = e => {
    e.preventDefault();
    switch (e.keyCode) {
      case 38: return dispatchMove('NORTH');
      case 39: return dispatchMove('EAST');
      case 40: return dispatchMove('SOUTH');
      case 37: return dispatchMove('WEST');
      default: console.log(e.keyCode);
    }
  }

  window.addEventListener('keydown', e => handleKeyDown(e));

  return player;
}