import React from 'react';
import { connect } from 'react-redux';

import { moveMap } from './actions';
import './map.css';
import mapExample from './map-example.png';

const Map = props => (
  <div
    className="map"
    id="map"
    style={{
      backgroundImage: `url(${mapExample})`,
      backgroundPosition: `${props.backgroundPosition[0]}px ${props.backgroundPosition[1]}px`
    }}
  />
);

const mapStateToProps = state => ({
  ...state.Map
});

export default connect(mapStateToProps)(moveMap(Map)); // HOC pattern; change