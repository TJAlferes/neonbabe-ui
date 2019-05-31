import * as React from 'react';

import './world.css';
import Map from '../Map/Map.tsx';
import Player from '../Player/Player.tsx';

//import tiles
//import store from '../../store/store';

type Props = {};

const World = (props : Props) => {
  //store.dispatch({type: 'ADD_TILES', payload: {tiles}});
  return (
    <div className="world" id="world">
      <Map />
      <Player />
    </div>
  );
}

export default World;