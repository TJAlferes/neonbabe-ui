import React, { useState, useEffect } from 'react';

//import WorldContainer from '../world/WorldContainer';
import World from '../world/World.jsx';

const App = props => {
  //const [ isLoggedIn, setIsLoggedIn ] = useState(null);

  //if (isLoggedIn === null) return 'Loading...';
  //return isLoggedIn ? <HomeReturn /> : <HomeNew />;
  return (
    <div id="app">
      <World />
    </div>
  );
}

export default App;