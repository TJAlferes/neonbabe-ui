import * as actionTypes from './actionTypes';

export const movePlayer = player => {
  //return dispatch => {};
  window.addEventListener('keydown', e => handleKeyDown(e));
  const handleKeyDown = e => {
    e.preventDefault();
    switch(e.keyCode) {
      default: console.log(e.keyCode);
    }
  }
  return player;
}