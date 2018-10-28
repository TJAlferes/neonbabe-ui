import React, { useState, useEffect } from 'react';

const App = props => {
  const [ isLoggedIn, setIsLoggedIn ] = useState(null);

  if (isLoggedIn === null) return 'Loading...';
  return isLoggedIn ? <HomeReturn /> : <HomeNew />;
}

export default App;