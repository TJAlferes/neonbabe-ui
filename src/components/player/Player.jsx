import React from 'react';

import playerWalk from './player-example-32.png';

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
      backgroundImage: `url(${playerWalk})`,
      backgroundPosition: `
        ${props.backgroundPosition[0]}px
        ${props.backgroundPosition[1]}px
      `
    }}
  />
);

export default Player;