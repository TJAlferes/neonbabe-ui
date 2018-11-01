import store from '../../store/store';

import * as actionTypes from './actionTypes';
//import debounce from '../../utils/debounce';
import throttle from '../../utils/throttle';

/*export const movePlayer = player => ({
  type: actionTypes.MOVE_PLAYER,

});*/

const MAP_SIZE = 16;

export const moveMap = theMap => {
  //return dispatch => {};
  let getNewPosition = direction => {
    const oldPosition = store.getState().theMap.backgroundPosition;
    console.log(oldPosition[0]);
    console.log(oldPosition[1]);
    switch (direction) {
      case 'NORTH': return [oldPosition[0], (oldPosition[1] + MAP_SIZE)];
      case 'EAST': return [(oldPosition[0] - MAP_SIZE), oldPosition[1]];
      case 'SOUTH': return [oldPosition[0], (oldPosition[1] - MAP_SIZE)];
      case 'WEST': return [(oldPosition[0] + MAP_SIZE), oldPosition[1]];
    }
  }

  let dispatchMove = direction => {
    store.dispatch({
      type: actionTypes.MOVE_MAP,
      payload: {
        backgroundPosition: getNewPosition(direction)
      }
    });
  }

  let handleKeyDown = e => {
    e.preventDefault();
    e.stopPropagation();
    switch (e.keyCode) {
      case 38: return dispatchMove('NORTH');
      case 39: return dispatchMove('EAST');
      case 40: return dispatchMove('SOUTH');
      case 37: return dispatchMove('WEST');
      default: console.log(e.keyCode);
    }
  }

  //window.addEventListener('keypress', e => handleKeyPress(e));
  window.addEventListener(
    'keydown',
    throttle(250, function(e) {
      return handleKeyDown(e);
    })
  );

  return theMap;
}