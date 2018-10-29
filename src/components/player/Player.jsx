import React from 'react';

import playerWalk from './player-walk.png';
import handleMovement from './movement';  // remove

const Player = props => (
  <div
    style={{
      zIndex: '2',
      position: 'absolute',
      top: props.position[1],
      left: props.position[0],
      width: '64px',
      height: '64px',
      backgroundImage: `url(${playerWalk})`
    }}
  />
);

// change this
export default handleMovement(Player);