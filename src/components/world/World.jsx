import React from 'react';

import MapContainer from '../map/MapContainer';
import PlayerContainer from '../player/PlayerContainer';

//import tiles
//import store from '../../store/store';

const World = props => {
  //store.dispatch({type: 'ADD_TILES', payload: {tiles}});
  return (
    <div
      id="world"
      style={{
        position: 'relative',
        width: '360px',
        height: '240px',
        backgroundColor: 'greenyellow'
      }}
    >
      <MapContainer />
      <PlayerContainer />
    </div>
  );
}

export default World;