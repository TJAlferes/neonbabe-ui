import { combineReducers, createStore } from 'redux';

import mapReducer from '../components/map/reducer';
import playerReducer from '../components/player/reducer';

const rootReducer = combineReducers({
  theMap: mapReducer,
  player: playerReducer
});

const store = createStore(rootReducer);

export default store;