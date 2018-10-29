import React, { useState, useEffect } from 'react';

import MapContainer from '../map/MapContainer';
import PlayerContainer from '../player/PlayerContainer';

import './app.css';

const App = props => {
  //const [ isLoggedIn, setIsLoggedIn ] = useState(null);

  //if (isLoggedIn === null) return 'Loading...';
  //return isLoggedIn ? <HomeReturn /> : <HomeNew />;
  return (
    <div id="screen">
      <MapContainer>
        <PlayerContainer />
      </MapContainer>
    </div>
  );
}

export default App;