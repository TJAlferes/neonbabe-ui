import * as React from 'react';

//import './app.css';
import World from 'components/World/World.tsx';

type Props = {};

const App = (props : Props) => {
  //const [ isLoggedIn, setIsLoggedIn ] = useState(null);

  //if (isLoggedIn === null) return 'Loading...';
  //return isLoggedIn ? <HomeReturn /> : <HomeNew />;
  return (
    <div className="app" id="app">
      <World />
    </div>
  );
}

export default App;