import { connect } from 'react-redux';

import { moveMap } from './actions';
import TheMap from './Map.jsx';

const mapStateToProps = state => ({
  ...state.theMap
});

export default connect(mapStateToProps)(moveMap(TheMap)); // HOC pattern; change