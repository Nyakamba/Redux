const redux = require("redux");
const createStore = redux.legacy_createStore;
const produce = require("immer").produce;

const initialState = {
  name: "Vishwas",
  address: {
    street: "123 Mian St",
    city: "Boston",
    state: "MA",
  },
};

const STREET_UPDATED = "STREET UPDATED";
const updateStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      //   return {
      //     ...state,
      //     address: {
      //       ...state.address,
      //       street: action.payload,
      //     },
      //};
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default: {
      return state;
    }
  }
};

const store = createStore(reducer);
console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);
store.dispatch(updateStreet("45644 Main St"));
unsubscribe();
