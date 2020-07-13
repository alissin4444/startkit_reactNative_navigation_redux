import produce from "immer";

import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
  addFruit: [],
});

export const FruitTypes = Types;

const INITIAL_STATE = [];

const addFruit = (state = INITIAL_STATE, action) =>
  produce(state, (draft) => {
    const actualIndexFruit = draft.length + 1
    draft.push(`Fruit ${actualIndexFruit}`)
  });

export default createReducer(INITIAL_STATE, {
  [Types.ADD_FRUIT]: addFruit,
});