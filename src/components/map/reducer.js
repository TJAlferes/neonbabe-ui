import * as actionTypes from './actionTypes';
//import updateObject from '../../utils/updateObject';

const initialState = {
  backgroundPosition: [-950, -3200]
};

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MOVE_MAP: return {...action.payload};
    default: return state;
  }
}

export default mapReducer;