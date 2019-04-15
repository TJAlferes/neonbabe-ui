import React from 'react';

import './world.css';
import Map from '../Map/Map';
import Player from '../Player/Player';

//import tiles
//import store from '../../store/store';

const World = props => {
  //store.dispatch({type: 'ADD_TILES', payload: {tiles}});
  return (
    <div className="world" id="world">
      <Map />
      <Player />
    </div>
  );
}

export default World;