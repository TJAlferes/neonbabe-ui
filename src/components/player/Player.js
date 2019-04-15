import React from 'react';
import { connect } from 'react-redux';

import { movePlayer } from './actions';
import './player.css';
import playerWalk from './player-example-32.png';

const Player = props => (
  <div
    className="player"
    id="player"
    style={{
      backgroundImage: `url(${playerWalk})`,
      backgroundPosition: `${props.backgroundPosition[0]}px ${props.backgroundPosition[1]}px`
    }}
  />
);

const mapStateToProps = state => ({
  ...state.player
});

export default connect(mapStateToProps)(movePlayer(Player));