import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  addPaloma: null
});

export const PalomaTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  palomas: 0
});

/* ------------- Reducers ------------- */

// failed to get the avatar
export const addPaloma = state => {
  return {
    ...state,
    palomas: state.palomas + 1
  };
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_PALOMA]: addPaloma
});
