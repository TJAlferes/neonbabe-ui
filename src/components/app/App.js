import React, { useState, useEffect } from 'react';

import Player from '../player/Player';

import './app.css';

const App = props => {
  //const [ isLoggedIn, setIsLoggedIn ] = useState(null);

  //if (isLoggedIn === null) return 'Loading...';
  //return isLoggedIn ? <HomeReturn /> : <HomeNew />;
  return (
    <div id="screen">
      <Player />
    </div>
  );
}

export default App;