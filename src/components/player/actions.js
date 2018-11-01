import store from '../../store/store';

import * as actionTypes from './actionTypes';
import throttle from '../../utils/throttle';

/*export const movePlayer = player => ({
  type: actionTypes.MOVE_PLAYER,

});*/

// import these from a config constants
//const PLAYER_SIZE = 16;  // 19 or 20 in real game?

export const movePlayer = player => {
  //return dispatch => {};
  let getNewOrientation = direction => {
    //const oldPosition = store.getState().player.backgroundPosition;
    //console.log(`old player img pos: ${oldPosition[0]}, ${oldPosition[1]}`);
    console.log('called');
    switch (direction) {
      // change the math here
      case 'NORTH': return [0 , 0];
      case 'EAST': return [16, 0];
      case 'SOUTH': return [16, 16];
      case 'WEST': return [0, 16];
    }
  }

  let dispatchFacing = direction => {
    const oldPosition = store.getState().player.backgroundPosition;
    let newPosition;
    if (direction === 'NORTH') newPosition = [0, 0];
    if (direction === 'EAST') newPosition = [16, 0];
    if (direction === 'SOUTH') newPosition = [16, 16];
    if (direction === 'WEST') newPosition = [0, 16];
    // may have to compare individual elements?
    if (oldPosition === newPosition) return;

    store.dispatch({
      type: actionTypes.FACE_PLAYER,
      payload: {
        backgroundPosition: getNewOrientation(direction)
      }
    });
  }

  const handleKeyDown = e => {
    e.preventDefault();
    e.stopPropagation();

    //if (e.repeat) return;  // obsolete, and doesn't work in some browsers?

    switch (e.keyCode) {
      case 38: return dispatchFacing('NORTH');
      case 39: return dispatchFacing('EAST');
      case 40: return dispatchFacing('SOUTH');
      case 37: return dispatchFacing('WEST');
      default: console.log(e.keyCode);
    }
  }

  window.addEventListener(
    'keydown',
    throttle(
      250,
      function(e) {
        handleKeyDown(e);
      },
      true
    )
  );

  return player;
}