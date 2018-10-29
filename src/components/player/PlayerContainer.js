import { connect } from 'react-redux';

import { movePlayer } from './actions';
import Player from './Player.jsx';

const mapStateToProps = state => ({
  ...state.player
});

export default connect(mapStateToProps)(movePlayer(Player));