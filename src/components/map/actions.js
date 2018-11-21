import store from '../../store/store';

import * as actionTypes from './actionTypes';
//import debounce from '../../utils/debounce';
import throttle from '../../utils/throttle';

/*export const movePlayer = player => ({
  type: actionTypes.MOVE_PLAYER,

});*/

// import these from a config constants
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
    
    //let wait = e.shiftKey ? 200 : 300;
    //console.log(wait);
    // .repeat is obsolete? doesn't work in some browsers?

    if (!waiting) {
      var timer = setTimeout(function() {}, 200);
      timer();
      var timestampOne = Date.now();
    }
    let waiting = true;

    document.onkeyup = function() {
      releasedKey = true;
      var timestampTwo = Date.now();
      if (timestampOne < timestampTwo) {
        clearTimeout(timer);
      }
      clearTimeout(timer);
    }
    waiting = false;


    if (!waiting) {  // if no keyup (formerly e.repeat)
      switch (e.key) {
        case 38: return dispatchMove('NORTH');
        case 39: return dispatchMove('EAST');
        case 40: return dispatchMove('SOUTH');
        case 37: return dispatchMove('WEST');
        default: console.log(e.key);
      }
    }
  }

  //window.addEventListener('keypress', e => handleKeyPress(e));
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

  window.addEventListener(
    'keydown',
    function(e) {

    }
  );

  return theMap;
}