import * as actionTypes from './actionTypes';
//import updateObject from '../../utils/updateObject';

const initialState = {
  position: [0, 0]
};

/*const addIngredient = (state, action) => {
  const updatedIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] + 1};
  const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
    building: true
  };
  return updateObject(state, updatedState);
};

const movePlayer = (state, action) => {
  return updateObject(state, {

  });
}*/

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    //case actionTypes.MOVE_PLAYER: return { ...action.payload };
    case actionTypes.MOVE_PLAYER: return {...action.payload};
    default: return state;
  }
}

export default playerReducer;