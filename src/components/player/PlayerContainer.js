import { connect } from 'react-redux';

import Player from './Player';

const mapStateToProps = state => ({
  ...state.player
});

export default connect(mapStateToProps)(Player);