import React from 'react';
import { connect } from 'react-redux';

import playerWalk from './player-walk.png';

const Player = props => 
  <div
    style={{
      position: 'absolute',
      top: props.position[1],
      left: props.position[0],
      width: '64px',
      height: '64px',
      backgroundImage: `url(${playerWalk})`
    }}
  />;

const mapStateToProps = state => ({
  ...state.player
});

export default connect(mapStateToProps)(Player);