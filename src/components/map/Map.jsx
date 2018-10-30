import React from 'react';

import mapExample from './map-example.png';

const TheMap = props => (
  <div
    id="map"
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '360px',
      height: '240px',
      backgroundImage: `url(${mapExample})`,
      backgroundPosition: `
        ${props.backgroundPosition[0]}px
        ${props.backgroundPosition[1]}px
      `
    }}
  />
);

export default TheMap;