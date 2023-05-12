const redux = require("redux");
const createStore = redux.createStore;

const CAKE_ORDERED = "CAKE_ORDERED";

function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}

const initalState = {
  numOfcakes: 10,
};

//(previousState, action) =>newState

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state, //use the spread operator when the state has more than one object as its initial property
        numOfcakes: state.numOfcakes - 1,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

unsubscribe();
store.dispatch(orderCake());
store.dispatch(orderCake());
