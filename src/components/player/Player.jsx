import React from 'react';

import playerWalk from './player-walk-16.png';

const Player = props => (
  <div
    id="player"
    style={{
      position: 'absolute',
      /*
      top: props.position[1],
      left: props.position[0],
      */
      top: 112,
      left: 172,
      width: '16px',
      height: '16px',
      backgroundImage: `url(${playerWalk})`
    }}
  />
);

export default Player;