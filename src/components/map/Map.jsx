import React from 'react';

import mapExample from './map-example.png';

const Map = props => (
  <div
    style={{
      zIndex: '1',
      width: '360px',
      height: '240px',
      backgroundImage: `url(${mapExample})`
    }}
  >
    {props.children}
  </div>
);

export default Map;