import React from 'react';
import { connect } from 'react-redux';

import playerWalk from './player-walk.png';

const Player = props => 
  <div
    style={{
      position: 'relative',
      top: props.position[1],
      left: props.position[0],
      backgroundImage: `url(${playerWalk})`
    }}
  />;

mapStateToProps = state => ({
  ...state.player
});

export default connect(mapStateToProps)(Player);